import { getPosts } from "@/sanity/sanity-utils";
import React from "react";
import { BlogCard } from "./blog-card";

export async function BlogList() {
  const posts = await getPosts();

  return (
    <div className="py-14 container">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3  ">
        {posts?.map((post, i) => (
          <React.Fragment key={i}>
            <BlogCard data={post} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
