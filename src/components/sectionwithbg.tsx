import React from "react";
import Link from "next/link";
import Image from "next/image"
export function SectionWithBackground() {
  return (
    <div>
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg1.png')", // Replace with your image path
      }}
    >
      {/* Overlay (optional for darkening the background) */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Content (Text and Button) */}
      <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#151875] mb-9 leading-relaxed">
            Get Latest Update By Subscribe
            <br className="hidden md:block" />
            Our Newsletter
          </h2>
          
          <Link
            href="#"
            className="px-8 py-3 bg-pink-500 text-white rounded-sm hover:bg-pink-600 transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>



      </div>


      <div className="flex justify-center items-center w-full">
      <div className="text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <Image 
          src="/bg2.png" 
          alt="Background Image" 
          width={904} 
          height={93} 
          layout="intrinsic"
          className="w-full h-auto"
        />
      </div>
    </div>

    
    </div>
  );
}

export default SectionWithBackground;
