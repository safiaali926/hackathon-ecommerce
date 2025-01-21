"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FiZoomIn, FiHeart, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

// Define the product structure
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  originalprice: number;
  reviews: number;
  imageurl: string;
  categories: string[];
  tags: string[];
}

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "your_dataset",
  useCdn: true,
  apiVersion: "2021-08-31",
});

export default function Lampshop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number] | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("best-match");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const productsPerPage = 3;

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && "Lamp" in categories] | order(_createdAt desc) {
          _id,
          title,
          description,
          price,
          originalprice,
          reviews,
          "imageurl": imageurl.asset->url,
          categories,
          tags
        }`;
        const data: Product[] = await client.fetch(query);
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Load wishlist from localStorage
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Handle Wishlist Add/Remove
  const handleWishlistToggle = (product: Product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item._id === product._id);

    let updatedWishlist;
    if (isAlreadyInWishlist) {
      updatedWishlist = wishlist.filter((item) => item._id !== product._id); // Remove from wishlist
    } else {
      updatedWishlist = [...wishlist, product]; // Add to wishlist
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save updated wishlist to localStorage
  };

  // Filter and sort logic
  const filteredAndSortedProducts = products
    .filter((product) =>
      (!selectedTags.length || selectedTags.some((tag) => product.tags.includes(tag.toLowerCase()))) &&
      (!selectedPriceRange ||
        (Array.isArray(selectedPriceRange) &&
          product.price >= selectedPriceRange[0] &&
          product.price <= selectedPriceRange[1]))
    )
    .sort((a, b) => {
      if (sortOption === "price-low-high") return a.price - b.price;
      if (sortOption === "price-high-low") return b.price - a.price;
      if (sortOption === "rating") return b.reviews - a.reviews;
      return 0; // Default: Best match (unchanged order)
    });

  // Paginate the filtered and sorted products
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

  return (
    <div className="min-h-screen py-10 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto bg-white p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-pink-500">Explore Our Collection of Luxury Table Lamps!</h1>
            <p className="text-sm text-gray-500">About {filteredAndSortedProducts.length} results</p>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="flex items-center space-x-2">
              <label htmlFor="sort-by" className="text-[#151875] text-sm">Sort By:</label>
              <select
                id="sort-by"
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="best-match">Best Match</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Filters and Product List */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="bg-white rounded-lg p-4 space-y-6">
          {/* Tag Filter */}
          <div>
            <h3 className="text-xl text-[#151875] font-semibold mb-2">Filter by Tags</h3>
            <ul className="space-y-2">
              {["Trending", "Latest", "Featured", "Best Seller"].map((tag, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`tag-${index}`}
                    className="form-checkbox"
                    onChange={() =>
                      setSelectedTags((prev) =>
                        prev.includes(tag)
                          ? prev.filter((t) => t !== tag)
                          : [...prev, tag]
                      )
                    }
                  />
                  <label htmlFor={`tag-${index}`} className="text-gray-700">
                    {tag}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-xl font-semibold text-[#151875] mb-2">Price Filter</h3>
            <ul className="space-y-2">
              {[0, 20, 40, 60, 100, 150].map((range, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="price"
                    id={`price-${index}`}
                    className="form-radio"
                    onChange={() => setSelectedPriceRange([range, range + 20])}
                  />
                  <label htmlFor={`price-${index}`} className="text-gray-700">
                    ${range} - ${range + 20}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product List */}
        <div className="md:col-span-3 grid grid-cols-1 gap-6">
          {paginatedProducts.map((product) => (
            <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden flex p-4">
              {/* Product Image */}
              <div className="bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                <Image src={product.imageurl} alt={product.title} width={200} height={150} />
              </div>

              {/* Product Details */}
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold text-[#151875]">{product.title}</h3>
                <p className="flex gap-x-3 text-lg text-[#151875] mt-2 items-center">
                  ${product.price.toFixed(2)}{" "}
                  {product.originalprice > product.price && (
                    <span className="line-through text-pink-500">${product.originalprice.toFixed(2)}</span>
                  )}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < product.reviews ? (
                        <FaStar className="text-yellow-400" />
                      ) : (
                        <FaRegStar className="text-gray-300" />
                      )}
                    </span>
                  ))}{" "}
                  <span className="text-gray-500">({product.reviews || 0})</span>
                </div>

                {/* Action Icons */}
                <div className="flex space-x-2 mt-4">
                  <button
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200"
                    aria-label="Zoom In"
                  >
                    <FiZoomIn className="text-xl" />
                  </button>
                  <button
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200"
                    aria-label="Add to Wishlist"
                    onClick={() => handleWishlistToggle(product)} // Handle wishlist toggle
                  >
                    <FiHeart
                      className={`text-xl ${wishlist.some((item) => item._id === product._id) ? "text-red-500" : "text-gray-900"}`}
                    />
                  </button>
                  <Link
                    href={`/product/${product._id}`}
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200"
                    aria-label="Add to Cart"
                  >
                    <FiShoppingCart className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          className="px-4 text-white py-2 bg-[#151875] rounded-lg"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span className="text-md py-2 text-[#151875] font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 text-white bg-[#151875] rounded-lg"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
