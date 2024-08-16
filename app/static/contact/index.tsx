import PrimaryBtn from "../components/ui/primary-btn";

// components/ContactSection.js
export default function ContactSection() {
  return (
    <div className="bg-white py-16 px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left Section */}
        <div>
          <h2 className="text-[44px] font-oswald-bold font-bold mb-6">
            Get in touch today
          </h2>
          <p className="text-[24px] font-oswald-bold font-semibold mb-4">
            Contact us now if you are thinking about your software
          </p>
          <p className="text-gray-600 mb-6">
            With the help of our innovative team, we can share our expertise and
            resources around the world. So contact us to see how you can join
            our global family!
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              <span className="mr-3">📧</span>
              <a href="mailto:info@coppanet.com" className="text-blue-500">
                info@coppanet.com
              </a>
            </p>
            <p className="flex items-center">
              <span className="mr-3">📞</span>
              <a href="tel:+8801605144631" className="text-blue-500">
                +88 01605-144631
              </a>
            </p>
            <p className="flex items-center">
              <span className="mr-3">📍</span>
              Mahtab Center (L-12) Suite #10, 177 Shahid Syed Nazrul Islam
              Sarani Bijoy Nagar, Dhaka-1000, Bangladesh
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-xl border-[1px] ">
          <form>
            <input
              type="text"
              placeholder="John Carter"
              className="w-full p-4 mb-4 border border-gray-300 rounded-[25px]"
            />
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full p-4 mb-4 border border-gray-300 rounded-[25px]"
            />
            <input
              type="tel"
              placeholder="(123) 456 - 789"
              className="w-full p-4 mb-4 border border-gray-300 rounded-[25px]"
            />
            <textarea
              placeholder="Please type your message here..."
              className="w-full p-4 mb-4 border border-gray-300 rounded-md h-32"
            />
            <PrimaryBtn>Submit & Send</PrimaryBtn>
          </form>
        </div>
      </div>
    </div>
  );
}
