import Image from "next/image";
import Link from "next/link";

export default function Uniquefeature() {
  return (
    <>
      <div className="bg-[#F1F0FF] py-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 px-4">
          {/* Image Section */}
          <div
            className="relative w-full md:w-[550px] h-[550px] mx-auto flex justify-center items-center bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Ellipse 63.png')",
              backgroundSize: "520px", // Adjust the size of the background image
            }}
          >
            <Image
              src="/mirror2.png"
              alt="Unique Sofa"
              width={450}
              height={450}
              className="object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-start text-left pl-6">
            <h1 className="text-[#151875] text-3xl font-bold mb-8 text-center md:text-left">
            Unique Features of Our Latest & Trending Mirrors
            </h1>
            <ul className="pl-5 text-left space-y-4">
              <li className="flex items-center text-[#ACABC3]">
                <span className="w-3 h-3 bg-red-500 rounded-full inline-block mr-3"></span>
                Timeless Elegance: Crafted to complement both modern and classic interiors.
              </li>
              <li className="flex items-center text-[#ACABC3]">
                <span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-3"></span>
                Durability You Can Trust: Engineered to last with high-quality materials and expert construction techniques.
              </li>
              <li className="flex items-center text-[#ACABC3]">
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block mr-3"></span>
                Trending Designs: Explore the latest styles that blend sophistication with contemporary charm.
              </li>
            </ul>

            {/* Button and Price Text */}
            <div className="mt-6 flex flex-col items-center md:flex-row md:items-start md:space-x-6">
              {/* Center button in mobile view */}
              <Link
                href="/mirrors"
                className="px-6 py-3 bg-pink-500 text-white rounded-sm hover:bg-green-500 hover:text-white text-center"
              >
                Shop Now →
              </Link>
              {/* <p className="text-[#151875] text-center md:text-left mt-4 md:mt-0">
                <span className="font-semibold">B&B Italian Sofa</span>
                <br />
                $32.00
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
