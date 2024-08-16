import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Teams() {
  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
      <div className="h-[450px] flex justify-center p-5 box-border flex-col items-center  w-full rounded-lg border-[1px] bg-white ">
        <img src="/hire/01.svg" className=" max-w-sm" alt="" />
        <h1 className=" self-start font-oswald-bold text-[22px] text-primary mt-3">
          Tell Us Your Requirements
        </h1>
        <p className=" text-gray-500 text-[14px] mt-3">
          Complete the form on our website and provide information about your
          project goal & details for building your website, the specific goals
          and vision you are planning, and some basic details about your
          company.
        </p>
      </div>
      <div className="h-[450px] flex justify-center p-5 box-border flex-col items-center  w-full rounded-lg border-[1px] bg-white lg:mt-24">
        <img src="/hire/02.svg" className=" max-w-sm" alt="" />
        <h1 className=" self-start font-oswald-bold text-[22px] text-primary mt-3">
          Book a Call
        </h1>
        <p className=" text-gray-500 text-[14px] mt-3">
          Book a call with us at a suitable time to discuss your requirements
          and the objectives you want to accomplish with your tech team..
        </p>
      </div>

      <div className="h-[450px] flex justify-center p-5 box-border flex-col items-center  w-full rounded-lg border-[1px] bg-white lg:mt-48">
        <img src="/hire/03.svg" className=" max-w-sm" alt="" />

        <h1 className=" self-start font-oswald-bold text-[22px] text-primary mt-3">
          Get Quote for your Website Project within 24 Hours
        </h1>
        <p className=" text-gray-500 text-[14px] mt-3">
          We will find the most suitable developers for you based on what you
          need and arrange your developer team within 24 hours.
        </p>
      </div>
    </div>
  );
}
