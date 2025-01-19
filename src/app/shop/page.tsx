"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

// Initialize Sanity image URL builder
const builder = imageUrlBuilder(client);

// Helper function to build image URLs
const urlFor = (source: any) => builder.image(source);

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        originalprice,
        imageurl,
        colors,
        description
      }`;

      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <div className="group relative text-center cursor-pointer bg-white p-4 ">
              <div className="relative bg-gray-100 rounded-md p-4 mx-auto" style={{ height: "300px" }}>
                {/* Image */}
                <img
                  src={urlFor(product.imageurl).width(500).url()}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
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
                {product.colors.map((color: string, index: number) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 mt-4">
                <p className="text-md font-semibold text-[#151875]">{product.price}</p>
                <p className="text-sm line-through text-pink-500">{product.originalprice}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
