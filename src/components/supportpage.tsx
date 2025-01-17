import Image from "next/image";

export default function Supportpage() {
  return (
    <div className="m-9">
      {/* Page Title */}
      <div className="text-[#151875] text-3xl font-bold text-center mb-8">
        What Shopex Offer!
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center h-80 w-60">
          <Image
            src="/c1.png" // Replace with your icon/image
            alt="Service 1"
            width={65}
            height={65}
            className="mb-4 mt-5"
          />
          <h3 className="text-xl font-bold text-[#1A0B5B] mb-2 h-10 flex items-center justify-center">
            24/7 Support
          </h3>
          <p className="text-gray-600 text-center h-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center h-80 w-60">
          <Image
            src="/c2.png" // Replace with your icon/image
            alt="Service 2"
            width={65}
            height={65}
            className="mb-4"
          />
          <h3 className="text-xl font-bold text-[#1A0B5B] mb-2 h-10 flex items-center justify-center">
            24/7 Support
          </h3>
          <p className="text-gray-600 text-center h-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center h-80 w-60">
          <Image
            src="/c3.png" // Replace with your icon/image
            alt="Service 3"
            width={65}
            height={65}
            className="mb-4"
          />
          <h3 className="text-xl font-bold text-[#1A0B5B] mb-2 h-10 flex items-center justify-center">
            24/7 Support
          </h3>
          <p className="text-gray-600 text-center h-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center h-80 w-60">
          <Image
            src="/c4.png" // Replace with your icon/image
            alt="Service 4"
            width={65}
            height={65}
            className="mb-4"
          />
          <h3 className="text-xl font-bold text-[#1A0B5B] mb-2 h-10 flex items-center justify-center">
            24/7 Support
          </h3>
          <p className="text-gray-600 text-center h-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>
      </div>
    </div>
  );
}
