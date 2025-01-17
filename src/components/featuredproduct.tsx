"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";

const products = [
  { id: 17, title: "Cantilever chair", code: "Code - Y523201", price: "$42.00", imageSrc: "/p1.png" },
  { id: 18, title: "Cantilever chair", code: "Code - Y523201", price: "$42.00", imageSrc: "/p2.png" },
  { id: 19, title: "Cantilever chair", code: "Code - Y523201", price: "$42.00", imageSrc: "/p3.png" },
  { id: 20, title: "Cantilever chair", code: "Code - Y523201", price: "$42.00", imageSrc: "/p4.png" },
];

function ProductDisplay() {
  return (
    <div className="m-9">
      {/* Featured Products Title */}
      <div className="text-[#151875] text-3xl font-bold text-center mb-8">
        Featured Products
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white overflow-hidden shadow-md hover:bg-gray-100 transition-all"
          >
            {/* Product Image */}
            <div className="relative w-full h-80">
              <Image
                src={product.imageSrc} // Correct property name
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
              {/* Icons */}
              <div className="absolute top-2 left-2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all">
                <button
                  aria-label="Add to Wishlist"
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <Heart className="w-6 h-6 text-sky-500" />
                </button>
                <button
                  aria-label="Add to Cart"
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <ShoppingCart className="w-6 h-6 text-blue-800" />
                </button>
                <button
                  aria-label="Zoom In"
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <ZoomIn className="w-6 h-6 text-sky-500" />
                </button>
              </div>
              {/* View Details */}
              <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all">
                <div className="bg-green-500 text-white p-2 rounded-sm text-center">
                  <Link
                    href={`/product/${product.id}`} // Correct href
                    className="text-sm font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4 group-hover:bg-blue-800 group-hover:text-white transition-all flex flex-col items-center">
              <h3 className="text-lg font-semibold text-pink-500 group-hover:text-white text-center">
                {product.title}
              </h3>

              {/* Decorative Lines */}
              <div className="flex space-x-2 my-3">
                <div className="w-5 h-1 bg-red-500 rounded-lg"></div>
                <div className="w-5 h-1 bg-blue-500 rounded-lg hover:bg-yellow-500 transition-all"></div>
                <div className="w-5 h-1 bg-green-500 rounded-lg"></div>
              </div>

              <p className="text-sm text-gray-600 group-hover:text-white text-center">
                {product.code}
                <br />
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDisplay;
