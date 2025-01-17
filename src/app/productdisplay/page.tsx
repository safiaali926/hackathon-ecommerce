"use client"
import React from "react";
import Image from "next/image";
import {Heart } from "lucide-react";
import DiscountItemtwo from "@/components/productdiscription";
export default function ProductCard() {
  return (<>
   <header className="bg-white">
      <div className="w-full py-9 bg-[#F6F5FF]">
        {/* Breadcrumbs */}
        <div className="mx-auto container px-4">
          <h1 className="text-2xl font-bold text-[#1D3178]">Product Details</h1>
          <nav className="text-sm text-gray-600 mb-2">
            <ol className="list-reset flex">
              <li>
                <a href="/" className="text-gray-900 hover:underline">
                  Home . Pages .
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-pink-500 font-semibold">Product Details</li>
            </ol>
          </nav>
        </div>
      </div>
    </header>
    <div className="min-h-screen py-10 px-6 flex justify-center">
      {/* Product Card Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          {/* Column 1: Vertical Images */}
          <div className="flex flex-col space-y-4 items-center">
            <Image
              src="/pd1.png" // Replace with actual product image
              alt="Product Image 1"
              width={150}  // Smaller width
              height={200} // Smaller height
              className="object-cover rounded-lg shadow-md"
            />
            <Image
              src="/pd2.png" // Replace with actual product image
              alt="Product Image 2"
              width={150}  // Smaller width
              height={200} // Smaller height
              className="object-cover rounded-lg shadow-md"
            />
            <Image
              src="/pd3.png" // Replace with actual product image
              alt="Product Image 3"
              width={150}  // Smaller width
              height={200} // Smaller height
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Column 2: Large Product Image */}
          <div className="flex justify-center items-center h-full">
            <Image
              src="/pd4.png" // Replace with actual large product image
              alt="Main Product"
              width={400}
              height={600}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Column 3: Product Details */}
          <div className="flex flex-col space-y-6 place-items-left text-left justify-left px-4 ">
            <h2 className="text-3xl font-semibold text-gray-900 ">Playwoord Arm Chair</h2>
            <div className="flex items-center space-x-2 ">
              {/* Star Rating */}
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500">(22)</span>
            </div>
            <p className="text-sm font-semibold text-gray-800 ">$32.00 <span className="pl-2 line-through text-pink-500">$32.00</span></p>
            <p className="text-[#151875] font-bold">
            Color
            </p>
            <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
            </p>
            <button className="mt-4 px-6 py-3  text-[#151875]  text-center hover:bg-pink-500 flex">
              Add to Cart
              <Heart className="text-[#151875] px-1  "/></button>
              <p className="text-[#151875] font-bold text-sm">
            Categories:
            </p>
            <p className="text-[#151875] font-bold text-sm">
            Tags
            </p>
            <p className="text-[#151875] font-bold text-sm">
            Share:
            </p>
          </div>
        </div>
      </div>

      
    </div>
    <DiscountItemtwo/>
    </>
  );
}
