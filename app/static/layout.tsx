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
function Footer() {
  return <>Header</>;
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
