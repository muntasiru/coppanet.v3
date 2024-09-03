"use client";
import BlogDetails from "./blog-details";
import { useGetBlogs } from "./get-blogs";

function page() {
  const { data } = useGetBlogs();
  return (
    <div className="container">
      <BlogDetails data={data} />
    </div>
  );
}

export default page;
