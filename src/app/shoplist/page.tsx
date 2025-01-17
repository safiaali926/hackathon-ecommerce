

import Shoplist from "@/components/shoplist"

export default function Shopleftsidebar (){
    return (
        <>
        {/* Header */}
<header className="bg-white">
  <div className="w-full py-9 bg-[#F6F5FF]">
    {/* Breadcrumbs */}
    <div className="mx-auto container px-4">
      <h1 className="text-2xl font-bold text-[#1D3178]">Shop List</h1>
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
          <li className="text-pink-500 font-semibold">Shop List</li>
        </ol>
      </nav>
    </div>
  </div>
</header>

<Shoplist/>

</>
    )
}