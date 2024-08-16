import Image from "next/image";
import React from "react";
import { Navigation } from "./components/ui/navigation";
import PrimaryBtn from "./components/ui/primary-btn";
function Header() {
  return (
    <div className=" bg-brand-100 py-3 md:py-4 lg:py-5">
      <div className="container flex justify-between">
        <Image
          className="max-w-[120px] md:max-w-[150px] lg:max-w-[180px]"
          src={"/logo/logo.svg"}
          width={180}
          height={40}
          alt="logo"
        />
        <div className=" flex gap-6">
          <ul className="flex gap-5 items-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Blog</li>
          </ul>
          <PrimaryBtn>Contact Now</PrimaryBtn>
        </div>
      </div>
    </div>
  );
}
// components/Footer.js
function Footer() {
  return (
    <footer className="bg-[#f9f4ef] text-gray-700 py-12">
      <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img src="/logo/logo.svg" alt="" />
          <p className="my-6 text-[16px] ">
            We create innovative platforms across sectors, transforming
            industries with cutting-edge solutions that enhance efficiency, user
            experience, and business performance.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-600"
            />
            <button
              type="submit"
              className="bg-brown-600 text-white p-3 rounded-r-full hover:bg-brown-700"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-brown-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brown-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brown-600">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brown-600">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brown-600">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-brown-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brown-600">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brown-600">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brown-600">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brown-600">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              <a
                href="mailto:info@coppanet.com"
                className="hover:text-brown-600"
              >
                info@coppanet.com
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <a href="tel:+8801605144631" className="hover:text-brown-600">
                +88 01605-144631
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              Mahtab Center (L-12) Suite #10, 177 Shahid Syed Nazrul Islam
              Sarani Bijoy Nagar, Dhaka-1000, Bangladesh
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              <a
                href="mailto:support@managerparis.com"
                className="hover:text-brown-600"
              >
                support@managerparis.com
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <a href="tel:+33140344505" className="hover:text-brown-600">
                +33 1 40 34 45 05
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              155 rue du faubourg Saint-Denis 75010 Paris, France
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons and Copyright */}
      <div className="border-t border-gray-300 mt-12 pt-8 text-center">
        <div className="mb-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-brown-600">
            🐦
          </a>
          <a href="#" className="hover:text-brown-600">
            📘
          </a>
          <a href="#" className="hover:text-brown-600">
            📷
          </a>
          <a href="#" className="hover:text-brown-600">
            🔗
          </a>
          <a href="#" className="hover:text-brown-600">
            ▶️
          </a>
        </div>
        <p className="text-sm text-gray-500">
          Copyright © 2024 Coppanet.Ltd | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

function Layout({ children }: any) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
