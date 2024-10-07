"use client";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function BlogCard({ data }: any) {
  console.log(data);

  return (
    <div className="w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl   backgroundImage flex flex-col justify-between p-4"
        )}
      >
        <div className=" absolute top-0 left-0 w-full h-full"> </div>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/manu.png"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {data.author.name}
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <Link href={`blogs/${data.slug.current}`}>
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {data.title}
            </h1>
          </Link>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Card with Author avatar, complete name and time to read - most
            suitable for blogs.
          </p>
        </div>
      </div>
    </div>
  );
}
