"use client";

import { Facebook, Mail, Map, MapPin, Phone, PhoneCall } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#f9f4ef] text-gray-700 pt-14">
      <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
        {/* Logo and Description */}
        <div>
          <img src="/logo/logo.svg" alt="" />
          <p className="my-6 text-[14px] ">
            We create innovative platforms across sectors, transforming
            industries with cutting-edge solutions that enhance efficiency, user
            experience, and business performance.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-full border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-600"
            />
            <button
              type="submit"
              className=" bg-primary text-white p-3 rounded-r-full hover:bg-brown-700"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Menu */}
        <div className=" lg:mx-auto">
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
        <div className=" lg:mx-auto">
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
              <span className="mr-2">
                <Mail />
              </span>
              <a
                href="mailto:info@coppanet.com"
                className="hover:text-brown-600"
              >
                info@coppanet.com
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">
                <Phone />
              </span>
              <a href="tel:+8801605144631" className="hover:text-brown-600">
                +88 01605-144631
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">
                <MapPin />
              </span>
              Mahtab Center (L-12) Suite #10, 177 Shahid Syed Nazrul Islam
              Sarani Bijoy Nagar, Dhaka-1000, Bangladesh
            </li>

            <li className="flex items-center">
              <span className="mr-2">
                <PhoneCall />
              </span>
              <a href="tel:+33140344505" className="hover:text-brown-600">
                +33 1 40 34 45 05
              </a>
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
              <span className="mr-2">📍</span>
              155 rue du faubourg Saint-Denis 75010 Paris, France
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons and Copyright */}
      <div className="border-t border-gray-300  text-center py-3 text-[14px]">
        Copyright © 2024 Coppanet.Ltd | All Rights Reserved
      </div>
    </footer>
  );
}
