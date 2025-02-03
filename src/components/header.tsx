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
  UserRound,
} from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import SearchBar from "./handlesearch";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const [cartQuantity, setCartQuantity] = useState(0);
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


  useEffect(() => {
    // Load cart from local storage
    const updateCartQuantity = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalQuantity = cart.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);
      setCartQuantity(totalQuantity);
    };

    updateCartQuantity(); // Initial load
    window.addEventListener("storage", updateCartQuantity); // Listen for cart updates

    return () => window.removeEventListener("storage", updateCartQuantity);
  }, []);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-sm py-2 px-10 flex justify-between items-center">
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
            {/* Cart Icon with Badge */}
            <Link href="/cart" className="relative flex items-center hover:underline">
  {/* Cart Icon */}
  <div className="relative">
    <ShoppingCart className="w-6 h-6" />
    
    {/* Badge - Positioned on Top Right of the Icon */}
    {cartQuantity > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
        {cartQuantity}
      </span>
    )}
  </div>

  {/* Cart Text */}
  <span className="ml-2">Cart</span>
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
                <ul ref={dropdownRef} className="absolute w-56 left-0 top-full mt-2 bg-white shadow-md rounded-md z-10">
                  <li><Link href="/chairs" className="block px-4 py-2 hover:bg-gray-100">Chairs</Link></li>
                  <li><Link href="/lamps" className="block px-4 py-2 hover:bg-gray-100">Lamps</Link></li>
                  <li><Link href="/mirrors" className="block px-4 py-2 hover:bg-gray-100">Mirrors</Link></li>
                  <li><Link href="/vases" className="block px-4 py-2 hover:bg-gray-100">Vases</Link></li>
                </ul>
              )}
            </li>
            <Link href="/shop" className="hover:text-pink-500">Shop</Link>
            <Link href="/aboutus" className="hover:text-pink-500">About</Link>
            <Link href="/faq" className="hover:text-pink-500">FAQ</Link>
            <Link href="/contact" className="hover:text-pink-500">Contact</Link>
          </ul>
        </nav>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Navigation */}
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
    <Link href="/" className="block hover:bg-pink-500 p-2 rounded" onClick={() => setMenuOpen(false)}>
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
          <Link href="/chairs" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
            Chairs
          </Link>
        </li>
        <li>
          <Link href="/lamps" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
            Lamps
          </Link>
        </li>
        <li>
          <Link href="/mirrors" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
            Mirrors
          </Link>
        </li>
        <li>
          <Link href="/vases" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
            Vases
          </Link>
        </li>
      </ul>
    )}
  </li>
  <li>
    <Link href="/shop" className="block hover:bg-pink-500 p-2 rounded" onClick={() => setMenuOpen(false)}>
      Shop
    </Link>
  </li>
  <li>
    <Link href="/aboutus" className="block hover:bg-pink-500 p-2 rounded" onClick={() => setMenuOpen(false)}>
      About
    </Link>
  </li>
  <li>
    <Link href="/faq" className="block hover:bg-pink-500 p-2 rounded" onClick={() => setMenuOpen(false)}>
      FAQ
    </Link>
  </li>
  <li>
    <Link href="/contact" className="block hover:bg-pink-500 p-2 rounded" onClick={() => setMenuOpen(false)}>
      Contact
    </Link>
  </li>
  <li className="mt-4">
            <SearchBar />
          </li>
</ul>
      </div>
    </header>
  );
}

export default Header;
