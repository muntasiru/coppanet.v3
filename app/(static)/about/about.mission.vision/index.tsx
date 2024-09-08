"use client";
import { motion } from "framer-motion";
import React from "react";

function MissionVision() {
  return (
    <div className="flex flex-col items-center space-y-8 bg-gray-50 py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <motion.div
          whileInView={{
            opacity: 1,
            x: [-200, -5, 0],
          }}
          viewport={{ once: false, amount: 0.2 }}
          initial={{
            opacity: 0,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.6, 0.0, 0.2, 1],
          }}
          className=" flex flex-col items-center text-center border-2  p-6 rounded-lg"
        >
          <div className="mb-4">
            <img
              src="/about/vision.svg"
              alt="Vision Image"
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold font-oswald-bold mb-4">
            Our Vision
          </h2>
          <p className="text-lg font-medium mb-2">
            Empowering Businesses to Grow Through Innovative Digital Platforms.
          </p>
          <p className="text-gray-700">
            To drive client business growth and elevate overall performance by
            developing innovative digital platforms that enhance operational
            efficiency, optimize user experiences, and empower businesses to
            reach their full potential.
          </p>
        </motion.div>

        <motion.div
          whileInView={{
            opacity: 1,
            x: [200, -5, 0],
          }}
          viewport={{ once: false, amount: 0.2 }}
          initial={{
            opacity: 0,
            x: 200,
          }}
          transition={{
            duration: 1,
            ease: [0.6, 0.0, 0.2, 1],
          }}
          className=" flex flex-col items-center text-center border-2  p-6 rounded-lg"
        >
          <div className="mb-4">
            <img
              src="/about/mission.svg"
              alt="Mission Image"
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold font-oswald-bold mb-4">
            Our Mission
          </h2>
          <p className="text-lg font-medium mb-2">
            Accelerating Business Success by Enabling Them with Cutting-Edge
            Digital Solutions.
          </p>
          <p className="text-gray-700">
            To be the catalyst for business success across diverse industries,
            recognized for our ability to deliver cutting-edge solutions that
            not only improve efficiency but also accelerate growth and maximize
            performance for our clients.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
export default MissionVision;
