"use client";
import React from "react";
import Image from "next/image"
import { CircleCheckBig } from "lucide-react";
export default function CheckoutPage() {
  return (
    <div className="min-h-screen">
       {/* Header */}
<header className="bg-white">
  <div className="w-full py-9 bg-[#F6F5FF]">
    {/* Breadcrumbs */}
    <div className="mx-auto container px-4">
      <h1 className="text-2xl font-bold text-[#1D3178]">Shipping </h1>
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
          <li className="text-pink-500 font-semibold">Shipping</li>
        </ol>
      </nav>
    </div>
  </div>
</header>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Information and Shipping Address */}
        <div className="lg:col-span-2 p-6 rounded-lg ">
          <h2 className="text-lg font-bold text-[#151875] mb-6">Hekto Demo</h2>
          <p className="text-sm text-gray-500 mb-6">Cart / Information / Shipping / Payment</p>
<div className="bg-[#F8F8FD] ">
          {/* Contact Information Section */}
          <div className="mb-8 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-[#151875]">Contact Information</h3>
              <a href="#" className="text-sm text-[#151875] hover:underline">Already have an account? Log in</a>
            </div>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full border border-gray-300 rounded p-3 mb-4 focus:ring-2 focus:ring-[#151875]"
            />
            <div className="flex items-center mb-6">
              <input type="checkbox" id="newsletter" className="mr-2" />
              <label htmlFor="newsletter" className="text-sm text-gray-700">
                Keep me up to date on news and exclusive offers
              </label>
            </div>
          </div>

          {/* Shipping Address Section */}
          <div className=" p-4">
            <h3 className="text-base font-semibold text-[#151875] mb-4 ">Shipping Address</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name (optional)"
                className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-[#151875]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-[#151875]"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 rounded p-3 mb-4 focus:ring-2 focus:ring-[#151875]"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full border border-gray-300 rounded p-3 mb-4 focus:ring-2 focus:ring-[#151875]"
            />
            <div className=" gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-[#151875]"
              />
             
            </div>
            <input
              type="text"
              placeholder="Country"
              defaultValue="Bangladesh"
              className="w-full border border-gray-300 rounded p-3 mb-6 focus:ring-2 focus:ring-[#151875]"
            />

<input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-[#151875]"
              />
          </div>

          <button className=" bg-pink-500 text-white font-bold p-3 rounded hover:bg-pink-600 ml-4 mb-4">
            Continue Shipping
          </button>
          </div>
        </div>




       {/* Order Summary */}
<div className="bg-white p-6 rounded-lg ">
  <h3 className="text-lg font-semibold text-[#151875] mb-6">Order Summary</h3>
  <ul className="space-y-4 mb-6">
    {[
      { id: 1, name: "Ut diam consequat", color: "Brown", size: "XL", price: "$32.00", image: "/s1.png" },
      { id: 2, name: "Sit amet lorem", color: "Black", size: "M", price: "$28.00", image: "/s2.png" },
      { id: 3, name: "Consectetur adipiscing", color: "Gray", size: "L", price: "$30.00", image: "/s3.png" },
      { id: 4, name: "Pellentesque euismod", color: "Blue", size: "S", price: "$35.00", image: "/s4.png" },
      { id: 5, name: "Aenean egestas", color: "Green", size: "XL", price: "$40.00", image: "/s5.png" },
    ].map((item) => (
      <li key={item.id} className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Product Image */}
          <Image
            src={item.image}
            alt={item.name}
            width={85}
            height={85}
            className="rounded-md"
          />
          {/* Product Details */}
          <div>
            <p className="text-sm font-semibold text-gray-700">{item.name}</p>
            <p className="text-sm text-gray-500">
              Color: {item.color} | Size: {item.size}
            </p>
          </div>
        </div>
        {/* Product Price */}
        <p className="text-sm font-bold text-gray-700">{item.price}</p>
      </li>
    ))}
  </ul>


{/* Right Section: Cart Total */}
<div className="w-full ">
            <div>
             
              <div className="bg-[#F4F4FC] shadow p-6 ">
                <div className="flex justify-between text-[#15245E] font-medium mb-4">
                  <span>Subtotals:</span>
                  <span>$250.00</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-[#15245E] font-medium mb-4">
                  <span>Totals:</span>
                  <span>$325.00</span>
                </div>
                <hr className="my-4" />
                <div className="flex text-gray-500">
                  <span className="text-sm text-green-500">
                    <CircleCheckBig />
                  </span>
                  Shipping & taxes calculated at checkout
                </div>
                <div className="mt-6 space-y-4">
                  <button className="w-full px-6 py-2 bg-green-500 text-white rounded-sm hover:bg-green-600">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
            </div>

         
         
        </div>
      </main>
    </div>
  );
}
