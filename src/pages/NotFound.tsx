import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useDocumentTitle from "@/hooks/useDocumentTitle";

function NotFound() {
  useDocumentTitle("Page Not Found");

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <Navbar />
      <main className="flex-1 font-mono flex flex-col justify-center items-center px-4">
        <div className="flex flex-col items-center gap-6 animate-fade-in text-center">
          <p className="text-xs tracking-widest uppercase text-[#31A0F5]">
            404
          </p>
          <h1 className="text-3xl font-semibold text-white">Page Not Found</h1>
          <p className="text-[#B2B2B2] text-sm max-w-sm">
            Looks like this page doesn't exist. You may have mistyped the address or the page has moved.
          </p>
          <div className="w-8 h-[1px] bg-gray-700 rounded-full" />
          <Link
            to="/"
            className="text-sm text-[#31A0F5] hover:text-white transition duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
