"use client"
import React, { useState } from 'react';
import Image from "next/image"

export default function About() {
    const testimonials = [
        {
          name: "John Doe",
          role: "CEO, Company Inc.",
          image: "/t12.png",
          testimonial:
            "This service has been life-changing. The team is incredibly professional, and their solutions have exceeded all expectations.",
        },
        {
          name: "Salena Gomez",
          role: "CEO at Webecy Digital",
          image: "/t11.png",
          testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
        },
        {
          name: "Michael Johnson",
          role: "Entrepreneur",
          image: "t13.png",
          testimonial:
            "Working with them has been a fantastic experience. Their dedication to quality and customer satisfaction is unmatched.",
        },
      ];
    
      const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    
      const handleTestimonialChange = (index: React.SetStateAction<number>) => {
        setCurrentTestimonialIndex(index);
      };
    
      const testimonial = testimonials[currentTestimonialIndex];

    return (
        <>
         <div className="min-h-screen py-10">

{/* Header */}
<header className="bg-white">
  <div className="w-full py-9 bg-[#F6F5FF]">
    {/* Breadcrumbs */}
    <div className="mx-auto container px-4">
      <h1 className="text-2xl font-bold text-[#1D3178]">About Us</h1>
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
          <li className="text-pink-500 font-semibold">About Us</li>
        </ol>
      </nav>
    </div>
  </div>
</header>

{/* About Section */}
<div className="min-h-screen flex items-center justify-center px-6 lg:px-16">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Left Column: Image */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <Image
          src="/ab1.png"
          alt="Descriptive Alt Text"
          width={555}
          height={390}
          className="w-full h-auto rounded-lg shadow-md border-l-8 border-b-8 border-[#2B3CAB]"
        />
      </div>

      {/* Right Column: Content */}
      <div className="lg:w-1/2 lg:pl-12">
        <h2 className="text-2xl font-bold text-[#151875]">
          Know About Our E-commerce Business, History
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. 
          Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</div>

{/* Cards Grid */}
<div className="container mx-auto px-6 lg:px-16 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
    {/* Card 1 */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center h-80 w-60 hover:border-b-8 border-[#FF9100]">
      <Image
        src="/c1.png"
        alt="Service 1"
        width={65}
        height={65}
        className="mb-4 mt-5"
      />
      <h3 className="text-xl font-bold text-[#1A0B5B] mb-2 h-10 flex items-center justify-center">
        24/7 Support
      </h3>
      <p className="text-gray-600 text-center h-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center h-80 w-60 hover:border-b-8 border-[#FF9100]">
      <Image
        src="/c2.png"
        alt="Service 2"
        width={65}
        height={65}
        className="mb-4"
      />
      <h3 className="text-xl font-bold text-[#1A0B5B] mb-2 h-10 flex items-center justify-center">
        24/7 Support
      </h3>
      <p className="text-gray-600 text-center h-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center h-80 w-60 hover:border-b-8 border-[#FF9100]">
      <Image
        src="/c3.png"
        alt="Service 3"
        width={65}
        height={65}
        className="mb-4"
      />
      <h3 className="text-xl font-bold text-[#1A0B5B] mb-2 h-10 flex items-center justify-center">
        24/7 Support
      </h3>
      <p className="text-gray-600 text-center h-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center h-80 w-60 hover:border-b-8 border-[#FF9100]">
      <Image
        src="/c4.png"
        alt="Service 4"
        width={65}
        height={65}
        className="mb-4"
      />
      <h3 className="text-xl font-bold text-[#1A0B5B] mb-2 h-10 flex items-center justify-center">
        24/7 Support
      </h3>
      <p className="text-gray-600 text-center h-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>
  </div>
</div>

{/* Testimonial Section */}
<div className=" mt-9 mb-9 py-12 bg-[#FBFBFF]">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
      Our Clients Say!
    </h2>

    <div className="p-6">
      <div className="text-center">
        {/* Client Images */}
        <div className="flex justify-center space-x-2 mb-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-12 h-12 border-2 ${index === currentTestimonialIndex ? 'border-pink-500' : 'border-gray-300'}`}
            >
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-full h-full "
              />
            </div>
          ))}
        </div>

        {/* Client Name & Job Title */}
        <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>

        {/* Testimonial Text */}
        <p className="text-gray-500">{testimonial.testimonial}</p>

        {/* Carousel Dashes */}
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`w-3 h-3 rounded-full  cursor-pointer ${index === currentTestimonialIndex ? 'bg-pink-500' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

</div>
        </>
    );
}
