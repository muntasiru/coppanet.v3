import React from "react";
import ServiceBanner from "./service.banner";
import ServiceList from "./service.list";
import EffectiveSolution from "./effective.solution";
import ServiceCards from "./service.cards";

function Service() {
  return (
    <div>
      <ServiceBanner />
      {/* <ServiceList /> */}
      <ServiceCards />
      <EffectiveSolution />
    </div>
  );
}

export default Service;
