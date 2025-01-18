"use client"; // Ensure it's a client-side component

import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import { Heart } from "lucide-react";

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "your_dataset",
  useCdn: true,
  apiVersion: "2021-08-31",
});

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await client.fetch(
        `*[_type == "product" && _id == $id][0] {
          id,
          title,
          price,
          originalprice,
          "image": image.asset->url,
          description,
          colors,
          reviews,
          material,
          categories,
          dimensions,
          badge,
          tags,
          code,
    
        }`,
        { id: params.id }
      );
      setProduct(product);
    };

    fetchProduct();
  }, [params.id]);

  // Sync cart state with localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Load cart from localStorage
    }
  }, []);

  const handleAddToCart = () => {
    if (!product) return;

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item._id === product._id);
    let updatedCart;

    if (existingProductIndex !== -1) {
      // Update the quantity if the product already exists
      updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // Add the product to the cart
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    // Update cart state and localStorage
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${product.title} has been added to the cart!`);
  };

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  return (
    <>
      <header className="bg-white">
        <div className="w-full py-9 bg-[#F6F5FF]">
          <div className="mx-auto container px-4">
            <h1 className="text-2xl font-bold text-[#1D3178]">Product Details</h1>
            <nav className="text-sm text-gray-600 mb-2">
              <ol className="list-reset flex">
                <li>
                  <a href="/" className="text-gray-900 hover:underline">
                    Home . Pages .
                  </a>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-pink-500 font-semibold">Product Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      <div className="min-h-screen py-10 px-6 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
            {/* Thumbnail Images */}
            <div className="flex flex-col space-y-4 items-center">
              {[...Array(3)].map((_, index) => (
                <Image
                  key={index}
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={200}
                  className="object-cover rounded-lg shadow-md"
                />
              ))}
            </div>

            {/* Main Product Image */}
            <div className="flex justify-center items-center h-full pr-9">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={600}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col space-y-6 text-left px-4">
              <h2 className="text-3xl font-semibold text-gray-900">{product.title}</h2>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500">({product.reviews})</span>
              </div>
              <p className="text-sm font-semibold text-gray-800">
                ${product.price}
                {product.originalprice && (
                  <span className="pl-2 line-through text-pink-500">
                    ${product.originalprice}
                  </span>
                )}
              </p>
              <p className="text-[#151875] font-bold">Color</p>
              <div className="flex gap-2 mt-6">
                {product.colors?.map((color: string, index: number) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border"
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></div>
                ))}
              </div>
              <p className="text-[#151875] font-bold">Description</p>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-[#151875] font-bold text-sm">Material:</p>
              <p className="text-gray-600">{product.material}</p>
              <p className="text-[#151875] font-bold text-sm">Dimensions:</p>
              <p className="text-gray-600">{product.dimensions}</p>
              <p className="text-[#151875] font-bold text-sm">Code:</p>
              <p className="text-gray-600">{product.code}</p>
              <p className="text-[#151875] font-bold text-sm">Categories:</p>
              <p className="text-gray-600">{product.categories}</p>
              <p className="text-[#151875] font-bold text-sm">Badge:</p>
              <p className="text-gray-600">{product.badge}</p>
       

              <button
                className="mt-6 px-6 py-3 bg-[#151875] text-white hover:bg-pink-500 flex items-center justify-center"
                onClick={handleAddToCart}
              >
                Add to Cart
                <Heart className="text-white ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
