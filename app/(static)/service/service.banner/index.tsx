import { Disc } from "lucide-react";

function ServiceBanner() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-[48px] font-oswald-bold font-bold text-gray-900 mb-4">
            Revolutionizing Industries with Advanced Technology
          </h1>
          <p className="text-gray-700 mb-6">
            Partner with us to leverage our technological expertise and
            innovative solutions to drive your business forward.
          </p>
          <div className="flex space-x-8 mt-6">
            <a
              href="#"
              className="text-gray-500 items-center hover:text-gray-900 flex gap-1 "
            >
              <Disc size={20} />
              Initiating
            </a>
            <a
              href="#"
              className="text-gray-500 items-center hover:text-gray-900 flex gap-1 "
            >
              <Disc size={20} />
              Planning
            </a>
            <a
              href="#"
              className="text-gray-500 items-center hover:text-gray-900 flex gap-1 "
            >
              <Disc size={20} />
              Executing
            </a>
            <a
              href="#"
              className="text-gray-500 items-center flex gap-2 hover:text-gray"
            >
              <Disc size={20} />
              Controlling
            </a>
            <a
              href="#"
              className="text-gray-500 items-center hover:text-gray-900 flex gap-1 "
            >
              <Disc size={20} />
              Closing
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/service/sr-bg.svg"
            alt="Hero Image"
            className="w-full h-auto max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceBanner;
