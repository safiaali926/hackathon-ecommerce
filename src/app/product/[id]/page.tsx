"use client";
import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import DiscountItemtwo from "@/components/productdiscription";

// Sample products array
const products = [
  { id: 1, title: "Vel elit euismod", price: "$29.99", imgSrc: "/y5.png", colors: ["Red", "Blue", "Green"], description: "A stylish and comfortable chair perfect for your living room." },
  { id: 2, title: "Vel elit euismod", price: "$49.99", imgSrc: "/y6.png", colors: ["Black", "White", "Gray"], description: "An elegant chair designed for relaxation.", },
  { id: 3, title: "Vel elit euismod", price: "$69.99", imgSrc: "/y7.png", colors: ["Purple", "Yellow", "Pink"], description: "A luxurious chair that adds a pop of color to any room."  },
  { id: 4, title: "Vel elit euismod", price: "$39.99", imgSrc: "/y8.png", colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design." },
  { id: 5, title: "Vel elit euismod", price: "$59.99", imgSrc: "/y9.png", colors: ["Red", "Black", "Yellow"], description: "A versatile chair for dining or casual seating."},
  { id: 6, title: "Vel elit euismod", price: "$89.99", imgSrc: "/y11.png", colors: ["Green", "Gray", "Blue"], description: "An ergonomic chair designed for long hours of comfort." },
  { id: 7, title: "Vel elit euismod", price: "$19.99", imgSrc: "/y12.png", colors: ["Pink", "White", "Black"], description: "A compact and foldable chair for easy storage."},
  { id: 8, title: "Vel elit euismod", price: "$79.99", imgSrc: "/y4.png", colors: ["Brown", "Blue", "Gray"], description: "A classic chair with a timeless design."},
  { id: 9, title: "Vel elit euismod", price: "$99.99", imgSrc: "/y3.png", colors: ["Red", "Purple", "Black"], description: "A bold statement chair for your space." },
  { id: 10, title: "Vel elit euismod", price: "$199.99", imgSrc: "/y1.png", colors: ["Gold", "Silver", "White"], description: "A luxurious chair with a golden touch." },
  { id: 11, title: "Vel elit euismod", price: "$129.99", imgSrc: "/y13.png", colors: ["Black", "Red", "Blue"], description: "A bold chair with premium materials." },
  { id: 12, title: "Vel elit euismod", price: "$159.99", imgSrc: "/y7.png", colors: ["White", "Gray", "Yellow"], description: "A spacious chair perfect for any modern space."},
  { id: 13, title: "Vel elit euismod", price: "$29.99", imgSrc: "/p7.png", colors: ["Red", "Blue", "Green"], description: "A stylish and comfortable chair perfect for your living room." },
  { id: 14, title: "Vel elit euismod", price: "$49.99", imgSrc: "/p5.png", colors: ["Black", "White", "Gray"], description: "An elegant chair designed for relaxation." },
  { id: 15, title: "Vel elit euismod", price: "$69.99", imgSrc: "/p4.png", colors: ["Purple", "Yellow", "Pink"], description: "A luxurious chair that adds a pop of color to any room." },
  { id: 16, title: "Vel elit euismod", price: "$39.99", imgSrc: "/p8.png", colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design." },
  { id: 17, title: "Cantilever chair", code: "Code - Y523201", price: "$42.00", imgSrc: "/p1.png",  colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design."},
  {id: 18, title: "Cantilever chair", code: "Code - Y523201",  price: "$42.00", imgSrc: "/p2.png", colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design."},
  {id: 19, title: "Cantilever chair", code: "Code - Y523201", price: "$42.00", imgSrc: "/p3.png", colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design."},
  {id: 20,title: "Cantilever chair", code: "Code - Y523201", price: "$42.00", imgSrc: "/p4.png", colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design."},
  { id: 21, title: "Mini LCW Chair", description: "A stylish chair for your home.", price: "$56.00", imgSrc: "/p12.png" , colors: ["Orange", "Blue", "White"]},
  { id: 22, title: "Mini LCW Chair", description: "Modern chair design.", price: "$56.00", imgSrc: "/p10.png", colors: ["Orange", "Blue", "White"] },
  { id: 23, title: "Mini LCW Chair", description: "Comfortable and durable.", price: "$56.00", imgSrc: "/p1.png" , colors: ["Orange", "Blue", "White"]},
  { id: 24, title: "Mini LCW Chair", description: "Elegant and ergonomic.", price: "$56.00", imgSrc: "/p11.png" , colors: ["Orange", "Blue", "White"]},
  { id: 25, title: "Comfort Handy Craft",description: "Elegant and ergonomic.", price: "$42.00", originalPrice: "$65.00", imgSrc: "/p5.png",colors: ["Orange", "Blue", "White"], sale: true  },
  { id: 26, title: "Mini LCW Chair", description: "A stylish chair for your home.", price: "$56.00", imgSrc: "/p6.png",colors: ["Black", "White", "Gray"], sale: true},
  {id: 27,title: "Elegant Sofa", description: "A stylish chair for your home.",price: "$75.00", originalPrice: "$95.00", imgSrc: "/p7.png",colors: ["Red", "Blue", "Green"], sale: true},
  {id: 28, title: "Modern Chair", description: "A stylish chair for your home.",price: "$88.00", imgSrc: "/p1.png", colors: ["Black", "White", "Gray"],sale: true},
  {id: 29,title: "Stylish Desk", description: "A stylish chair for your home.", price: "$120.00", originalPrice: "$150.00", imgSrc: "/p3.png", colors: ["Black", "White", "Gray"],sale: true },
  { id: 30,title: "Office Chair", description: "A stylish chair for your home.", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p10.png",colors: ["Red", "Blue", "Green"], sale: true},
  { id: 31,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p11.png", sale: true, colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design."},
  { id: 32,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p12.png", sale: true, colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design."},
  { id: 33,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p9.png", sale: true, colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design."},
  { id: 34,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p6.png", sale: true, colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design."},
  { id: 35,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p3.png", sale: true, colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design."},
  { id: 36,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p10.png", sale: true, colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design."},
];

// Dynamic Product Detail Page
const ProductDetail = ({ params }: { params: { id: string } }) => {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return <div>Product not found</div>;
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
            <div className="flex flex-col space-y-4 items-center">
              <Image
                src={product.imgSrc}
                alt={product.title}
                width={150}
                height={200}
                className="object-cover rounded-lg shadow-md"
              />

<Image
                src={product.imgSrc}
                alt={product.title}
                width={150}
                height={200}
                className="object-cover rounded-lg shadow-md"
              />

<Image
                src={product.imgSrc}
                alt={product.title}
                width={150}
                height={200}
                className="object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="flex justify-center items-center h-full pr-9">
              <Image
                src={product.imgSrc}
                alt={product.title}
                width={400}
                height={600}
                className="object-cover rounded-lg shadow-lg "
              />
            </div>

            <div className="flex flex-col space-y-6 place-items-left text-left justify-left px-4">
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
                <span className="text-gray-500">(22)</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 ">{product.price}<span className="pl-2 line-through text-pink-500">$32.00</span></p>
            <p className="text-[#151875] font-bold">
            Color
            </p>
            <div className="flex gap-2 mt-6">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border"
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></div>
                ))}
              </div>
              <p className="text-[#151875] font-bold">Description</p>
              <p className="text-gray-600">{product.description}</p>
          
 
            <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
            </p>

        
            
              <p className="text-[#151875] font-bold text-sm">
            Categories:
            </p>
            <p className="text-[#151875] font-bold text-sm">
            Tags
            </p>
            <p className="text-[#151875] font-bold text-sm">
            Share:
            </p>
           

              <button className="mt-6 px-6 py-3 bg-[#151875] text-white hover:bg-pink-500 flex">
                Add to Cart
                <Heart className="text-white px-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <DiscountItemtwo />
    </>
  );
};

export default ProductDetail;
