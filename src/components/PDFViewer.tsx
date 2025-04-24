import { useEffect, useRef } from "react";
import { getDocument, GlobalWorkerOptions, RenderTask } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@5.1.91/build/pdf.worker.min.mjs";

interface PDFViewerProps {
  url: string;
}

function PDFViewer({ url }: PDFViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const renderTaskRef = useRef<RenderTask | null>(null);

  useEffect(() => {
    const render = async () => {
      const loadingTask = getDocument(url);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      const container = containerRef.current;

      if (!canvas || !context || !container) {
        return;
      }

      const viewport = page.getViewport({ scale: 1.25 });

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }

      renderTaskRef.current = page.render({ canvasContext: context, viewport });

      try {
        await renderTaskRef.current.promise;
      } catch {}
    };

    render();

    return () => {
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [url]);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default PDFViewer;
