"use client"
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, ZoomIn } from "lucide-react";
import { FiHeart } from "react-icons/fi";

// Sanity Client Configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "your_dataset",
  useCdn: true,
  apiVersion: "2021-08-31",
});

const builder = imageUrlBuilder(client);

// Function to get the image URL from Sanity
function urlFor(source: any) {
  return source ? builder.image(source).url() : "";
}

// Define Product Type
interface Product {
  _id: string;
  title: string;
  price: number;
  originalprice?: number;
  imageurl: any;
  badge?: string;
}

const LatestProduct = () => {
  const [newArrivalProducts, setNewArrivalProducts] = useState<Product[]>([]);
  const [bestSellerProducts, setBestSellerProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [specialofferProducts, setspecialofferProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("new arrival");
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const newArrivalQuery = `*[_type == "product" && "new arrival" in tags] | order(_createdAt desc)[1..9]{
          _id,
          title,
          price,
          originalprice,
          "imageurl": imageurl.asset->url,
          badge
        }`;

        const bestSellerQuery = `*[_type == "product" && "best seller" in tags] | order(salesCount desc) {
          _id,
          title,
          price,
          originalprice,
          "imageurl": imageurl.asset->url,
          badge
        }`;

        const specialofferQuery = `*[_type == "product" && "trending" in tags] | order(_createdAt desc)[0..6] {
          _id,
          title,
          price,
          originalprice,
          "imageurl": imageurl.asset->url,
          badge
        }`;

        const featuredQuery = `*[_type == "product" && "featured" in tags] | order(_createdAt desc)[13..19] {
          _id,
          title,
          price,
          originalprice,
          "imageurl": imageurl.asset->url,
          badge
        }`;

        const [newArrivalData, bestSellerData, specialofferData, featuredData] = await Promise.all([
          client.fetch(newArrivalQuery),
          client.fetch(bestSellerQuery),
          client.fetch(featuredQuery),
          client.fetch(specialofferQuery),
        ]);

        setNewArrivalProducts(newArrivalData);
        setBestSellerProducts(bestSellerData);
        setspecialofferProducts(specialofferData);
        setFeaturedProducts(featuredData);
      } catch (err) {
        setError("Error fetching products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Load wishlist from localStorage
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Handle Wishlist Add/Remove
  const handleWishlistToggle = (product: Product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item._id === product._id);
    let updatedWishlist;

    if (isAlreadyInWishlist) {
      updatedWishlist = wishlist.filter((item) => item._id !== product._id); // Remove from wishlist
    } else {
      updatedWishlist = [...wishlist, product]; // Add to wishlist
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save updated wishlist to localStorage
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="m-9">
      <div className="text-[#151875] text-3xl font-bold text-center mb-8">Latest Products</div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-white flex justify-center space-x-8">
          <TabsTrigger value="new arrival">New Arrival</TabsTrigger>
          <TabsTrigger value="best seller">Best Seller</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="trending">Special Offer</TabsTrigger>
        </TabsList>

        <TabsContent value="new arrival">
          <ProductGrid products={newArrivalProducts} onWishlistToggle={handleWishlistToggle} wishlist={wishlist} />
        </TabsContent>
        <TabsContent value="best seller">
          <ProductGrid products={bestSellerProducts} onWishlistToggle={handleWishlistToggle} wishlist={wishlist} />
        </TabsContent>
        <TabsContent value="featured">
          <ProductGrid products={featuredProducts} onWishlistToggle={handleWishlistToggle} wishlist={wishlist} />
        </TabsContent>
        <TabsContent value="trending">
          <ProductGrid products={specialofferProducts} onWishlistToggle={handleWishlistToggle} wishlist={wishlist} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ProductGrid = ({ products, onWishlistToggle, wishlist }: { products: Product[]; onWishlistToggle: (product: Product) => void; wishlist: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-9">
      {products.slice(0, 6).map((product) => (
        <div key={product._id} className="relative group">
          <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
            {product.imageurl ? (
              <Image src={urlFor(product.imageurl)} alt={product.title} layout="fill" objectFit="contain" className="transition-transform transform group-hover:scale-105 w-full h-full" />
            ) : (
              <div>No image available</div>
            )}
            <div className="absolute bottom-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all">
              <button onClick={() => onWishlistToggle(product)} className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-gray-200">
                <FiHeart className={`text-xl ${wishlist.some((item) => item._id === product._id) ? "text-pink-500" : "text-gray-900"}`} />
              </button>
              <Link href={`/product/${product._id}`} className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                <ShoppingCart className="w-5 h-5 text-blue-800" />
              </Link>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                <ZoomIn className="w-5 h-5 text-sky-500" />
              </button>
            </div>
          </div>
          <div className="mt-4">{product.title} - ${product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default LatestProduct;
