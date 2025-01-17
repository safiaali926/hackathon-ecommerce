// pages/product/[id].tsx
import { useRouter } from "next/router";
import Image from "next/image";

const products = [
  { id: 13, title: "Vel elit euismod", price: "$29.99", imgSrc: "/p7.png", colors: ["Red", "Blue", "Green"], description: "A stylish and comfortable chair perfect for your living room." },
  { id: 14, title: "Vel elit euismod", price: "$49.99", imgSrc: "/p5.png", colors: ["Black", "White", "Gray"], description: "An elegant chair designed for relaxation." },
  { id: 15, title: "Vel elit euismod", price: "$69.99", imgSrc: "/p4.png", colors: ["Purple", "Yellow", "Pink"], description: "A luxurious chair that adds a pop of color to any room." },
  { id: 16, title: "Vel elit euismod", price: "$39.99", imgSrc: "/p8.png", colors: ["Orange", "Blue", "White"], description: "A modern chair with a minimalist design." },
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen py-10 px-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="flex flex-col space-y-4 items-center">
            <Image src={product.imgSrc} alt={product.title} width={150} height={200} className="object-cover rounded-lg shadow-md" />
            <Image src={product.imgSrc} alt={product.title} width={150} height={200} className="object-cover rounded-lg shadow-md" />
            <Image src={product.imgSrc} alt={product.title} width={150} height={200} className="object-cover rounded-lg shadow-md" />
          </div>
          <div className="flex justify-center items-center h-full pr-9">
            <Image src={product.imgSrc} alt={product.title} width={400} height={600} className="object-cover rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col space-y-6 place-items-start text-left px-4">
            <h2 className="text-3xl font-semibold text-gray-900">{product.title}</h2>
            <p className="text-lg font-semibold text-gray-800">{product.price}</p>
            <p className="text-[#151875] font-bold">Color</p>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <div key={index} className="w-8 h-8 rounded-full border" style={{ backgroundColor: color.toLowerCase() }}></div>
              ))}
            </div>
            <p className="text-[#151875] font-bold">Description</p>
            <p className="text-gray-600">{product.description}</p>
            <button className="mt-6 px-6 py-3 bg-[#151875] text-white hover:bg-pink-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
