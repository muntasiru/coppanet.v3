"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import PrimaryBtn from "../../(components)/ui/primary-btn";
import Link from "next/link";

export function Banner() {
  return (
    <div className="  overflow-x-hidden flex flex-col item-center gap-10  justify-center">
      <div className=" h-[500px] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0  flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_2%,black)]"></div>
        <HeroHighlight className="text-center ">
          <motion.div
            whileInView={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            viewport={{ once: false, amount: 0.2 }}
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-[14px] font-oswald-light mx-auto  md:text-[16px] w-fit font-bold bg-brand-200 px-5 py-1 rounded-[25px] "
          >
            Unlock your Software Development Services
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl mt-5 font-oswald-bold px-4 md:text-3xl lg:text-[44px] font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-[74px] text-center mx-auto "
          >
            Empowering Your Business with Advanced Digital Solutions Tailored to
            Your Industrys Unique Needs
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className=" mx-auto mt-5"
          >
            <Link href={"/contact"}>
              <PrimaryBtn>Hire the best team</PrimaryBtn>
            </Link>
          </motion.div>
        </HeroHighlight>
      </div>
    </div>
  );
}
