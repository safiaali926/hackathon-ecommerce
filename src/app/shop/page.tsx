import Link from "next/link";
import React from "react";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";

const products = [
  { id: 1, title: "Vel elit euismod", price: "$29.99", originalPrice: "$42.99", imgSrc: "/y5.png", colors: ["Red", "Blue", "Green"] },
  { id: 2, title: "Vel elit euismod", price: "$49.99", originalPrice: "$59.99", imgSrc: "/y6.png", colors: ["Black", "White", "Gray"] },
  { id: 3, title: "Vel elit euismod", price: "$69.99", originalPrice: "$89.99", imgSrc: "/y7.png", colors: ["Purple", "Yellow", "Pink"] },
  { id: 4, title: "Vel elit euismod", price: "$39.99", originalPrice: "$49.99", imgSrc: "/y8.png", colors: ["Orange", "Blue", "White"] },
  { id: 5, title: "Vel elit euismod", price: "$59.99", originalPrice: "$79.99", imgSrc: "/y9.png", colors: ["Red", "Black", "Yellow"] },
  { id: 6, title: "Vel elit euismod", price: "$89.99", originalPrice: "$109.99", imgSrc: "/y11.png", colors: ["Green", "Gray", "Blue"] },
  { id: 7, title: "Vel elit euismod", price: "$19.99", originalPrice: "$29.99", imgSrc: "/y12.png", colors: ["Pink", "White", "Black"] },
  { id: 8, title: "Vel elit euismod", price: "$79.99", originalPrice: "$99.99", imgSrc: "/y4.png", colors: ["Brown", "Blue", "Gray"] },
  { id: 9, title: "Vel elit euismod", price: "$99.99", originalPrice: "$119.99", imgSrc: "/y3.png", colors: ["Red", "Purple", "Black"] },
  { id: 10, title: "Vel elit euismod", price: "$199.99", originalPrice: "$229.99", imgSrc: "/y1.png", colors: ["Gold", "Silver", "White"] },
  { id: 11, title: "Vel elit euismod", price: "$129.99", originalPrice: "$149.99", imgSrc: "/y11.png", colors: ["Black", "Red", "Blue"] },
  { id: 12, title: "Vel elit euismod", price: "$159.99", originalPrice: "$189.99", imgSrc: "/y7.png", colors: ["White", "Gray", "Yellow"] },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="group relative text-center cursor-pointer bg-white p-4 ">
              <div className="relative bg-gray-100 rounded-md p-4 mx-auto" style={{ height: "300px" }}>
                <img src={product.imgSrc} alt={product.title} className="h-full w-full object-contain" />
                {/* Hover Icons at Bottom Left */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-sky-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
              <h2 className="mt-4 text-md font-semibold text-[#151875]">{product.title}</h2>
              <div className="flex justify-center gap-2 mt-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 mt-4">
                <p className="text-md font-semibold text-[#151875]">{product.price}</p>
                <p className="text-sm line-through text-pink-500">{product.originalPrice}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
