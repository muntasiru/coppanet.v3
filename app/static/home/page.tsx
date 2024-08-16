import React from "react";
import { Banner } from "./banner";
import Heighlights from "./highlights";
import Projects from "./projects";
import Expertise from "./expertise";
import { Infinity } from "./infinity.scroll";
import HireTeam from "./hire.team";
import Testimonials from "./testimonial";
import Family from "./family";

function HomePage() {
  return (
    <div>
      <Banner />
      <Heighlights />
      <Projects />
      <Expertise />
      <Infinity />
      <HireTeam />
      <Family />
      <Testimonials />
    </div>
  );
}

export default HomePage;
