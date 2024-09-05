"use client";
import React from "react";
import Heading from "../../(components)/ui/heading";
import { ExpertiseCard } from "./expertise-card";
import { motion } from "framer-motion";

function Expertise() {
  return (
    <div className="py-10 3xl:py-20 ">
      <div className="container">
        <Heading subTitle="At Coppanet, innovation drives everything we do. Our technology products are designed to streamlining operations and enhancing user experiences across sectors.">
          {" "}
          Our Expertise
        </Heading>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          <ExpertiseCard />
        </motion.div>
      </div>
    </div>
  );
}

export default Expertise;
