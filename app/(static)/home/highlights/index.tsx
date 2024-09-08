"use client";
import React from "react";

import { motion } from "framer-motion";
function Heighlights() {
  return (
    <div className=" container overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 ">
        <div className=" w-full flex flex-col gap-6">
          <div className="flex w-full gap-6">
            <motion.div
              whileInView="visible"
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{
                opacity: 1,
                y: [-20, -5, 0],
              }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="w-1/2 max-h-[220px] lg:max-h-[250px] rounded-xl overflow-hidden"
            >
              <img
                src="/heighlight/01.png"
                className=" object-cover h-full w-full"
                alt=""
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className=" flex justify-center items-center bg-[#CCD3FF] w-1/2 rounded-xl "
            >
              <h2 className="text-[24px] font-oswald-bold text-blue-800">
                DATA
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              opacity: 1,
              y: [-20, -5, 0],
            }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className=" w-full max-h-[180px] lg:max-h-[220px] rounded-xl overflow-hidden"
          >
            <img
              src="/heighlight/02.png"
              className=" object-cover h-full w-full"
              alt=""
            />
          </motion.div>
        </div>
        <div className=" flex gap-6">
          <div className=" w-1/2 flex flex-col gap-6">
            <motion.div
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{
                opacity: 1,
                y: [-20, -5, 0],
              }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="w-full h-[310px] rounded-xl overflow-hidden"
            >
              <img
                src="/heighlight/03.png"
                className=" object-fill h-full w-full"
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="flex justify-center items-center bg-[#FFDACC] w-full h-[160px] rounded-xl overflow-hidden"
            >
              <h2 className="text-[24px] font-oswald-bold text-red-800">
                EXPERIENCE
              </h2>
            </motion.div>
          </div>
          <div className=" w-1/2 flex flex-col gap-6">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="flex justify-center items-center bg-[#FFF5CC]  w-full h-[160px] rounded-xl overflow-hidden"
            >
              <h2 className="text-[24px] font-oswald-bold text-yellow-800">
                STRATEGY
              </h2>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{
                opacity: 1,
                y: [-20, -5, 0],
              }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="w-full h-[310px] rounded-xl overflow-hidden"
            >
              <img
                src="/heighlight/04.png"
                className=" object-fill h-full w-full"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div className=" w-full flex flex-col gap-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              opacity: 1,
              y: [-20, -5, 0],
            }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className=" w-full max-h-[180px] lg:max-h-[220px] rounded-xl overflow-hidden"
          >
            <img
              src="/heighlight/06.png"
              className=" object-cover h-full w-full"
              alt=""
            />
          </motion.div>
          <div className="flex w-full gap-6">
            <motion.div
              whileInView="visible"
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{
                opacity: 1,
                y: [-20, -5, 0],
              }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="w-1/2 max-h-[220px] lg:max-h-[250px] rounded-xl overflow-hidden"
            >
              <img
                src="/heighlight/01.png"
                className=" object-cover h-full w-full"
                alt=""
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className=" flex justify-center items-center bg-[#F0CBFE] w-1/2 rounded-xl overflow-hidden "
            >
              <h2 className="text-[24px] font-oswald-bold text-purple-800">
                TECHNOLOGY
              </h2>
            </motion.div>
          </div>
        </div>

        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className=" "
        >
          <h2 className="text-[24px] font-oswald-bold">DATA</h2>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: [-20, -5, 0],
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className=""
        >
          <img
            src="/heighlight/02.png"
            className=" object-fill h-full w-full"
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className=""
        >
          <h2 className="text-[24px] font-oswald-bold">EXPERIENCE</h2>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className=""
        >
          <h2 className="text-[24px] font-oswald-bold">EXPERIENCE</h2>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: [-20, -5, 0],
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className=" "
        >
          <img
            src="/heighlight/04.png"
            className=" object-fill h-full w-full"
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className=" "
        >
          <h2 className="text-[24px] font-oswald-bold">TECHNOLOGY</h2>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: [-20, -5, 0],
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className=" "
        >
          <img
            src="/heighlight/05.png"
            alt=""
            className=" object-fill h-full w-full"
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: [-20, -5, 0],
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className=" "
        >
          <img
            src="/heighlight/06.png"
            alt=""
            className=" object-fill h-full w-full"
          />
        </motion.div> */}
      </div>
    </div>
  );
}

export default Heighlights;
{
  /* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div> */
}
