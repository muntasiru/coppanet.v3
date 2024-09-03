import { ArrowRight } from "lucide-react";
import React from "react";

function BlogBanner() {
  return (
    <div className="container rounded-xl overflow-hidden my-10 relative bg-[url('/blogs/bl-bg.png')] w-full h-[500px] bg-cover">
      <div className=" absolute p-10 flex items-center   top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm">
        <div className="h-fit max-w-2xl">
          <p>
            <span className="bg-white/90 rounded-full py-1 px-3">Motion</span>
            <span className="text-gray-200 ml-5">August 10, 2024</span>
          </p>
          <h1 className=" text-[44px] mt-3 text-white font-bold">
            Identity: The Ultimate Guide to Effective Branding
          </h1>
          <p className=" text-gray-200 text-[16px] font-light mt-5">
            Coppanet's project lifecycle encompasses five key phases:
            initiating, planning, executing, controlling, and closing. In the
            initiating phase, Coppanet identifies opportunities and secures
            project approval. The planning phase involves creating a
            comprehensive roadmap covering scope, schedule, budget, and
            resources.
          </p>
          <a className=" flex gap-2 text-[16px] font-semibold mt-10 block text-yellow-600">
            {" "}
            Read article <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogBanner;
