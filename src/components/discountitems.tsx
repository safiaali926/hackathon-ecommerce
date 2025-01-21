import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const DiscountItem: React.FC = () => {
  return (
    <>
      <div className="m-9">
        {/* Featured Products Title centered */}
        <div className="text-[#151875] text-3xl font-bold text-center mb-8">
          Discount Item
        </div>

        <Tabs defaultValue="chair1" className="w-full"> {/* Set defaultValue to "chair1" */}
          <TabsList className="bg-white flex justify-center space-x-8">
            <TabsTrigger value="chair1" className="hover:text-pink-500 hover:underline text-[#151875]">
              Arm Chair
            </TabsTrigger>
            <TabsTrigger value="chair2" className="hover:text-pink-500 hover:underline text-[#151875]">
              Gaming Chair
            </TabsTrigger>
            <TabsTrigger value="chair3" className="hover:text-pink-500 hover:underline text-[#151875]">
              Sofa Chair
            </TabsTrigger>
          </TabsList>

          {/* Content for Wood Chair Tab */}
          <TabsContent value="chair1">
            <section className="py-16 bg-white">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                {/* Left Content */}
                <div className="flex-1">
                  <h3 className="text-[#151875] text-[35px] font-bold">
                    20% Discount on All Products | Shop the Arm Chair Collection!
                  </h3>
                  <p className="text-pink-500 mb-6 font-semibold">
                    Redefine Comfort and Style

                  </p>
                  <p className="text-[#B7BACB] mb-6">
                    Elevate your living space with our exclusive Arm Chair Collection, crafted to bring a perfect balance of elegance and functionality.
                    Designed for those who value timeless aesthetics, our armchairs add a touch of luxury to any room.                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-5 text-[#B7BACB]">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Premium Materials: Durable exposed metals.
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Neutral Tones: Simple, versatile colors.
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Modern Design: Sleek lines and geometric shapes.
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Timeless Appeal: Perfect for any décor style.
                    </li>
                  </ul>

                  <Link
                    href="/chairs">
                    <button className="mt-8 bg-pink-500 text-white px-9 py-3 rounded shadow-md hover:bg-pink-600">
                      Shop Now
                    </button></Link>
                </div>

                {/* Right Content */}
                <div
                  className="relative w-full md:w-[550px] h-[550px] mx-auto flex justify-center items-center bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/d2.png')",
                    backgroundSize: "400px", // Adjust the size of the background image
                  }}
                >
                  <Image
                    src="/armchair.webp"
                    alt="Unique Sofa 1"
                    width={650}
                    height={650}
                    className="object-contain"
                  />
                </div>
              </div>
            </section>
          </TabsContent>



          {/* Content for Plastic Chair Tab */}
          <TabsContent value="chair2">
            <section className="py-16 bg-white">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                {/* Left Content */}
                <div className="flex-1">
                  <h3 className="text-[#151875] text-[35px] font-bold">
                    35% Off All Gaming Chairs | Enhance Your Play!
                  </h3>
                  <p className="text-pink-500 mb-6 font-semibold">
                    Game in Comfort and Style


                  </p>
                  <p className="text-[#B7BACB] mb-6">
                    Take your gaming experience to the next level with our Gaming Chair Collection, designed for maximum support and sleek design.                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-5 text-[#B7BACB]">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Premium Build: Crafted with durable materials.
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Ergonomic Design: Fully adjustable for personalized comfort.
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Sleek Aesthetics: Bold, modern design to match your setup.
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Enhanced Functionality: Recline, swivel, and height adjust for your perfect fit.
                    </li>
                  </ul>

                  <Link
                    href="/chairs">
                    <button className="mt-8 bg-pink-500 text-white px-9 py-3 rounded shadow-md hover:bg-pink-600">
                      Shop Now
                    </button></Link>
                </div>

                {/* Right Content */}
                <div
                  className="relative w-full md:w-[550px] h-[550px] mx-auto flex justify-center items-center bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/d2.png')",
                    backgroundSize: "400px", // Adjust the size of the background image
                  }}
                >
                  <Image
                    src="/gamingchair.webp"
                    alt="Unique Sofa 2"
                    width={650}
                    height={650}
                    className="object-contain"
                  />
                </div>
              </div>
            </section>
          </TabsContent>



          {/* Content for Sofa Collection Tab */}
          <TabsContent value="chair3">
            <section className="py-16 bg-white">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                {/* Left Content */}
                <div className="flex-1">
                  <h3 className="text-[#151875] text-[35px] font-bold">
                    50% Off All Sofa Chairs | Upgrade Your Comfort!

                  </h3>
                  <p className="text-pink-500 mb-6 font-semibold">
                    Relax in Style and Luxury

                  </p>
                  <p className="text-[#B7BACB] mb-6">
                    Enhance your home with our Sofa Chair Collection, thoughtfully crafted to provide exceptional comfort and timeless design.                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-5 text-[#B7BACB]">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Premium Build: Durable materials for lasting quality.
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Ergonomic Design: Cushioned seating and back support for optimal relaxation.
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Sleek Aesthetics: Elegant lines and versatile colors to fit any room.
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Enhanced Functionality: Adjustable features for the perfect seating experience.
                    </li>
                  </ul>
                  <Link
                    href="/chairs">
                    <button className="mt-8 bg-pink-500 text-white px-9 py-3 rounded shadow-md hover:bg-pink-600">
                      Shop Now
                    </button></Link>
                </div>

                {/* Right Content */}
                <div
                  className="relative w-full md:w-[550px] h-[550px] mx-auto flex justify-center items-center bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/d2.png')",
                    backgroundSize: "400px", // Adjust the size of the background image
                  }}
                >
                  <Image
                    src="/sofa1.png"
                    alt="Unique Sofa 3"
                    width={650}
                    height={650}
                    className="object-contain"
                  />
                </div>
              </div>
            </section>
          </TabsContent>


        </Tabs>
      </div>
    </>
  );
};

export default DiscountItem;
