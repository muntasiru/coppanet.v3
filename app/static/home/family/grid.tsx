"use client";
import { GlareCard } from "@/components/ui/glare-card";
import React from "react";

function Grid() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-7 gap-4 lg:gap-10 lg:max-h-[600px]">
        <div className="row-span-7">
          <GlareCard className="flex bg-[url(/family/01.png)] flex-col items-start justify-end py-8 px-6 w-full h-full">
            <p className="font-bold text-white text-lg">Mehmud Alam</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </GlareCard>
        </div>
        <div className="row-span-3">
          2 <img src="/projects/door.png" className="h-full w-full" alt="" />
        </div>
        <div className="row-span-3">
          3 <img src="/projects/door.png" className="h-full w-full" alt="" />
        </div>
        <div className="col-span-2 row-span-4 col-start-2 row-start-4">
          4 <img src="/projects/door.png" className="h-full w-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default Grid;
