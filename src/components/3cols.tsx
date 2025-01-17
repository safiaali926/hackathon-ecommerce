import Image from "next/image";
import Link from "next/link";

export default function Th() {
  return (
    <div className="m-9 py-10">
      {/* Main Grid Layout with 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* First Column */}
        <div className="relative bg-[#FFF6FB] p-4 flex flex-col justify-between h-[250px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom bg-right w-full h-full"
            style={{ backgroundImage: "url('/x1.png')" }}
          >
            {/* Image as background */}
          </div>
          <div className="relative z-10 text-left p-4">
            <h2 className="text-[#151875] text-xl font-semibold mb-2">23% off in all products</h2>
            <Link href="/" className="text-pink-500 hover:underline">Shop Now</Link>
          </div>
        </div>

        {/* Second Column */}
        <div className="relative bg-[#EEEFFB] p-4 flex flex-col justify-between h-[250px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom bg-right w-full h-full"
            style={{ backgroundImage: "url('/x2.png')" }}
          >
            {/* Image as background */}
          </div>
          <div className="relative z-10 text-left p-4">
            <h2 className="text-[#151875] text-xl font-semibold mb-2">23% off in all products</h2>
            <Link href="/" className="text-pink-500 hover:underline">View Collection</Link>
          </div>
        </div>

        {/* Third Column (Contains 3 rows with 2 columns each) */}
        <div className="grid grid-rows-3 gap-6 h-[250px]">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-20 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/x3.png" // Example image source
                alt="Image 3"
                layout="fill"
                objectFit="contain" // Changed to contain to avoid cutting the image
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through">$32.00</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-20 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/x4.png" // Example image source
                alt="Image 4"
                layout="fill"
                objectFit="contain" // Changed to contain to avoid cutting the image
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through">$32.00</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-20 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/x5.png" // Example image source
                alt="Image 5"
                layout="fill"
                objectFit="contain" // Changed to contain to avoid cutting the image
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through">$32.00</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
