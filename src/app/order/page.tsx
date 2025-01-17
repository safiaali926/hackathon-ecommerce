"use client";
import React from "react";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";

export default function OrderCompleted() {
  return (<>
   {/* Header */}
<header className="bg-white">
  <div className="w-full py-9 bg-[#F6F5FF]">
    {/* Breadcrumbs */}
    <div className="mx-auto container px-4">
      <h1 className="text-2xl font-bold text-[#1D3178]">Order Completed</h1>
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
          <li className="text-pink-500 font-semibold">Order Completed</li>
        </ol>
      </nav>
    </div>
  </div>
</header>
    <div className="min-h-screen flex flex-col justify-center items-center  px-4">

      {/* Order Completed Section */}
      <div className="bg-white p-10 rounded-lg  text-center max-w-3xl">
        {/* Icons */}
        <FaRegClock className="text-[#151875] text-5xl items-left mr-4" />
        <div className="flex justify-center items-center mb-6">
       
          <FiCheckCircle className="text-pink-500 text-5xl" />
        </div>

        {/* Text */}
        <h1 className="text-2xl font-bold text-[#151875] mb-4">
          Your Order Is Completed!
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>

        {/* Button */}
        <button className="bg-pink-500 text-white  py-3 px-8  hover:bg-pink-600 transition">
          Continue Shopping
        </button>
      </div>

      <div className='place-items-center'><Image src="/bg2.png" alt="footerimg" width={900} height={93}></Image></div>
    </div></>
  );
}
