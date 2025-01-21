"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@sanity/client";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import imageUrlBuilder from '@sanity/image-url';

// Sanity Client Configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2021-08-31",
});

const builder = imageUrlBuilder(client);

// Function to get the image URL from Sanity
function urlFor(source: any) {
  return builder.image(source);
}

interface Product {
  _id: string;
  title: string;
  code: string;
  price: number;
  imageurl: any; // Sanity image object
  categories: string[]; // Array of categories
}

interface Category {
  name: string;
  image: any; // Category image
  product: Product | null; // A single product from the category
}

function ProductDisplay() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] | order(_createdAt desc) {
          _id,
          title,
          code,
          price,
          imageurl,
          categories
        }`;

        const data = await client.fetch(query);

        // Group products by category
        const categoriesData: { [key: string]: Product } = {};

        // Fetch only one product per category
        data.forEach((product: Product) => {
          product.categories.forEach((category: string) => {
            if (!categoriesData[category]) {
              categoriesData[category] = product; // Save the first product of each category
            }
          });
        });

        // Now fetch the unique categories
        const categoriesArray = Object.keys(categoriesData).map((categoryName) => {
          return {
            name: categoryName,
            product: categoriesData[categoryName],
            image: categoriesData[categoryName].imageurl,
          };
        });

        setCategories(categoriesArray);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center text-xl text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!categories.length) return <div className="text-center text-gray-500">No categories available.</div>;

  return (
    <div className="m-9">
      <div className="text-[#151875] text-3xl font-bold text-center mb-8">Featured Products</div>

      <div className="flex space-x-6 overflow-x-auto  ">
        {categories.map((category) => (
          <div key={category.name} className="flex-none w-80 ">
            <div className="text-center mb-6 hidden">
              <div className="relative w-full h-80 hidden">
                {category.image ? (
                  <Image
                    src={urlFor(category.image).url()}
                    alt={category.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center  justify-center text-gray-500">No Category Image Available</div>
                )}
              </div>
              <h2 className="text-2xl font-semibold text-[#151875] mt-4">{category.name}</h2>
            </div>

            {category.product && (
              <div className="group relative bg-white overflow-hidden shadow-md hover:bg-gray-100 transition-all">
                <div className="relative w-full h-80 ">
                  {category.product.imageurl ? (
                    <Image
                      src={urlFor(category.product.imageurl).url()}
                      alt={category.product.title}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">No Image Available</div>
                  )}
                  <div className="absolute top-2 left-2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all">
                    <button aria-label={`Add ${category.product.title} to Wishlist`} className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                      <Heart className="w-6 h-6 text-sky-500" />
                    </button>
                    <Link href={`/product/${category.product._id}`}>
                      <button aria-label={`Add ${category.product.title} to Cart`} className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                        <ShoppingCart className="w-6 h-6 text-blue-800" />
                      </button>
                    </Link>
                    <button aria-label={`Zoom in on ${category.product.title}`} className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                      <ZoomIn className="w-6 h-6 text-sky-500" />
                    </button>
                  </div>
                  <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <div className="bg-green-500 text-white p-2 rounded-sm text-center">
                      <Link
                        href={`/product/${category.product._id}`}
                        className="text-sm font-semibold"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4 group-hover:bg-blue-800 group-hover:text-white transition-all flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-pink-500 group-hover:text-white text-center">{category.product.title}</h3>
                  <div className="flex space-x-2 my-3">
                    <div className="w-5 h-1 bg-red-500 rounded-lg"></div>
                    <div className="w-5 h-1 bg-blue-500 rounded-lg hover:bg-yellow-500 transition-all"></div>
                    <div className="w-5 h-1 bg-green-500 rounded-lg"></div>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-white text-center">
                    {category.product.code}
                    <br />
                    ${category.product.price}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDisplay;