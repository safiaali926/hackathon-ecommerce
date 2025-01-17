import Link from "next/link";
import Image from "next/image";

export default function ErrorPage() {
  return (
    <>
      {/* Header Section */}
      <div className="relative w-full h-[200px] bg-[#F6F5FF] text-left p-9 flex items-center justify-start mx-auto">
        <div className="max-w-xl w-full ">
          <h1 className="text-[#151875] font-bold text-2xl">404 Not Found</h1>
          <p>
            Home . Page . <span className="text-pink-500">404 Not Found</span>
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        {/* Centered Image */}
        <div className="mb-6">
          <Image
            src="/g2.png"
            alt="404 error"
            width={800}
            height={800}
            className="mx-auto"
          />
        </div>

        {/* Centralized Button */}
        <Link href="/" className="items-center justify-center">
          <button className="bg-pink-500 text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-pink-600">
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
}
