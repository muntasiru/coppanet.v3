import React from "react";
import Heading from "../../components/ui/heading";
import Grid from "./grid";

function Family() {
  return (
    <div className="lg:py-20">
      {" "}
      <div className="container">
        <Heading subTitle="">Our Global Family</Heading>
        <Grid />
      </div>
    </div>
  );
}

export default Family;
