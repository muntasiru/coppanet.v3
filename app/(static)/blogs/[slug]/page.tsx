"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import BlogDetails from "./blog-details";
import { useParams } from "next/navigation";
import { getPostBySlug } from "@/sanity/sanity-utils";

function page() {
  let [data, setData] = useState({
    title: "",
  });
  let router = useParams();

  const getData = async (slug: string) => {
    let response = await getPostBySlug(String(slug));

    setData(response);
    console.log(response);
  };
  getData(String(router.slug));
  return (
    <div className="container">
      <BlogDetails data={data} />
    </div>
  );
}

export default page;
