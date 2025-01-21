"use client" 
import React, { useState, useEffect } from "react";
import { CircleCheckBig } from "lucide-react";
import { useRouter } from "next/navigation"; // Use this for App Router in Next.js 13+
import { createClient } from "@sanity/client";
import product from "@/sanity/schemaTypes/product";
import Link from "next/link";

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "your_dataset",
  useCdn: true,
  apiVersion: "2021-08-31",
});

export default function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Sync cart state with localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart)); // Load cart from localStorage
    }
  }, []);

  // Add item to cart
  const handleAdd = (id: string) => {
    const updatedCart = [...cartItems];
    const existingItemIndex = updatedCart.findIndex((item) => item._id === id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove item from cart (decrease quantity)
  const handleRemove = (id: string) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove item completely from the cart
  const handleDelete = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total of cart items
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white">
        <div className="w-full py-9 bg-[#F6F5FF]">
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

      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="bg-white p-6 rounded-lg w-full lg:w-2/3 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-6">Your Cart</h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 font-bold text-[#1D3178] border-b pb-2 mb-4">
              <div>Product</div>
              <div>Price</div>
              <div className="hidden sm:block">Quantity</div>
              <div>Total</div>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="grid grid-cols-2 sm:grid-cols-4 items-center border-b pb-4">
                  <div className="flex items-center">
                    <div className="relative w-16 h-16">
                      <img src={item.imageurl} alt="Product" className="w-full h-full rounded-lg" />
                      <button
                        className="absolute top-0 right-0 bg-white rounded-full p-1"
                        onClick={() => handleDelete(item._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5 text-red-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="ml-4">{item.title}</div>
                  </div>
                  <div className="text-gray-600">${item.price}</div>
                  <div className="hidden sm:block">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="text-gray-600 px-2 py-1 border rounded"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => handleAdd(item._id)}
                        className="text-gray-600 px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600">${item.price * item.quantity}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg w-full lg:w-1/3">
            <h2 className="text-lg font-semibold mb-6">Cart Summary</h2>
            <div className="flex justify-between mb-4">
              <span className="font-bold text-[#151875]">Total</span>
              <span className="text-xl">${calculateTotal()}</span>
            </div>
            <div className="mt-8">
             <Link href="/shipment"> <button className="w-full py-3 bg-[#151875] text-white rounded-md hover:bg-pink-500">
                Proceed to Checkout
              </button></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
