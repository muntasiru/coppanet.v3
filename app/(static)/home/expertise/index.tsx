import React from "react";
import Heading from "../../(components)/ui/heading";
import { ExpertiseCard } from "./expertise-card";

function Expertise() {
  return (
    <div className="lg:py-10 3xl:py-20">
      <div className="container">
        <Heading subTitle="At Coppanet, innovation drives everything we do. Our technology products are designed to streamlining operations and enhancing user experiences across sectors.">
          {" "}
          Our Expertise
        </Heading>
        <div>
          <ExpertiseCard
            link=""
            subTitle=""
            img="/projects/door.png"
            title="Education Platform Solution"
          />
        </div>
      </div>
    </div>
  );
}

export default Expertise;
