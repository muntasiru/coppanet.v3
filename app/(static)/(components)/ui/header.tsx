"use client";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "./primary-btn";
import NavLink from "./navlink";
import { Menu } from "lucide-react";

export function Header() {
  return (
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
          <Menu />
        </div>
      </div>
    </div>
  );
}
