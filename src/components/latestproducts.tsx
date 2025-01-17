"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = [
  { id: 25, title: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", imgSrc: "/p5.png", sale: true  },
  { id: 26, title: "Mini LCW Chair", price: "$56.00", originalPrice: "$95.00", imgSrc: "/p6.png", sale: true},
  {id: 27,title: "Elegant Sofa",price: "$75.00", originalPrice: "$95.00", imgSrc: "/p7.png", sale: true},
  {id: 28, title: "Modern Chair",price: "$88.00", originalPrice: "$95.00", imgSrc: "/p1.png",sale: true},
  {id: 29,title: "Stylish Desk", price: "$120.00", originalPrice: "$150.00", imgSrc: "/p3.png",sale: true },
  { id: 30,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p10.png", sale: true},
  
  

];

export default function LatestProduct() {
  return (
    <div className="m-9">
      {/* Section Title */}
      <div className="text-[#151875] text-3xl font-bold text-center mb-8">
        Latest Products
      </div>

      <Tabs defaultValue="new arrival" className="w-full">
        <TabsList className="bg-white flex justify-center space-x-8">
          <TabsTrigger value="new arrival" className="hover:text-pink-500 hover:underline text-[#151875]">New Arrival</TabsTrigger>
          <TabsTrigger value="best seller" className="hover:text-pink-500 hover:underline text-[#151875]">Best Seller</TabsTrigger>
          <TabsTrigger value="featured" className="hover:text-pink-500 hover:underline text-[#151875]">Featured</TabsTrigger>
          <TabsTrigger value="special offer" className="hover:text-pink-500 hover:underline text-[#151875]">Special Offer</TabsTrigger>
        </TabsList>

        <TabsContent value="new arrival">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-9">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                {/* Product Image */}
                <div className="relative">
                  <Image
                    src={product.imgSrc}
                    alt={product.title}
                    width={250}
                    height={250}
                    className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
                  />
                  {/* Sale Tag */}
                  {product.sale && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Sale
                    </div>
                  )}
                  {/* Hover Icons */}
                  <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                      <Heart className="w-5 h-5 text-sky-500" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                      <Link href={`/product/${product.id}`}>
                        <ShoppingCart className="w-5 h-5 text-blue-800" />
                      </Link>
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                      <ZoomIn className="w-5 h-5 text-sky-500" />
                    </button>
                  </div>
                </div>
                {/* Product Title */}
                <div className="mt-4 flex items-center">
                  <Link href={`/product/${product.id}`} className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2">
                    {product.title}
                  </Link>
                </div>
                {/* Product Price */}
                <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
                  <p>
                    {product.price}
                    {product.originalPrice && (
                      <span className="line-through text-red-500 text-sm px-1">
                        {product.originalPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
   


        {/* Other Tab Contents */}
        <TabsContent value="best seller">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-9">
    {[
     { id: 31,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p11.png", sale: true},
     { id: 32,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p12.png", sale: true},
     { id: 33,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p9.png", sale: true},
     { id: 34,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p6.png", sale: true},
     { id: 35,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p3.png", sale: true},
     { id: 36,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p10.png", sale: true},
    ].map((product) => (
      <div key={product.id} className="relative group">
        {/* Product Image */}
        <div className="relative">
          <Image
            src={product.imgSrc}
            alt={product.title}
            width={250}
            height={250}
            className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
          />
          {/* Sale Tag */}
          {product.sale && (
            <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Sale
            </div>
          )}
          {/* Hover Icons */}
          <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <Heart className="w-5 h-5 text-sky-500" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <Link href={`/product/${product.id}`}>
                        <ShoppingCart className="w-5 h-5 text-blue-800" />
                      </Link>
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <ZoomIn className="w-5 h-5 text-sky-500" />
            </button>
          </div>
        </div>
        {/* Product Title */}
        <div className="mt-4 flex items-center">
          <a
            href={`/product/${product.id}`}
            className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2"
          >
            {product.title}
          </a>
        </div>
        {/* Product Price */}
        <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
          <p>
            {product.price}
            {product.originalPrice && (
              <span className="line-through text-red-500 text-sm px-1">
                {product.originalPrice}
              </span>
            )}
          </p>
        </div>
      </div>
    ))}
  </div>
</TabsContent>

       
<TabsContent value="featured">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-9">
    {[
    { id: 25, title: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", imgSrc: "/p5.png", sale: true  },
    { id: 26, title: "Mini LCW Chair", price: "$56.00", originalPrice: "$95.00", imgSrc: "/p6.png", sale: true},
    {id: 27,title: "Elegant Sofa",price: "$75.00", originalPrice: "$95.00", imgSrc: "/p7.png", sale: true},
    {id: 28, title: "Modern Chair",price: "$88.00", originalPrice: "$95.00", imgSrc: "/p1.png",sale: true},
    {id: 29,title: "Stylish Desk", price: "$120.00", originalPrice: "$150.00", imgSrc: "/p3.png",sale: true },
    { id: 30,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p10.png", sale: true},
    ].map((product) => (
      <div key={product.id} className="relative group">
        {/* Product Image */}
        <div className="relative">
          <Image
            src={product.imgSrc}
            alt={product.title}
            width={250}
            height={250}
            className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
          />
          {/* Sale Tag */}
          {product.sale && (
            <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Sale
            </div>
          )}
          {/* Hover Icons */}
          <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <Heart className="w-5 h-5 text-sky-500" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <Link href={`/product/${product.id}`}>
                        <ShoppingCart className="w-5 h-5 text-blue-800" />
                      </Link>
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <ZoomIn className="w-5 h-5 text-sky-500" />
            </button>
          </div>
        </div>
        {/* Product Title */}
        <div className="mt-4 flex items-center">
          <a
            href={`/product/${product.id}`}
            className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2"
          >
            {product.title}
          </a>
        </div>
        {/* Product Price */}
        <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
          <p>
            {product.price}
            {product.originalPrice && (
              <span className="line-through text-red-500 text-sm px-1">
                {product.originalPrice}
              </span>
            )}
          </p>
        </div>
      </div>
    ))}
  </div>
</TabsContent>


         {/* Other Tab Contents */}
         <TabsContent value="special offer">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-9">
    {[
     { id: 31,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p11.png", sale: true},
     { id: 32,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p12.png", sale: true},
     { id: 33,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p9.png", sale: true},
     { id: 34,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p6.png", sale: true},
     { id: 35,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p3.png", sale: true},
     { id: 36,title: "Office Chair", price: "$99.00",originalPrice: "$150.00", imgSrc: "/p10.png", sale: true},
    ].map((product) => (
      <div key={product.id} className="relative group">
        {/* Product Image */}
        <div className="relative">
          <Image
            src={product.imgSrc}
            alt={product.title}
            width={250}
            height={250}
            className="border-2 border-gray-100 w-full h-full bg-gray-100 hover:bg-white"
          />
          {/* Sale Tag */}
          {product.sale && (
            <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Sale
            </div>
          )}
          {/* Hover Icons */}
          <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <Heart className="w-5 h-5 text-sky-500" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <Link href={`/product/${product.id}`}>
                        <ShoppingCart className="w-5 h-5 text-blue-800" />
                      </Link>
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <ZoomIn className="w-5 h-5 text-sky-500" />
            </button>
          </div>
        </div>
        {/* Product Title */}
        <div className="mt-4 flex items-center">
          <a
            href={`/product/${product.id}`}
            className="border-b-2 border-gray-200 text-[#151875] font-semibold text-sm pr-2"
          >
            {product.title}
          </a>
        </div>
        {/* Product Price */}
        <div className="absolute bottom-2 right-2 text-sm text-[#151875] font-semibold">
          <p>
            {product.price}
            {product.originalPrice && (
              <span className="line-through text-red-500 text-sm px-1">
                {product.originalPrice}
              </span>
            )}
          </p>
        </div>
      </div>
    ))}
  </div>
</TabsContent>
      </Tabs>
    </div>
  );
}
