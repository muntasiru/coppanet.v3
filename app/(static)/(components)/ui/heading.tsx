"use client";
import { motion } from "framer-motion";
import React from "react";
interface HeadingProps {
  children: React.ReactNode;
  subTitle: string;
}
function Heading({ children, subTitle }: HeadingProps) {
  return (
    <div className=" flex-col md:flex-row flex lg:py-10 w-full lg:gap-14 md:items-center ">
      <motion.h1
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        initial={{
          opacity: 0,
          x: 120,
        }}
        transition={{
          duration: 0.7,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        viewport={{ once: false, amount: 0.5 }}
        className=" max-w-[400px] text-center md:text-left font-oswald-bold text-[28px] md:text-[34px] lg:text-[44px] text-primary"
      >
        {children}
      </motion.h1>
      <motion.p
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        initial={{
          opacity: 0,
          x: -120,
        }}
        transition={{
          duration: 0.7,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        viewport={{ once: false, amount: 0.5 }}
        className=" lg:max-w-[700px] text-center md:text-left py-2 md:py-0 text-gray-500 md:text-[18px] text-[14px] sm:text-[16px]"
      >
        {subTitle}
      </motion.p>
    </div>
  );
}

export default Heading;
