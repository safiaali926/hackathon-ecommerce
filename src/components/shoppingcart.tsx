import React from 'react';
import { CircleCheckBig } from 'lucide-react';

export default function Cart() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white">
        <div className="w-full py-9 bg-[#F6F5FF]">
          {/* Breadcrumbs */}
          <div className="mx-auto container px-4">
            <h1 className="text-2xl font-bold text-[#1D3178]">Shopping Cart</h1>
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
                <li className="text-pink-500 font-semibold">Shopping Cart</li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Left Section: Cart Items */}
          <div className="bg-white p-6 rounded-lg w-full lg:w-2/3 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-6">Your Cart</h2>

            {/* Table Header */}
            <div className="grid grid-cols-2 sm:grid-cols-4 font-bold text-[#1D3178] border-b pb-2 mb-4">
              <div>Product</div>
              <div>Price</div>
              <div className="hidden sm:block">Quantity</div>
              <div>Total</div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="grid grid-cols-2 sm:grid-cols-4 items-center border-b pb-4"
                >
                  {/* Product */}
                  <div className="flex items-center">
                    <div className="relative w-16 h-16">
                      <img
                        src="/t1.png"
                        alt="Product"
                        className="w-full h-full rounded-lg"
                      />
                      {/* Delete Icon */}
                      <button
                        className="absolute top-0 right-0 bg-black rounded-full text-sm p-1 shadow-lg text-white"
                        aria-label="Remove"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-md font-semibold text-gray-900">
                        Ut diam consequat {item}
                      </h3>
                      <p className="text-gray-500 text-sm">Color Brown</p>
                      <p className="text-gray-500 text-sm">Size XL</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-[#15245E] font-medium">$50.00</div>

                  {/* Quantity */}
                  <div className="flex items-center space-x-4 hidden sm:flex">
                    <button className="text-sm px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
                      -
                    </button>
                    <span className="font-medium">1</span>
                    <button className="text-sm px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
                      +
                    </button>
                  </div>

                  {/* Total */}
                  <div className="text-[#15245E] font-medium">$50.00</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-between items-center">
              <button className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                Update Cart
              </button>
              <button className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Right Section: Cart Total */}
          <div className="w-full lg:w-1/3">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-center text-[#15245E]">
                Cart Totals
              </h2>
              <div className="bg-[#F4F4FC] shadow p-6 rounded-lg">
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

            <div className="mt-5">
              <h2 className="text-lg font-semibold mb-4 text-center text-[#15245E]">
                Calculate Shipping
              </h2>
              <div className="bg-[#F4F4FC] shadow p-6 rounded-lg">
                <div className="text-gray-400 mb-4">Bangladesh</div>
                <hr className="my-4" />
                <div className="text-gray-400 mb-4">Mirpur Dhaka - 1200</div>
                <hr className="my-4" />
                <div className="text-gray-400 mb-4">Postal Code</div>
                <hr className="my-4" />
                <div className="mt-6">
                  <button className=" px-6 py-2 bg-pink-500 text-white rounded-sm hover:bg-pink-600">
                    Calculate Shipping
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
