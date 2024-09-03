"use client";
import React from "react";

import { motion } from "framer-motion";
function Heighlights() {
  return (
    <div className=" container">
      <div className="grid grid-cols-6 grid-rows-6 gap-4 lg:max-h-[500px]">
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
          className=" mx-auto  row-span-3 rounded-md overflow-hidden"
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
          className=" mx-auto w-full row-span-3 bg-purple-300 h-auto rounded-md flex justify-center items-center"
        >
          <h2 className="text-[24px] font-oswald-bold">DATA</h2>
        </motion.div>

        <div className="row-span-4">
          <img
            src="/heighlight/03.png"
            className=" object-fill h-full w-full"
            alt=""
          />
        </div>
        <div className="col-span-2 row-span-3 col-start-1 row-start-4">
          <img
            src="/heighlight/02.png"
            className=" object-fill h-full w-full"
            alt=""
          />
        </div>
        <div className="row-span-2 col-start-3 row-start-5 bg-red-300 flex justify-center items-center rounded-md">
          {/* <img
            src="/heighlight/03.png"
            className=" object-fill h-full w-full"
            alt=""
          /> */}
          <h2 className="text-[24px] font-oswald-bold">EXPERIENCE</h2>
        </div>
        <div className="row-span-2 col-start-4 row-start-1 bg-yellow-100 flex justify-center items-center rounded-md">
          <h2 className="text-[24px] font-oswald-bold">EXPERIENCE</h2>
        </div>
        <div className="row-span-4 col-start-4 row-start-3">
          <img
            src="/heighlight/04.png"
            className=" object-fill h-full w-full"
            alt=""
          />
        </div>
        <div className="row-span-3 col-start-5 row-start-4 bg-green-100 flex justify-center items-center rounded-md">
          <h2 className="text-[24px] font-oswald-bold">TECHNOLOGY</h2>
        </div>
        <div className="col-span-2 row-span-3 col-start-5 row-start-1">
          <img
            src="/heighlight/05.png"
            alt=""
            className=" object-fill h-full w-full"
          />
        </div>
        <div className="row-span-3 col-start-6 row-start-4">
          <img
            src="/heighlight/06.png"
            alt=""
            className=" object-fill h-full w-full"
          />
        </div>
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
