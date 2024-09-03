import { getPostBySlug } from "@/sanity/sanity-utils";
import { useParams } from "next/navigation";
import { useState } from "react";

export const useGetBlogs = () => {
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
  return {
    data,
  };
};
