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
                    <button className="bg-pink-500 text-sm text-white py-1 px-2 rounded-r-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-200">
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
                  <Link href="/chairs" className="text-[#8A8FB9] hover:text-gray-800 ml-6">
                    Top Chairs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/vases" className="text-[#8A8FB9] hover:text-gray-800 ml-6">
                    Fancy Vases
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/lamps" className="text-[#8A8FB9] hover:text-gray-800 ml-6">
                    Luxury Lamps
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/mirrors" className="text-[#8A8FB9] hover:text-gray-800 ml-6">
                    Wall Mirrors
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
                  <Link href="/signin" className="text-[#8A8FB9] hover:text-gray-800">
                    Signin
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/wishlist" className="text-[#8A8FB9] hover:text-gray-800">
                   Wishlist
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/cart" className="text-[#8A8FB9] hover:text-gray-800">
                   Cart
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/shipment" className="text-[#8A8FB9] hover:text-gray-800">
                   Shipment
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
                  <Link href="/" className="text-[#8A8FB9] hover:text-gray-800">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/shop" className="text-[#8A8FB9] hover:text-gray-800">
                   Shop
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/aboutus" className="text-[#8A8FB9] hover:text-gray-800">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/faq" className="text-[#8A8FB9] hover:text-gray-800">
                    FAQ
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/contact" className="text-[#8A8FB9] hover:text-gray-800">
                   Contact
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
            <Link href="/"> <div className="text-3xl text-gray-900">
                <FaFacebook />
              </div></Link>
              <Link href="/"> <div className="text-3xl ml-3 text-gray-900">
                <RxInstagramLogo />
              </div></Link>
              <Link href="/">  <div className="text-3xl ml-3 text-gray-900">
                <FaLinkedin />
              </div></Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
