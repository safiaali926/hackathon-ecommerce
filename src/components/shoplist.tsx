"use client";
import React, { useState } from "react";
import { FiHeart, FiZoomIn, FiShoppingCart } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdGridOn, MdViewList } from "react-icons/md";
import Image from "next/image";

// Example product data
const products = [
  { id: 1, name: "Dictum morbi", price: "$26.00", discount: "$52.00", reviews: 80, rating: 4, image: "/e1.png" },
  { id: 2, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e2.png" },
  { id: 3, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e3.png" },
  { id: 4, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e4.png" },
  { id: 5, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e5.png" },
  { id: 6, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e6.png" },
  { id: 7, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e7.png" },
];

export default function Shoplist() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null); // Selected product for modal
  const [cart, setCart] = useState<any[]>([]); // Cart state to store products added to cart
  const [page, setPage] = useState(1); // Pagination state
  const [sortBy, setSortBy] = useState("best-match"); // Sorting state

  // Handle cart button click (to view product details in a modal)
  const handleCartClick = (product: any) => {
    setSelectedProduct(product);
  };

  // Close the product details modal
  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  // Add product to the cart
  const addToCart = (product: any) => {
    setCart([...cart, product]);
    closeProductDetails();
  };

  // Handle sorting changes
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  // Handle pagination changes
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Sort the products based on the selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low-high":
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      case "price-high-low":
        return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Paginate the products (show only 4 products per page)
  const productsPerPage = 4;
  const startIndex = (page - 1) * productsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="min-h-screen py-10 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto bg-white p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#151875]">Ecommerce Accesories & Fashion item</h1>
            <p className="text-sm text-gray-500">About {products.length} results</p>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="flex items-center space-x-2">
              <label htmlFor="per-page" className="text-[#151875] text-sm">Per Page:</label>
              <input
                type="number"
                id="per-page"
                className="border border-gray-300 rounded px-2 py-1 w-16 text-sm"
                value={productsPerPage}
                readOnly
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort-by" className="text-[#151875] text-sm">Sort By:</label>
              <select
                id="sort-by"
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="best-match">Best Match</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 border rounded bg-gray-100 hover:bg-gray-200">
                <MdGridOn className="text-gray-600 text-lg" />
              </button>
              <button className="p-2 border rounded bg-gray-100 hover:bg-gray-200">
                <MdViewList className="text-gray-600 text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3 grid grid-cols-1 gap-6">
          {paginatedProducts.map((product: any) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden flex p-4">
              <div className="bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                <Image src={product.image} alt={product.name} width={284} height={197} />
              </div>

              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold text-[#151875]">{product.name}</h3>
                <p className="flex gap-x-3 text-lg text-[#151875] mt-2 items-center">
                  {product.price} <span className="line-through text-pink-500">{product.discount}</span> <span className="flex">
                    {Array.from({ length: product.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                    {Array.from({ length: 5 - product.rating }).map((_, i) => (
                      <FaRegStar key={i} className="text-gray-300" />
                    ))}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className="flex flex-row space-y-2 items-center text-[#151875]">
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-100 m-3 rounded-full hover:bg-gray-200">
                    <FiZoomIn className="text-xl" />
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-100 m-3 rounded-full hover:bg-gray-200">
                    <FiHeart className="text-xl" />
                  </button>
                  <button 
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 m-3 rounded-full hover:bg-gray-200"
                    onClick={() => handleCartClick(product)}
                  >
                    <FiShoppingCart className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-[#151875]">{selectedProduct.name}</h3>
              <button onClick={closeProductDetails} className="text-lg text-gray-500">X</button>
            </div>
            <div className="mt-4">
              <Image src={selectedProduct.image} alt={selectedProduct.name} width={500} height={350} />
              <p className="text-xl text-[#151875] mt-4">{selectedProduct.price} <span className="line-through text-pink-500">{selectedProduct.discount}</span></p>
              <div className="flex gap-2 mt-2">
                {Array.from({ length: selectedProduct.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                {Array.from({ length: 5 - selectedProduct.rating }).map((_, i) => (
                  <FaRegStar key={i} className="text-gray-300" />
                ))}
              </div>
              <button 
                onClick={() => addToCart(selectedProduct)} 
                className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button 
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => handlePageChange(page - 1)} 
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="mx-4 text-xl">{page}</span>
        <button 
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => handlePageChange(page + 1)} 
          disabled={paginatedProducts.length < productsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
