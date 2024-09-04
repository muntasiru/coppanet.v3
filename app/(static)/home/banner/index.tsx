"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import PrimaryBtn from "../../(components)/ui/primary-btn";

export function Banner() {
  return (
    <div className=" flex flex-col item-center gap-10 md:py-20 justify-center">
      <HeroHighlight className="text-center">
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
          <PrimaryBtn>Hire the best team</PrimaryBtn>
        </motion.div>
      </HeroHighlight>
    </div>
  );
}
