import React from "react";
import { FaUserAlt, FaCalendarAlt } from "react-icons/fa"; // Importing icons from Font Awesome
import Image from "next/image"; // Importing Image component from Next.js

const blogPosts = [
  {
    id: 1,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/bl1.png",
  },
  {
    id: 2,
    author: "Surfuxion",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/bl2.png",
  },
  {
    id: 3,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/bl3.png",
  },
];

const LeatestBlog: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-center text-3xl font-bold text-blue-900 mb-8">Latest Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md shadow-md p-4"
            style={{ width: "100%", height: "420px" }}
          >
            <div className="relative w-full h-40">
              <Image
                src={post.imgSrc}
                alt={post.title}
                layout="fill" // Make image fill the container
                objectFit="cover" // Ensure the image covers the container without distortion
                className="rounded-md"
              />
            </div>
            <div className="mt-4">
              <div className="text-sm flex items-center gap-2 text-[#151875]">
                <FaUserAlt className="text-pink-500" />
                <span>{post.author}</span>
                <span>•</span>
                <FaCalendarAlt className="text-yellow-500 " />
                <span>{post.date}</span>
              </div>
              <h2 className="text-[18px] font-semibold text-[#151875] mt-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              <button className="text-[#151875] hover:text-pink-500 underline mt-4">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeatestBlog;
