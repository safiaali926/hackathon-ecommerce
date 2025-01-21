"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  useCdn: true,
  apiVersion: "2021-08-31",
});

// Image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source).url();
}

// Define Product interface
interface Product {
  _id: string;
  title: string;
  price: string;
  imageurl?: {
    asset: {
      _ref: string;
    };
  };
  categories: string[];
}

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
          _id,
          title,
          price,
          "imageurl": imageurl.asset->_id,
          categories
        }`
      )
      .then((data: Product[]) => {
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Debounced search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const results = products.filter(
        (product) =>
          product.title.toLowerCase().includes(lowercasedSearchTerm) ||
          product.categories.some((category) =>
            category.toLowerCase().includes(lowercasedSearchTerm)
          )
      );
      setFilteredProducts(results);
    }, 300); // Adjust debounce delay as needed

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, products]);

  return (
    <div className="relative">
      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 pl-4 pr-12 w-56 md:w-72 text-sm border border-gray-300 text-gray-900 focus:outline-none"
          placeholder="Search Product"
        />
        <button className="absolute top-0 bottom-0 right-0 px-4 bg-pink-500 text-white hover:bg-pink-600">
          <Search />
        </button>
      </div>

      {/* Floating Search Results Container */}
      {filteredProducts.length > 0 && searchTerm && (
        <div className="absolute top-12 right-0 w-56 md:w-72 z-20 mt-2 bg-white shadow-lg rounded-lg border border-gray-300 max-h-80 overflow-y-auto opacity-100">
          <div className="grid grid-cols-1 gap-4 p-4">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="flex p-4 border rounded-lg shadow hover:shadow-md transition"
              >
                {/* Product Image */}
                <div className="relative w-32 h-32  bg-gray-200 overflow-hidden mr-4">
                  {product.imageurl ? (
                    <Image
                      src={urlFor(product.imageurl)}
                      alt={product.title || "Product image"}
                      width={128}
                      height={128}
                      className=" w-full h-full p-2 rounded-lg shadow-lg"
                    />
                  ) : (
                    <div className="text-gray-500 text-sm">No image available</div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-md">{product.title}</h3>
                  <p className="text-sm text-gray-700">Price: ${product.price}</p>
                  <Link
                    href={`/product/${product._id}`}
                    className="mt-2 inline-block text-pink-500 hover:underline text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* If no results match, you can show a message */}
      {filteredProducts.length === 0 && searchTerm && (
        <div className="mt-4 text-gray-500">No products found</div>
      )}
    </div>
  );
};

export default SearchBar;
