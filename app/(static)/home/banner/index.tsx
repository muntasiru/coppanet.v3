"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Banner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headingText =
    "Innovative Tech Solutions to Elevate Your Business to New Heights";

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  const underlineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: headingText.split(" ").length * 0.1 + 0.5,
          duration: 0.5,
          ease: "easeInOut",
        },
        opacity: {
          delay: headingText.split(" ").length * 0.1 + 0.5,
          duration: 0.3,
        },
      },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
    tap: { scale: 0.95 },
  };
  return (
    <div className="  overflow-x-hidden flex flex-col  gap-10  ">
      <div className=" h-[400px] md:h-[600px] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0  flex items-center  dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_2%,black)]"></div>
        <div className="container flex z-50 items-center justify-center gap-10">
          <div className="lg:max-w-[540px] w-full">
            <h1 className="sr-only">{headingText}</h1>
            <div
              aria-hidden="true"
              className="text-3xl w-full block font-oswald-bold md:text-3xl lg:text-[50px] font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-[74px]"
            >
              {mounted &&
                headingText.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-2"
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: index * 0.1,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
            </div>
            <motion.svg
              className="max-w-[250px] -rotate-[6deg] "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 20"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M0,10 Q125,20 250,10 T500,10"
                fill="none"
                stroke="#FFD700"
                strokeWidth="8"
                variants={underlineVariants}
              />
            </motion.svg>
            <motion.button
              className="bg-primary px-6 mt-10 py-3 text-white rounded-md relative overflow-hidden group"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Learn More</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-25"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 lg:mt-0 md:block hidden"
          >
            <Image
              src="/banner/bn-image.png"
              alt="Tech Solutions"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
