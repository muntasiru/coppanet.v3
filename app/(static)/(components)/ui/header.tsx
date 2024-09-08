"use client";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "./primary-btn";
import NavLink from "./navlink";
import { CircleX, Cross, DoorClosed, Menu } from "lucide-react";
import { useState } from "react";
import { CollapseIcon } from "@sanity/icons";

export function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const onClickMobileMenu = () => {
    setIsMobile(!isMobile);
  };
  return (
    <>
      <div className=" bg-brand-100 py-3 md:py-4 lg:py-5">
        <div className="container flex justify-between items-center">
          <Link href={"/"}>
            <Image
              className="max-w-[120px] md:max-w-[150px] lg:max-w-[180px]"
              src={"/logo/logo.svg"}
              width={180}
              height={40}
              alt="logo"
              loading="eager"
            />
          </Link>
          <div className=" hidden md:flex gap-6 items-center">
            <ul className="flex gap-5 items-center  font-semibold">
              <NavLink href="/" activeClassName="active-link">
                Home
              </NavLink>
              <NavLink href="/about" activeClassName="active-link">
                Company
              </NavLink>
              <NavLink href="/service" activeClassName="active-link">
                Services
              </NavLink>
              <NavLink href="/blogs" activeClassName="active-link">
                Blogs
              </NavLink>
            </ul>
            <Link href={"/contact"}>
              <PrimaryBtn>Contact Now</PrimaryBtn>
            </Link>
          </div>
          <div className="md:hidden">
            <Menu onClick={onClickMobileMenu} />
          </div>
        </div>
      </div>

      <div
        className={` ${isMobile ? "left-0 p-6 box-border  duration-300 fixed top-0 z-50 w-[320px] bg-white h-screen" : "absolute duration-300 top-0 -left-[100%] z-10 w-full  h-screen"} `}
      >
        <CircleX
          onClick={onClickMobileMenu}
          className=" cursor-pointer ml-auto"
        />
        <div className=" md:hidden space-y-10">
          <ul className="flex flex-col gap-5 justify-center items-center  font-semibold mb-10">
            <NavLink href="/" activeClassName="active-link">
              Home
            </NavLink>
            <NavLink href="/about" activeClassName="active-link">
              Company
            </NavLink>
            <NavLink href="/service" activeClassName="active-link">
              Services
            </NavLink>
            <NavLink href="/blogs" activeClassName="active-link">
              Blogs
            </NavLink>
          </ul>
          <Link href={"/contact"} className="mt-10">
            <PrimaryBtn>Contact Now</PrimaryBtn>
          </Link>
        </div>
      </div>
    </>
  );
}
