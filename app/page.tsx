import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen sm:flex-row">
    <div className="w-full h-1/2 sm:w-1/2 sm:h-full relative overflow-hidden">
      <div className="inset-0 w-full  h-full">
        <Image
          src="/home.jpg"
          alt="SCH SoundWorks"
          width={1012}
          height={1018}
          priority
          className="object-cover inset-0 w-full h-full animate-fadeIn grayscale mt-16"
        />
      </div>
    </div>

    <div className="w-full h-1/2 sm:w-1/2 sm:h-full flex flex-col justify-around sm:justify-center items-center sm:items-start p-8 sm:space-y-4">
        <h2
          className="text-3xl sm:text-5xl font-bold hover:text-yellow-300 transition-colors cursor-default"
        >
          a big description
        </h2>
    </div>
  </main>
  );
}
