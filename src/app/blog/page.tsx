import React from "react";  
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { RxInstagramLogo } from 'react-icons/rx';
import Image from "next/image"
const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      date: "December 9, 2024",
      tagline: "Managing State in React with Ease",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      imageSrc: "/b1.png",
    },
    {
      id: 2,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      date: "December 8, 2024",
      tagline: "Simplify Asynchronous Code in JavaScript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      imageSrc: "/b2.png",
    },
    {
      id: 3,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      date: "December 7, 2024",
      tagline: "Enhance Your Website's Visual Appeal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      imageSrc: "/b3.png",
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "It is a long established fact",
      description: "Aug 09 2020",
      imageSrc: "/r1.png",
    },
    {
      id: 2,
      title: "It is a long established fact",
      description: "Aug 09 2020",
      imageSrc: "/r2.png",
    },
    {
      id: 3,
      title: "It is a long established fact",
      description: "Aug 09 2020",
      imageSrc: "/r3.png",
    },
    {
      id: 4,
      title: "It is a long established fact",
      description: "Aug 09 2020",
      imageSrc: "/r4.png",
    },
  ];

  const saleproducts = [
    {
      id: 1,
      title: "Elit ornare in enim mauris.",
      description: "Aug 09 2020",
      imageSrc: "/r5.png",
    },
    {
      id: 2,
      title: "Viverra pulvinar et enim.",
      description: "Aug 09 2020",
      imageSrc: "/r6.png",
    },
    {
      id: 3,
      title: "Mattis varius donec fdsfd",
      description: "Aug 09 2020",
      imageSrc: "/r7.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="relative w-full h-[200px] bg-[#F6F5FF] text-left px-6 md:px-9 flex items-center">
        <div className="max-w-xl w-full">
          <h1 className="text-[#151875] font-bold text-2xl">Our Blog</h1>
          <p>
            Home . Page . <span className="text-pink-500">Blog</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
        {/* Blog Posts */}
        <div className="lg:col-span-3 space-y-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden">
              {/* Blog Post Image */}
              <img
                src={post.imageSrc}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 text-left">
                {/* Title */}
                <h2 className="text-2xl font-bold text-[#151875] mb-2">{post.title}</h2>
                {/* Tagline */}
                <p className="text-lg text-gray-500 italic mb-4">{post.tagline}</p>
                {/* Description */}
                <p className="text-md text-gray-700 mb-4">{post.description}</p>
                {/* Read More Button */}
                <button className="text-[#151875] hover:text-pink-500 underline mt-4">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#151875] mb-4">Search</h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#151875] mb-4">Recent Post</h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex items-center gap-4">
                  <img
                    src={post.imageSrc}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <span className="hover:text-pink-500 cursor-pointer text-[#3F509E]">{post.title}  <p className="text-gray-500">{post.description}</p></span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#151875] mb-4">Sale Product</h3>
            <ul className="space-y-4">
              {saleproducts.map((post) => (
                <li key={post.id} className="flex items-center gap-4">
                  <img
                    src={post.imageSrc}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <span className="hover:text-pink-500 cursor-pointer text-[#3F509E]">{post.title}  <p className="text-gray-500">{post.description}</p></span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#151875] mb-4">Categories</h3>
            <ul className="space-y-4">
              <li className="hover:text-pink-500 cursor-pointer">Hobbies</li>
              <li className="hover:text-pink-500 cursor-pointer">Women</li>
              <li className="hover:text-pink-500 cursor-pointer">Men</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#151875] mb-4">Follow Us</h3>
            <div className="flex justify-end space-x-4">
              <div className="text-3xl text-gray-900">
                <FaFacebook />
              </div>
              <div className="text-3xl ml-3 text-gray-900">
                <RxInstagramLogo />
              </div>
              <div className="text-3xl ml-3 text-gray-900">
                <FaTwitter />
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className='place-items-center'><Image src="/bg2.png" alt="footerimg" width={900} height={93}></Image></div>
    </section>
  );
};

export default BlogPage;
