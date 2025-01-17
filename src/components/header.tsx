"use client";  
import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingCart, ChevronDown, Menu, X, Mail, PhoneCall } from "lucide-react";
import { UserRound } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-sm py-2 px-10 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex hidden md:flex items-center items-center space-x-6 mx-5">
          {/* Removed Mail and PhoneCall for mobile */}
          <div className="flex items-center space-x-2 ">
            <Mail className="w-4 h-4" />
            <span>mhhasanul@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneCall className="w-4 h-4" />
            <span>(12345)67890</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 mx-9">
          <select
            className="bg-transparent border-none outline-none text-white cursor-pointer"
            aria-label="Select Language"
          >
            <option className="text-gray-800">English</option>
            <option className="text-gray-800">Spanish</option>
            <option className="text-gray-800">French</option>
          </select>
          <select
            className="bg-transparent border-none outline-none text-white cursor-pointer"
            aria-label="Select Currency"
          >
            <option className="text-gray-800">USD</option>
            <option className="text-gray-800">EUR</option>
            <option className="text-gray-800">GBP</option>
          </select>
          <Link href="/signin" className="flex items-center hover:underline">
            <UserRound className="w-4 h-4 mr-2" />
            Login
          </Link>
          <Link href="#" className="flex items-center hover:underline">
            <Heart className="w-4 h-4 mr-2" />
            Wishlist
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center py-5 px-10">
        {/* Logo */}
        <h1 className="font-bold text-[34px] text-indigo-950">Hekto</h1>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-black" />}
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex space-x-6 text-sm font-medium`}>
          <ul className="flex space-x-6 text-sm font-medium">
            {/* Home with Clickable Sublinks */}
            <li className="relative">
              <button
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                className="flex items-center hover:text-pink-500 focus:outline-none"
              >
                <Link href="/">Home</Link>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {/* Dropdown Menu */}
              {homeDropdownOpen && (
                <ul className="absolute w-56 left-0 top-full mt-2 bg-white shadow-md rounded-md z-10">
                  <li>
                    <Link href="/aboutus" className="block px-4 py-2 hover:bg-gray-100">
                      About
                    </Link>
                  </li>
                  
                  <li>
                    <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/cart" className="block px-4 py-2 hover:bg-gray-100">
                      Add to Cart
                    </Link>
                  </li>
                  <li>
                    <Link href="/errorpage" className="block px-4 py-2 hover:bg-gray-100">
                      404
                    </Link>
                  </li>
                  <li>
                    <Link href="/signin" className="block px-4 py-2 hover:bg-gray-100">
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link href="/productdisplay" className="block px-4 py-2 hover:bg-gray-100">
                      Product Details
                    </Link>
                  </li>
                  <li>
                    <Link href="/product" className="block px-4 py-2 hover:bg-gray-100">
                      Shop 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/shopleftsidebar" className="block px-4 py-2 hover:bg-gray-100">
                      Shop 2
                    </Link>
                  </li>
                  <li>
                    <Link href="/shoplist" className="block px-4 py-2 hover:bg-gray-100">
                      Shop 3
                    </Link>
                  </li>
                  <li>
                    <Link href="/shippingpage" className="block px-4 py-2 hover:bg-gray-100">
                      Shipping Page
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/order" className="block px-4 py-2 hover:bg-gray-100">
                      Order
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/cart" className="hover:text-pink-500">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/shoplist" className="hover:text-pink-500">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-pink-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-pink-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Search Bar (Visible only on medium screens and larger) */}
        <div className="hidden md:flex items-center">
          <div className="relative">
            <input
              type="text"
              className="py-2 pl-4 pr-12 w-72 text-sm border border-gray-300 focus:outline-none"
            />
            <button className="absolute top-0 bottom-0 right-0 px-4 bg-pink-500 text-white hover:bg-pink-600">
              <Search />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with Details */}
      <nav className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4 text-sm font-medium p-4 bg-purple-600 text-white">
          {/* Removed Contact Info for Mobile */}
           {/* Home with Dropdown */}
           <li className="relative">
            <button
              onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
              className="flex items-center hover:bg-pink-500 p-2 rounded"
            >
              Home
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {/* Dropdown Menu */}
            {homeDropdownOpen && (
              <ul className="flex flex-col space-y-2 text-white p-2  rounded-md">
                <li>
                  <Link href="/aboutus" className="block p-2 hover:text-pink-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/home/option2" className="block p-2 hover:text-pink-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/signin" className="block p-2 hover:text-pink-400">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link href="/errorpage" className="block p-2 hover:text-pink-400">
                    404
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="block p-2 hover:text-pink-400">
                    cart
                  </Link>
                </li>
                <li>
                  <Link href="/productdisplay" className="block p-2 hover:text-pink-400">
                    Product Details
                  </Link>
                </li>
                
                <li>
                  <Link href="/product" className="block p-2 hover:text-pink-400">
                  Shop 1
                  </Link>
                </li>
                <li>
                  <Link href="/shopleftsidebar" className="block p-2 hover:text-pink-400">
                    Shop 2
                  </Link>
                </li>
                <li>
                  <Link href="/shoplist" className="block p-2 hover:text-pink-400">
                    Shop 3
                  </Link>
                </li>
                <li>
                  <Link href="/shippingpage" className="block p-2 hover:text-pink-400">
                  Shipping Page
                  </Link>
                  <li>
                  <Link href="/blog" className="block p-2 hover:text-pink-400">
                  Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block p-2 hover:text-pink-400">
                  Contact
                  </Link>
                </li>
                <li>
                  <Link href="/order" className="block p-2 hover:text-pink-400">
                  Order
                  </Link>
                </li>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/cart" className="block hover:bg-pink-500 p-2 rounded">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/shoplist" className="block hover:bg-pink-500 p-2 rounded">
              Products
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block hover:bg-pink-500 p-2 rounded">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/shop" className="block hover:bg-pink-500 p-2 rounded">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block hover:bg-pink-500 p-2 rounded">
              Contact
            </Link>
          </li>

          {/* Mobile Wishlist and Cart Icons */}
           {/* Contact Info */}
           <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>mhhasanul@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneCall className="w-4 h-4" />
            <span>(12345)67890</span>
          </div>

          {/* Mobile Search Bar */}
          <div className="mt-4">
            <div className="relative">
              <input
                type="text"
                className="py-2 pl-4 pr-12 w-full text-sm border border-gray-300 focus:outline-none"
              />
              <button className="absolute top-0 bottom-0 right-0 px-4 bg-pink-500 text-white hover:bg-pink-600">
                <Search />
              </button>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
