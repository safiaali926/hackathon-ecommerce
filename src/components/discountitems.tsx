import React from "react";
import Image from "next/image";   
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              Wood Chair
            </TabsTrigger>
            <TabsTrigger value="chair2" className="hover:text-pink-500 hover:underline text-[#151875]">
              Plastic Chair
            </TabsTrigger>
            <TabsTrigger value="chair3" className="hover:text-pink-500 hover:underline text-[#151875]">
              Sofa Collection
            </TabsTrigger>
          </TabsList>

          {/* Content for Wood Chair Tab */}
          <TabsContent value="chair1">
            <section className="py-16 bg-white">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                {/* Left Content */}
                <div className="flex-1">
                  <h3 className="text-[#151875] text-[35px] font-bold">
                    20% Discount Of All Products
                  </h3>
                  <p className="text-pink-500 mb-6 font-semibold">
                    Eams Sofa Compact
                  </p>
                  <p className="text-[#B7BACB] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                  </p>

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
                      Material expose like metals
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
                      Simple neutral colours
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
                      Clear lines and geometric figures
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
                      Material expose like metals
                    </li>
                  </ul>

                  <button className="mt-8 bg-pink-500 text-white px-9 py-3 rounded shadow-md hover:bg-pink-600">
                    Shop Now
                  </button>
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
                    src="/d1.png"
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
                    20% Discount Of All Products
                  </h3>
                  <p className="text-pink-500 mb-6 font-semibold">
                    Eams Sofa Compact
                  </p>
                  <p className="text-[#B7BACB] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                  </p>

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
                      Material expose like metals
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
                      Simple neutral colours
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
                      Clear lines and geometric figures
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
                      Material expose like metals
                    </li>
                  </ul>

                  <button className="mt-8 bg-pink-500 text-white px-9 py-3 rounded shadow-md hover:bg-pink-600">
                    Shop Now
                  </button>
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
                    src="/uniquesofa.png"
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
                    50% Discount Of All Products
                  </h3>
                  <p className="text-pink-500 mb-6 font-semibold">
                    Eams Sofa Compact
                  </p>
                  <p className="text-[#B7BACB] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                  </p>

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
                      Material expose like metals
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
                      Simple neutral colours
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
                      Clear lines and geometric figures
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
                      Material expose like metals
                    </li>
                  </ul>

                  <button className="mt-8 bg-pink-500 text-white px-9 py-3 rounded shadow-md hover:bg-pink-600">
                    Shop Now
                  </button>
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
