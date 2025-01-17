import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { RxInstagramLogo } from 'react-icons/rx';
import Link from 'next/link';

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-[#EEEFFB]">
        <div className="container px-5 py-24 mx-auto mt-[40px]">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* First Column: Newsletter Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-2xl mb-3">
                Hekto
              </h2>
              <div className="flex flex-col justify-center items-center">
                <div className="relative w-full">
                
                  <div className="flex">
                    <input
                      type="text"
                      id="footer-field"
                      placeholder="Enter Email Address"
                      name="footer-field"
                      className="w-full bg-gray-100 bg-opacity-50 rounded-l-md border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <button className="bg-pink-500 text-sm text-white py-1 px-2 rounded-r-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                      Signup
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-[#8A8FB9] text-sm mt-4 text-left">
                Contact Info
                <br className="lg:block hidden" />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Second Column: Categories */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3 ml-6">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-4">
                  <Link href="/laptops-computers" className="text-[#8A8FB9] hover:text-gray-800 ml-6">
                    Laptops & Computers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/cameras-photography" className="text-[#8A8FB9] hover:text-gray-800 ml-6">
                    Cameras & Photography
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/smartphones-tablets" className="text-[#8A8FB9] hover:text-gray-800 ml-6">
                    Smart Phones & Tablets
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/video-games-consoles" className="text-[#8A8FB9] hover:text-gray-800 ml-6">
                    Video Games & Consoles
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/waterproof-headphones" className="text-[#8A8FB9] hover:text-gray-800 ml-6">
                    Waterproof Headphones
                  </Link>
                </li>
              </nav>
            </div>

            {/* Third Column: Customer Care */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Customer Care
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-4">
                  <Link href="/my-account" className="text-[#8A8FB9] hover:text-gray-800">
                    My Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/discount" className="text-[#8A8FB9] hover:text-gray-800">
                    Discount
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/returns" className="text-[#8A8FB9] hover:text-gray-800">
                    Returns
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/orders-history" className="text-[#8A8FB9] hover:text-gray-800">
                    Orders History
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/order-tracking" className="text-[#8A8FB9] hover:text-gray-800">
                    Order Tracking
                  </Link>
                </li>
              </nav>
            </div>

            {/* Fourth Column: Pages */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Pages
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-4">
                  <Link href="/blog" className="text-[#8A8FB9] hover:text-gray-800">
                    Blog
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/browse-shop" className="text-[#8A8FB9] hover:text-gray-800">
                    Browse the Shop
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/category" className="text-[#8A8FB9] hover:text-gray-800">
                    Category
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/pre-built-pages" className="text-[#8A8FB9] hover:text-gray-800">
                    Pre-Built Pages
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/visual-composer-elements" className="text-[#8A8FB9] hover:text-gray-800">
                    Visual Composer Elements
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/woocommerce-pages" className="text-[#8A8FB9] hover:text-gray-800">
                    WooCommerce Pages
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[#E7E4F8]">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2024 Hekto —
              <a
                href="https://twitter.com/knyttnev"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @Right Reserved
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <div className="text-3xl text-gray-900">
                <FaFacebook />
              </div>
              <div className="text-3xl ml-3 text-gray-900">
                <RxInstagramLogo />
              </div>
              <div className="text-3xl ml-3 text-gray-900">
                <FaLinkedin />
              </div>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
