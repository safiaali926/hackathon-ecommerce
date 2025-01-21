"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "your_dataset",
  useCdn: true,
  apiVersion: "2021-08-31",
});

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Sync wishlist and cart state with localStorage
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist));
    }

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart)); // Load cart from localStorage
    }
  }, []);

  // Add item to cart, or increase quantity if already exists
  const handleAddToCart = (item: any) => {
    // Create a copy of the cart
    const updatedCart = [...cartItems];
    console.log (item)
    // Check if the item already exists in the cart by comparing their IDs
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem._id === item._id);

    if (existingItemIndex !== -1) {
      // If it exists, increase the quantity of that specific item
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      // If it doesn't exist, add the new item with quantity 1
      updatedCart.push({ ...item, quantity: 1 });
    }

    // Update the state and localStorage with the new cart
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Confirmation alert
    alert(`${item.title} has been added to the cart!`);
  };

  // Remove item completely from the wishlist
  const handleDelete = (id: string) => {
    // Filter the wishlist to remove the item with the matching ID
    const updatedWishlist = wishlistItems.filter((item) => item._id !== id);
    setWishlistItems(updatedWishlist);

    // Save updated wishlist to localStorage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white">
        <div className="w-full py-9 bg-[#F6F5FF]">
          <div className="mx-auto container px-4">
            <h1 className="text-2xl font-bold text-[#1D3178]">Your Wishlist</h1>
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
                <li className="text-pink-500 font-semibold">Wishlist</li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="bg-white p-6 rounded-lg w-full">
            <h2 className="text-lg font-semibold mb-6">Your Wishlist</h2>

            {wishlistItems.length === 0 ? (
              <p className="text-gray-600">
                Your wishlist is empty. <a href="/" className="text-blue-500 underline">Start shopping</a>!
              </p>
            ) : (
              <div className="space-y-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center">
                      <div className="relative w-16 h-16">
                        <img src={item.imageurl} alt="Product" className="w-full h-full rounded-lg" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-[#1D3178]">{item.title}</h3>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => handleAddToCart(item)} // Add to cart action
                      >
                        Add to Cart
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => handleDelete(item._id)} // Remove from wishlist
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
