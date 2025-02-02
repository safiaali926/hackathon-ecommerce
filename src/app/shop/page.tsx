"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { FiHeart } from "react-icons/fi";
import { FaRegStar, FaStar } from "react-icons/fa";

// ✅ Sanity Client Configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "your_dataset",
  useCdn: true,
  apiVersion: "2021-08-31",
});

// ✅ Initialize Sanity Image URL Builder
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

// ✅ Define Product Type
interface Product {
  _id: string;
  title: string;
  price: number;
  originalprice?: number;
  imageurl: string;
  colors?: string[];
  reviews: number;
}

// ✅ ProductGrid Component
const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch Products & Load Wishlist
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "product"]{
          _id,
          title,
          price,
          originalprice,
            "imageurl": imageurl.asset->url,
          colors,
           reviews,
        }`;
        const fetchedProducts = await client.fetch(query);
        console.log("Fetched Products:", fetchedProducts); // Debugging

        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // ✅ Load Wishlist from LocalStorage
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // ✅ Handle Wishlist Add/Remove
  const handleWishlistToggle = (product: Product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item._id === product._id);
    let updatedWishlist;

    if (isAlreadyInWishlist) {
      updatedWishlist = wishlist.filter((item) => item._id !== product._id);
    } else {
      updatedWishlist = [...wishlist, product];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // ✅ Handle Loading & Error States
  if (loading) return <div className="text-center text-xl font-semibold">Loading...</div>;
  if (error) return <div className="text-center text-red-500 text-lg">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="group relative text-center cursor-pointer bg-white p-4 rounded-md">
            <Link href={`/product/${product._id}`}>
              <div className="relative bg-gray-100 rounded-md p-4 mx-auto" style={{ height: "300px" }}>
                {/* ✅ Product Image */}
                <img
                  src={urlFor(product.imageurl).width(500).url()}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />

                {/* ✅ Hover Icons */}
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleWishlistToggle(product);
                    }}
                    className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-gray-200"
                  >
                    <FiHeart className={`text-xl ${wishlist.some((item) => item._id === product._id) ? "text-red-500" : "text-gray-900"}`} />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ShoppingCart className="w-5 h-5 text-blue-800" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <ZoomIn className="w-5 h-5 text-sky-500" />
                  </button>
                </div>
              </div>
            </Link>

            {/* ✅ Product Title */}
            <h2 className="mt-4 text-md font-semibold text-[#151875]">{product.title}</h2>

           
{/* Rating */}
                <div className="flex justify-center mt-2 space-x-1">
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
            {/* ✅ Product Price */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="text-md font-semibold text-[#151875]">${product.price}</p>
              {product.originalprice && (
                <p className="text-sm line-through text-pink-500">${product.originalprice}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
