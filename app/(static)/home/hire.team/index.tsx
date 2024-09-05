import React from "react";
import Heading from "../../(components)/ui/heading";
import { Teams } from "./teams";

function HireTeam() {
  return (
    <div className="lg:py-10 3xl:py-20 bg-gray-50 overflow-x-hidden">
      <div className="container">
        <Heading subTitle="Make a big effect in the web market without having to go through the drawn-out employment process by utilizing the expertise of the top website expert. Finding web designers and developers has never been simpler or faster than now.">
          In 3 Easy Steps, <br /> Hire Our Team
        </Heading>
        <Teams />
      </div>
    </div>
  );
}

export default HireTeam;
