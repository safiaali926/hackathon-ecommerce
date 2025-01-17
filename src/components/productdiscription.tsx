import React from "react";
import Image from "next/image";   
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";

const DiscountItemtwo: React.FC = () => {
  return (
    <>
      <div className="m-9  bg-[#F9F8FE]">
        {/* Featured Products Title centered */}
        
        <Tabs defaultValue="c1" className="w-full "> {/* Set defaultValue to "chair1" */}
          <TabsList className=" flex justify-center space-x-8">
            <TabsTrigger value="c1" className="hover:text-pink-500 hover:underline text-[#151875]">
              Description 
            </TabsTrigger>
            <TabsTrigger value="c2" className="hover:text-pink-500 hover:underline text-[#151875]">
              Additional Info
            </TabsTrigger>
            <TabsTrigger value="c3" className="hover:text-pink-500 hover:underline text-[#151875]">
              Reviews
            </TabsTrigger>
            <TabsTrigger value="c4" className="hover:text-pink-500 hover:underline text-[#151875]">
              Video
            </TabsTrigger>
          </TabsList>

          {/* Content for Wood Chair Tab */}
          <TabsContent value="c1">
            <section className="py-16">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                {/* Left Content */}
                <div className="flex-1">
                  <h3 className="text-[#151875] text-xl ">
                  Varius tempor.
                  </h3>
                
                  <p className="text-[#B7BACB] mb-6">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .                  </p>

                   {/* Four-Line List with Arrow Bullets */}
                   <h3 className="text-[#151875] text-xl">
                  More Details
                  </h3>
        <div className="p-6">
          <ul className="list-none space-y-4 text-[#A9ACC6]">
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
          </ul>
        </div>
        </div>
        </div>
            </section>
          </TabsContent>


  {/* Content for Wood Chair Tab */}
  <TabsContent value="c2">
            <section className="py-16">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                {/* Left Content */}
                <div className="flex-1">
                  <h3 className="text-[#151875] text-xl ">
                  Varius tempor.
                  </h3>
                
                  <p className="text-[#B7BACB] mb-6">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .                  </p>

                   {/* Four-Line List with Arrow Bullets */}
                   <h3 className="text-[#151875] text-xl">
                  More Details
                  </h3>
        <div className="p-6">
          <ul className="list-none space-y-4 text-[#A9ACC6]">
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
          </ul>
        </div>
        </div>
        </div>
            </section>
          </TabsContent>

            {/* Content for Wood Chair Tab */}
            <TabsContent value="c3">
            <section className="py-16 ">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                {/* Left Content */}
                <div className="flex-1">
                  <h3 className="text-[#151875] text-xl ">
                  Varius tempor.
                  </h3>
                
                  <p className="text-[#B7BACB] mb-6">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .                  </p>

                   {/* Four-Line List with Arrow Bullets */}
                   <h3 className="text-[#151875] text-xl">
                  More Details
                  </h3>
        <div className="p-6">
          <ul className="list-none space-y-4 text-[#A9ACC6]">
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
          </ul>
        </div>
        </div>
        </div>
            </section>
          </TabsContent>



  {/* Content for Wood Chair Tab */}
  <TabsContent value="c4">
            <section className="py-16 ">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                {/* Left Content */}
                <div className="flex-1">
                  <h3 className="text-[#151875] text-xl ">
                  Varius tempor.
                  </h3>
                
                  <p className="text-[#B7BACB] mb-6">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .                  </p>

                   {/* Four-Line List with Arrow Bullets */}
                   <h3 className="text-[#151875] text-xl">
                  More Details
                  </h3>
        <div className="p-6">
          <ul className="list-none space-y-4 text-[#A9ACC6]">
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
            <li className="flex items-center">
              <span className="text-sm ">➤ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
            </li>
          </ul>
        </div>
        </div>
        </div>
            </section>
          </TabsContent>

        </Tabs>


      </div>


      <h3 className="text-[#151875] text-2xl m-9 font-bold">
                 Related Products 
                  </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-9">
            {/* Product 1 */}
            <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p5.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/p6.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/p7.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>



             {/* Product 4 */}
             <div className="relative group">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src="/p1.png"
                  alt="Comfort Handy Craft"
                  width={250}  // Decreased width
                  height={250} // Decreased height
                  className="border-2 border-gray-100 w-full p-5 h-full bg-gray-100 hover:bg-white"
                />
                {/* Sale Tag - Appear only on hover */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Sale
                </div>
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" /> {/* Smaller size */}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" /> {/* Smaller size */}
                  </button>
                </div>
              </div>
              {/* Product Title - Link added */}
              <div className="mt-4 flex items-center">
                <a href="/product/comfort-handy-craft" className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                  Comfort Handy Craft
                </a>
              </div>
              {/* Product Price - Positioned at the bottom right */}
              <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                <p>
                  $42.00
                  <span className="line-through text-red-500 text-sm px-1">
                    $65.00
                  </span>
                </p>
              </div>
            </div>

            </div>

            <div className='place-items-center'><Image src="/bg2.png" alt="footerimg" width={900} height={93}></Image></div>
    </>
  );
};

export default DiscountItemtwo;
