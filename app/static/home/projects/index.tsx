"use client";
import React from "react";
import Heading from "../../components/ui/heading";
import { ProjectCard } from "./project-card";
import { ProjectsModal } from "./project-modal";

function Projects({}) {
  return (
    <div className=" bg-slate-50 py-20 mt-10">
      <div className="container ">
        <Heading subTitle=" Our technology products are designed to streamlining operations and enhancing user experiences across sectors.">
          Our Products
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 ">
          <ProjectCard
            title="Soowgood"
            subTitle="Medical and Healthcare"
            link="soowgood.com"
            img="/projects/soowgood.png"
          />
          <ProjectCard
            title="DoorApp"
            subTitle="Luggage Storage"
            link="doorapp.com"
            img="/projects/door.png"
          />
          <ProjectCard
            title="Manager Travel"
            subTitle="Travel"
            link="managertravel.com.com"
            img="/projects/manager.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
