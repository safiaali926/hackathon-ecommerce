"use client";

import React from "react";
import Link from "next/link";

const categories = [
  { id: 21, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/p12.png" },
  { id: 22, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/p10.png" },
  { id: 23, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/p1.png" },
  { id: 24, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/p11.png" },
];

export function CircleItems() {
  return (
    <div className="m-9">
      {/* Featured Products Title centered */}
      <div className="text-[#151875] text-3xl font-bold text-center mb-8">
        Top Categories
      </div>

      {/* Circle Items */}
      <div className="flex justify-center items-center m-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <div
                className="w-48 h-48 rounded-full bg-gray-100 border-l-4 border-b-4 border-transparent group-hover:border-[#9877E7] shadow-md group-hover:shadow-2xl transition-all duration-300"
                style={{
                  backgroundImage: `url('${category.imgSrc}')`,
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={`/product/${category.id}`}
                    className="px-3 py-1 bg-green-500 text-white rounded-sm hover:bg-green-600"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-[20px] text-[#151875]">{category.title}</h3>
                <p className="text-[#151875] mb-4">{category.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CircleItems;
