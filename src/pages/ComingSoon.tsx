import Tag from "@/components/Tag.tsx";

function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#111111] font-mono flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold">
        <Tag label="COMING SOON!" preset="red" />
      </h1>
    </div>
  );
}

export default ComingSoon;
