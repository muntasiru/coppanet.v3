"use client";
import React from "react";
import Heading from "../../(components)/ui/heading";
import { ProjectCard } from "./project-card";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="bg-slate-50 py-20 mt-10">
      <div className="container">
        <Heading subTitle=" Our technology products are designed to streamlining operations and enhancing user experiences across sectors.">
          Our Products
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
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
