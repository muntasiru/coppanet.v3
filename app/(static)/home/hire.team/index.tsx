import React from "react";
import Heading from "../../(components)/ui/heading";
import { Teams } from "./teams";

function HireTeam() {
  return (
    <div className="py-10 3xl:py-20 bg-gray-50 overflow-x-hidden">
      <div className="container">
        <Heading subTitle="Need to streamline your business with innovative tech solutions? Coppanet is here to help! Our expert team leverages automation and AI to boost efficiency and improve user experience. No complex processes—just 3 simple steps.">
          In 3 Easy Steps, <br /> Hire Our Team
        </Heading>
        <Teams />
      </div>
    </div>
  );
}

export default HireTeam;
