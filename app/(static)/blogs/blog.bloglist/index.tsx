import { getPosts } from "@/sanity/sanity-utils";
import { BlogCard } from "./blog-card";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import config from "@/sanity/config/client-config";
import React from "react";

export async function BlogList() {
  const posts = await getPosts();

  const ImageComponent = ({ value, isInline }: any) => {
    return (
      <div className="my-10 overflow-hidden rounded-[15px]">
        <Image
          src={
            urlBuilder(config)
              .image(value)
              .fit("max")
              .auto("format")
              .url() as string
          }
          width={400}
          height={400}
          alt={value.alt || "blog image"}
          loading="lazy"
          style={{
            display: isInline ? "inline-block" : "block",
            aspectRatio: 400 / 400,
          }}
        />
      </div>
    );
  };
  const components = {
    types: {
      image: ImageComponent,
    },
  };
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
