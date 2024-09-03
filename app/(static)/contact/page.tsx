import React from "react";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Star } from "lucide-react";
import { StarFilledIcon } from "@sanity/icons";
import PrimaryBtn from "../(components)/ui/primary-btn";

function Contact() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <div className="bg-white container">
      <div className="grid grid-cols-1 py-24 lg:grid-cols-2 gap-12 ">
        {/* Left Section */}
        <div>
          <h2 className="text-[44px] font-oswald-bold font-bold ">
            Have an idea?
          </h2>
          <p className="text-[24px] font-oswald-bold font-semibold mb-10">
            Let&lsquo;s Transform Your Ideas into Reality.
          </p>

          <div className="space-y-4">
            <p className="flex items-center">
              <span className="mr-3">📧</span>
              <a href="mailto:info@coppanet.com" className="text-gray-500">
                info@coppanet.com
              </a>
            </p>
            <p className="flex items-center">
              <span className="mr-3">📞</span>
              <a href="tel:+8801605144631" className="text-gray-500">
                +88 01605-144631
              </a>
            </p>
            <p className="flex items-center text-gray-500">
              <span className="mr-3">📍</span>
              Mahtab Center (L-12) Suite #10, 177 Shahid Syed Nazrul Islam
              Sarani Bijoy Nagar, Dhaka-1000, Bangladesh
            </p>
          </div>
        </div>

        {/* Right Section */}

        <img src="/contact/w.svg" alt="w" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 h-[400px] rounded-2xl overflow-hidden">
        <div className="relative bg-[url(/contact/fc.png)]  bg-cover bg-fixed origin-top ">
          <div className=" absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center box-border">
            <h1 className=" text-white inline-block font-oswald-bold text-[48px] drop-shadow-md ">
              French
            </h1>
          </div>
        </div>
        <div className="relative bg-[url(/contact/bc.png)]  bg-cover bg-fixed origin-top">
          <div className=" absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center box-border">
            <h1 className=" text-white inline-block font-oswald-bold text-[48px] drop-shadow-md ">
              Bangladesh
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 py-24 lg:grid-cols-2 gap-12 ">
        {/* Left Section */}
        <div>
          <h2 className="text-[44px] font-oswald-bold font-bold ">
            Please contact with us for any kind of information and projects
          </h2>
          <div className="flex gap-10 items-center">
            <div className="flex flex-row items-center my-10 w-fit">
              <AnimatedTooltip items={people} />
            </div>
            <div>
              <span className=" flex gap-1">
                <StarFilledIcon fontSize={24} className=" text-yellow-600" />
                <StarFilledIcon fontSize={24} className=" text-yellow-600" />
                <StarFilledIcon fontSize={24} className=" text-yellow-600" />
                <StarFilledIcon fontSize={24} className=" text-yellow-600" />
                <StarFilledIcon fontSize={24} className=" text-yellow-600" />
              </span>
              <span className="text-[14px]">260+ reviews (4.95 of 5)</span>
            </div>
          </div>
        </div>

        {/* Right Section */}

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
  );
}

export default Contact;
