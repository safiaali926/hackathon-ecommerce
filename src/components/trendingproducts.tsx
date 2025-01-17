// components/Trendingproducts.tsx
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 13, title: "Cantilever chair", price: "$26.00", imgSrc: "/p7.png" },
  { id: 14, title: "Cantilever chair", price: "$26.00", imgSrc: "/p5.png" },
  { id: 15, title: "Cantilever chair", price: "$26.00", imgSrc: "/p4.png" },
  { id: 15, title: "Cantilever chair", price: "$26.00", imgSrc: "/p8.png" },
];

export default function Trendingproducts() {
  return (
    <div className="py-10">
      <div className="text-[#151875] text-3xl font-bold text-center mb-8">
        Trending Products
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-white shadow-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px] cursor-pointer">
              <div className="relative w-full h-80 bg-gray-200 overflow-hidden mb-4">
                <Image
                  src={product.imgSrc}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-[16px] font-semibold text-[#151875] mb-2">
                  {product.title}
                </h3>
                <p className="mb-4 text-[#151875]">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
