import { getPostBySlug } from "@/sanity/sanity-utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useGetBlogs = () => {
  let [data, setData] = useState({
    title: "",
  });
  let router = useParams();

  useEffect(() => {
    getData(String(router.slug));
  }, []);
  const getData = async (slug: string) => {
    let response = await getPostBySlug(String(slug));
    setData(response);
    console.log(response);
  };

  return {
    data,
  };
};
