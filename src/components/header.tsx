"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
  Mail,
  PhoneCall,
} from "lucide-react";
import { UserRound } from "lucide-react";
import SearchBar from "./handlesearch";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHomeDropdownOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const handleMobileDropdownItemClick = () => {
    setMobileDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-sm py-2 px-10 flex justify-between items-center">
        {/* Left Section */}
        <div className="hidden md:flex items-center space-x-6">
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
        <div className="flex items-center space-x-6">
          <select
            className="hidden md:block bg-transparent border-none outline-none text-white cursor-pointer"
            aria-label="Select Language"
          >
            <option className="text-gray-800">English</option>
            <option className="text-gray-800">Spanish</option>
            <option className="text-gray-800">French</option>
          </select>
          <select
            className="hidden md:block bg-transparent border-none outline-none text-white cursor-pointer"
            aria-label="Select Currency"
          >
            <option className="text-gray-800">USD</option>
            <option className="text-gray-800">EUR</option>
            <option className="text-gray-800">GBP</option>
          </select>
          <div className="flex space-x-6">
               {/* Signed Out → Show Login Button */}
               <SignedOut>
              <SignInButton mode="modal">
                <button className="flex items-center hover:underline">
                  <UserRound className="w-4 h-4 mr-2" />
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            {/* Signed In → Show User Button */}
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
           
            <Link href="/wishlist" className="flex items-center hover:underline">
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
        <div
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <ul className="flex space-x-6">
            <Link href="/">Home</Link>
            <li className="relative">
              <button
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                className="flex items-center hover:text-pink-500 focus:outline-none"
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
            <Link href="/shop" className="hover:text-pink-500">
              Shop
            </Link>
            <Link href="/aboutus" className="hover:text-pink-500">
              About
            </Link>
            <Link href="/faq" className="hover:text-pink-500">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-pink-500">
              Contact
            </Link>
          </ul>
        </nav>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Right-Side Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-purple-600 text-white z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-500">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <Link href="/" className="block hover:bg-pink-500 p-2 rounded" onClick={handleMenuItemClick}>
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center hover:bg-pink-500 p-2 rounded"
            >
              Collection
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            {mobileDropdownOpen && (
              <ul className="mt-2 bg-white text-gray-900 shadow-md rounded-md">
                <li>
                  <Link
                    href="/chairs"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleMobileDropdownItemClick}
                  >
                    Chairs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lamps"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleMobileDropdownItemClick}
                  >
                    Lamps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mirrors"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleMobileDropdownItemClick}
                  >
                    Mirrors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vases"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleMobileDropdownItemClick}
                  >
                    Vases
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/shop" className="block hover:bg-pink-500 p-2 rounded" onClick={handleMenuItemClick}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/aboutus" className="block hover:bg-pink-500 p-2 rounded" onClick={handleMenuItemClick}>
              About
            </Link>
          </li>
          <li>
            <Link href="/faq" className="block hover:bg-pink-500 p-2 rounded" onClick={handleMenuItemClick}>
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block hover:bg-pink-500 p-2 rounded" onClick={handleMenuItemClick}>
              Contact
            </Link>
          </li>

         
          {/* Search Bar */}
          <div className="mt-4">
            <SearchBar />
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Header;
