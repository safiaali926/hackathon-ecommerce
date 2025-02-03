'use client';
import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Link from "next/link";


// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "your_dataset",
  useCdn: true,
  apiVersion: "2021-08-31",
});

interface FormData {
  firstName: string;
  lastName: string;
  street: string;
  apartment?: string;
  city: string;
  country: string;
  postalCode: string;
}

interface ShippingRate {
  object_id: string;
  provider: string;
  servicelevel: { name: string };
  amount: string;
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    street: '',
    apartment: '',
    city: '',
    country: 'Bangladesh',
    postalCode: '',
  });

  const [rates, setRates] = useState<ShippingRate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Sync cart state with localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart)); // Load cart from localStorage
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fetch Shipping Rates
  const getShippingRates = async () => {
    setLoading(true);
    console.log("Fetching shipping rates with:", formData);

    try {
      const response = await fetch("/api/shipment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Shipping Rates Response:", data); // Debugging

      if (data.rates) {
        setRates(data.rates);
      } else {
        setRates([]);
        console.error("No shipping rates found.");
      }
    } catch (error) {
      console.error("Error fetching shipping rates:", error);
    }
    setLoading(false);
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white">
        <div className="w-full py-9 bg-[#F6F5FF]">
          <div className="mx-auto container px-4">
            <h1 className="text-2xl font-bold text-[#1D3178]">Shipping</h1>
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

      {/* Main Section */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Information and Shipping Address */}
        <div className="lg:col-span-2 p-6 rounded-lg bg-[#F8F8FD]">
          <h2 className="text-lg font-bold text-[#151875] mb-6">Shipping Information</h2>
          <div className="mb-8 p-4">
            <h3 className="text-base font-semibold text-[#151875] mb-4">Contact Information</h3>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full border border-gray-300 rounded p-3 mb-4 focus:ring-2 focus:ring-[#151875]"
            />
          </div>

          {/* Shipping Address Form */}
          <div className="p-4">
            <h3 className="text-base font-semibold text-[#151875] mb-4">Shipping Address</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input name="firstName" type="text" placeholder="First name (optional)" className="w-full border border-gray-300 rounded p-3" onChange={handleChange} />
              <input name="lastName" type="text" placeholder="Last name" className="w-full border border-gray-300 rounded p-3" onChange={handleChange} />
            </div>
            <input name="street" type="text" placeholder="Address" className="w-full border border-gray-300 rounded p-3 mb-4" onChange={handleChange} />
            <input name="apartment" type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border border-gray-300 rounded p-3 mb-4" onChange={handleChange} />
            <input name="city" type="text" placeholder="City" className="w-full border border-gray-300 rounded p-3 mb-4" onChange={handleChange} />
            <input name="postalCode" type="text" placeholder="Postal Code" className="w-full border border-gray-300 rounded p-3 mb-6" onChange={handleChange} />
          </div>

          <button onClick={getShippingRates} className="bg-pink-500 text-white font-bold p-3 rounded hover:bg-pink-600 ml-4 mb-4">
            {loading ? "Loading..." : "Calculate Shipping"}
          </button>

          {/* Display Shipping Rates */}
          {rates.length > 0 ? (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#151875] mb-4">Shipping Rates</h3>
              <ul className="bg-white p-4 rounded-lg shadow">
                {rates.map((rate) => (
                  <li key={rate.object_id} className="flex justify-between py-2">
                    <span>{rate.provider} ({rate.servicelevel.name})</span>
                    <span className="font-bold">${(parseFloat(rate.amount) / 100).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500 mt-4">No shipping rates available.</p>
          )}
        </div>

             {/* Order Summary */}
             <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-[#151875] mb-6">Order Summary</h3>
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item._id} className="flex justify-between text-gray-600">
                  <span>{item.title} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            )}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-[#151875] text-lg">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
         <Link href="/checkout"> <button className="w-full px-6 py-2 bg-green-500 text-white rounded-sm hover:bg-green-600 mt-4">
            Proceed to Checkout
          </button></Link>
        </div>
      </main>
    </div>
  );
}
