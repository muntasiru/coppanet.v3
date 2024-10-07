"use client";

import { motion } from "framer-motion";

export function Teams() {
  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 mt-10 lg:mt-0">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{
          duration: 1,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="h-[450px] flex justify-center p-5 box-border flex-col items-center  w-full rounded-lg border-[1px] bg-white "
      >
        <img src="/hire/01.svg" className=" max-w-sm" alt="" />
        <h1 className=" self-start font-oswald-bold text-[22px] text-primary mt-3">
          Tell Us Your Requirements
        </h1>
        <p className=" text-gray-500 text-[14px] mt-3">
          Tell us what’s keeping you at night;, from design ideas to
          functionality requirements. We listen carefully to understand your
          goals and needs.
        </p>
      </motion.div>

      <div className="h-[450px] flex justify-center p-5 box-border flex-col items-center  w-full rounded-lg border-[1px] bg-white ">
        <img src="/hire/02.svg" className=" max-w-sm" alt="" />
        <h1 className=" self-start font-oswald-bold text-[22px] text-primary mt-3">
          Book a Call
        </h1>
        <p className=" text-gray-500 text-[14px] mt-3">
          Book a call today and our expert team will provide advice and clarify
          any questions to ensure we’re aligned.
        </p>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{
          duration: 1,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="h-[450px] flex justify-center p-5 box-border flex-col items-center  w-full rounded-lg border-[1px] bg-white "
      >
        <img src="/hire/03.svg" className=" max-w-sm" alt="" />

        <h1 className=" self-start font-oswald-bold text-[22px] text-primary mt-3">
          Get Quote for your Website Project within 24 Hours
        </h1>
        <p className=" text-gray-500 text-[14px] mt-3">
          Within just 24 hours of our call, you’ll receive a detailed quote
          tailored to your project, so you can start your journey with
          confidence.
        </p>
      </motion.div>
    </div>
  );
}
