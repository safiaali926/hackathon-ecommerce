"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Search, Heart, ShoppingCart, ChevronDown, Menu, X, Mail, PhoneCall } from "lucide-react";
import { UserRound } from 'lucide-react';
import SearchBar from "./handlesearch";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  // Explicitly typing dropdownRef to HTMLUListElement or any other suitable element type
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Adding null check for dropdownRef.current
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHomeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-sm py-2 px-10 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex hidden md:flex items-center space-x-6 mx-5">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>mhhasanul@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneCall className="w-4 h-4" />
            <span>(12345)67890</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 mx-3">
          {/* Language and Currency Select */}
          <div className="hidden sm:flex space-x-6">
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
          </div>

          {/* Login, Wishlist, Cart */}
          <div className="flex space-x-6">
            <Link href="/signin" className="flex items-center hover:underline">
              <UserRound className="w-4 h-4 mr-2" />
              Login
            </Link>
            <Link href="#" className="flex items-center hover:underline">
              <Heart className="w-4 h-4 mr-2" />
              Wishlist
            </Link>
            <Link href="/cart" className="flex items-center hover:underline">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart
            </Link>
          </div>
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
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <ul className="flex space-x-6 text-sm font-medium">
            <Link href="/">Home</Link>

            {/* Collection Dropdown */}
            <li className="relative">
              <button
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                className="flex items-center hover:text-pink-500 focus:outline-none"
                aria-expanded={homeDropdownOpen ? "true" : "false"}
              >
                Collection
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {homeDropdownOpen && (
                <ul
                  ref={dropdownRef}
                  className="absolute w-56 left-0 top-full mt-2 bg-white shadow-md rounded-md z-10"
                >
                  <li>
                    <Link href="/chairs" className="block px-4 py-2 hover:bg-gray-100">
                      Chairs
                    </Link>
                  </li>
                  <li>
                    <Link href="/lamps" className="block px-4 py-2 hover:bg-gray-100">
                      Lamps
                    </Link>
                  </li>
                  <li>
                    <Link href="/mirrors" className="block px-4 py-2 hover:bg-gray-100">
                      Mirrors
                    </Link>
                  </li>
                  <li>
                    <Link href="/vases" className="block px-4 py-2 hover:bg-gray-100">
                      Vases
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/shop" className="hover:text-pink-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-pink-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-pink-500">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4 text-sm font-medium p-4 bg-purple-600 text-white">
          <li>
            <Link href="/" className="block hover:bg-pink-500 p-2 rounded">
              Home
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
              className="flex items-center hover:text-pink-500 focus:outline-none"
              aria-expanded={homeDropdownOpen ? "true" : "false"}
            >
              Collection
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {homeDropdownOpen && (
              <ul
                ref={dropdownRef}
                className="absolute w-56 left-0 top-full mt-2 bg-white shadow-md rounded-md z-10"
              >
                <li>
                  <Link href="/chairs" className="block px-4 py-2 hover:bg-gray-100">
                    Chairs
                  </Link>
                </li>
                <li>
                  <Link href="/lamps" className="block px-4 py-2 hover:bg-gray-100">
                    Lamps
                  </Link>
                </li>
                <li>
                  <Link href="/mirrors" className="block px-4 py-2 hover:bg-gray-100">
                    Mirrors
                  </Link>
                </li>
                <li>
                  <Link href="/vases" className="block px-4 py-2 hover:bg-gray-100">
                    Vases
                  </Link>
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
            <SearchBar />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
