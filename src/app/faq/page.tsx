import React from 'react';
import Image from "next/link"
export default function faq() {
  return (

    
    <div className="min-h-screen py-10">

      {/* Header */}
      <header className="bg-white">
        <div className="w-full py-9 bg-[#F6F5FF]">
          {/* Breadcrumbs */}
          <div className="mx-auto container px-4">
            <h1 className="text-2xl font-bold text-[#1D3178]">FAQ</h1>
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
                <li className="text-pink-500 font-semibold">FAQ</li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-[#1D3178] m-8">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-10">
          {/* Left Side: Questions and Answers */}
          <div className="w-full lg:w-2/3 mb-10 lg:mb-0">
            <div className=" rounded-lg p-6">
              {[
                {
                  question: "What is your return policy?",
                  answer:
                    "We offer a 30-day return policy. Items must be returned in their original condition with a receipt.",
                },
                {
                  question: "How do I track my order?",
                  answer:
                    "You can track your order through the tracking link provided in your confirmation email.",
                },
                {
                  question: "Do you ship internationally?",
                  answer:
                    "Yes, we ship to most countries worldwide. Shipping costs and times vary by location.",
                },
                {
                  question: "Can I change my order after placing it?",
                  answer:
                    "You can modify your order within 24 hours by contacting our customer service team.",
                },
              ].map((faq, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-lg font-semibold text-[#1D3178]">
                    {faq.question}
                  </h2>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Ask a Question Form */}
          <div className="w-full lg:w-1/3">
          <div className="bg-[#F8F8FD] p-8 rounded-lg">
              <h2 className="text-xl font-bold text-[#151875] mb-6">Ask a Question</h2>
             
              <form className="space-y-6">
                {/* Name and Email in one row */}
               
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200"
                  />
                
  
                {/* Subject */}
                <input
                  type="text"
                  placeholder="Subject*"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200"
                />
  
                {/* Message */}
                <textarea
                  placeholder="Type your Message*"
                  rows={5}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200"
                ></textarea>
  
                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-pink-500 text-white p-3 rounded-sm hover:bg-pink-600"
                >
                  Send Mail
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
