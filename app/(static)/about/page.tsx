import React from "react";
import AboutBanner from "./about.banner";
import MissionVision from "./about.mission.vision";
import Values from "./about.values";
import { Infinity } from "../home/infinity.scroll";
import CompanyActivities from "./about.company.activity";
import TeamSection from "./about.team";
import Testimonials from "../home/testimonial";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Coppanet | About</title>
        <meta
          name="description"
          content="This is a description of my awesome Next.js app"
        />

        <meta property="og:title" content="My Awesome Next.js App" />
        <meta
          property="og:description"
          content="Check out my amazing Next.js app!"
        />
      </Head>
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
