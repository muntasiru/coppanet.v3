import React from "react";
import AboutBanner from "./about.banner";
import MissionVision from "./about.mission.vision";
import Values from "./about.values";
import { Infinity } from "../home/infinity.scroll";
import CompanyActivities from "./about.company.activity";
import TeamSection from "./about.team";
import Testimonials from "../home/testimonial";

function About() {
  return (
    <>
      <AboutBanner />
      <MissionVision />
      <Values />
      <Infinity />
      <CompanyActivities />
      <TeamSection />
      <Testimonials />
    </>
  );
}

export default About;
