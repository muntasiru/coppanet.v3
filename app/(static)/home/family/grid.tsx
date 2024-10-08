"use client";
import { GlareCard } from "@/components/ui/glare-card";
import React from "react";
import { Globe } from "./globe";
import { motion } from "framer-motion";

function Grid() {
  return (
    <>
      <div className=" flex gap-6 flex-wrap lg:h-[600px] mt-10 lg:mt-0">
        <div className="lg:max-w-[32%] w-full h-full">
          <GlareCard className="flex  bg-[url(/family/01.png)] bg-cover bg-no-repeat flex-col items-start justify-end py-8 px-6 w-full h-full">
            <p className="font-oswald-bold text-white text-[22px]">
              Mehmud Alam
            </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </GlareCard>
        </div>

        <div className="lg:max-w-[65%] flex flex-col gap-6 ">
          <div className=" flex lg:flex-nowrap flex-wrap gap-6">
            <div className="lg:w-1/2 w-full max-h-[240px]">
              <GlareCard className="flex bg-[url(/family/02.png)] bg-no-repeat bg-cover flex-col items-start justify-end  w-full h-full">
                <div className="bg-black/50 w-full h-full py-8 px-6">
                  <p className="font-oswald-bold text-white text-[22px] md:text-[26px]">
                    Bangladesh
                  </p>
                  <p className="font-normal text-base text-neutral-200 mt-4">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                </div>
              </GlareCard>
            </div>
            <div className="lg:w-1/2 w-full max-h-[240px]">
              <GlareCard className="flex bg-[url(/family/03.png)] bg-no-repeat bg-cover  flex-col items-start justify-end  w-full h-full">
                <div className="bg-black/50 w-full h-full py-8 px-6">
                  <p className="font-oswald-bold text-white text-[22px] md:text-[26px]">
                    France
                  </p>
                  <p className="font-normal text-base text-neutral-200 mt-4">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                </div>
              </GlareCard>
            </div>
          </div>
          <div className="  lg:h-[340px] mt-6 lg:mt-0">
            {/* <Globe className=" lg:absolute" /> */}
            <motion.img
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="h-full w-full"
              src="/family/fbd.png"
            ></motion.img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
