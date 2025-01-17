export default function Contact() {
    return (
      <>
        {/* Header Section */}
        <div className="relative w-full h-[200px] bg-[#F6F5FF] text-left p-9 flex items-center justify-start mx-auto">
          <div className="max-w-xl w-full ">
            <h1 className="text-[#151875] font-bold text-2xl ">Contact Us</h1>
            <p>
              Home . Page . <span className="text-pink-500">Contact</span>
            </p>
          </div>
        </div>
  
        {/* Two Column Section */}
        <div className="py-10">
          <div className="container mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column */}
            <div className="flex flex-col items-start">
              <h2 className="text-[28px] font-bold text-[#151875] mb-4">
                Information About Us
              </h2>
              <p className="text-md text-[#8A8FB9] text-justify w-2/3">
                We offer premium services and products tailored to meet your needs. With years of experience, we deliver top-quality solutions.
              </p>
            </div>
  
            {/* Second Column */}
            <div>
              <h2 className="text-[28px] font-bold text-[#151875] mb-4">Contact Way</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Side */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-red-500 mr-3"></div>
                    <div>
                      <p className="text-[#8A8FB9]">Tel: 877-67-88-99</p>
                      <p className="text-[#8A8FB9] text-sm">E-Mail: shop@store.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-500 mr-3"></div>
                    <div>
                      <p className="text-[#8A8FB9]">20 Margaret st, London</p>
                      <p className="text-[#8A8FB9] text-sm">Great Britain, 3NM98-LK</p>
                    </div>
                  </div>
                </div>
  
                {/* Right Side */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-green-500 mr-3"></div>
                    <div>
                      <p className="text-[#8A8FB9]">Support Forum</p>
                      <p className="text-[#8A8FB9] text-sm">For over 24hr</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 mr-3"></div>
                    <div>
                      <p className="text-[#8A8FB9]">Free standard shipping</p>
                      <p className="text-[#8A8FB9] text-sm">on all orders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Get in Touch Section */}
        <div className="py-10">
          <div className="container mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column: Form */}
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-[28px] font-bold text-[#151875] mb-6">Get in Touch</h2>
              <p className="text-[#8A8FB9] text-justify mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
              </p>
              <form className="space-y-6">
                {/* Name and Email in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
  
                {/* Subject */}
                <input
                  type="text"
                  placeholder="Subject*"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200"
                />
  
                {/* Message */}
                <textarea
                  placeholder="Type your Message*"
                  rows={5}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200"
                ></textarea>
  
                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-pink-500 text-white p-3 rounded-sm hover:bg-pink-600"
                >
                  Send Message
                </button>
              </form>
            </div>
  
            {/* Right Column: Image */}
            <div className="flex justify-center">
              <img
                src="/g1.png"
                alt="Contact Us"
                className="rounded-lg max-w-full"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  