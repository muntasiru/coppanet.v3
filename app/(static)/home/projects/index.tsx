"use client";
import React from "react";
import Heading from "../../(components)/ui/heading";
import { ProjectCard } from "./project-card";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="bg-white py-10 md:py-20 mt-10 overflow-x-hidden">
      <div className="container">
        <Heading subTitle=" Our data-driven technology solutions streamline business operations, harnessing automation and AI to deliver seamless user experiences across industries.">
          Our Products
        </Heading>
        <div className=" mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="w-full"
          >
            <ProjectCard
              title="Soowgood"
              subTitle="Medical and Healthcare"
              link="soowgood.com"
              img="/projects/soowgood.png"
            />
          </motion.div>

          <motion.div
            viewport={{ once: false, amount: 0.5 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="w-full"
          >
            <ProjectCard
              title="DoorApp"
              subTitle="Luggage Storage"
              link="doorapp.com"
              img="/projects/door.png"
            />
          </motion.div>

          <motion.div
            viewport={{ once: false, amount: 0.5 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="w-full"
          >
            <ProjectCard
              title="Manager Travel"
              subTitle="Travel"
              link="managertravel.com"
              img="/projects/manager.png"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
