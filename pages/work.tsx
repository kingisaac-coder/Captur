import React from "react";
import Body from "../components/Body";
import Portifolio from "../components/Portifolio";

function work() {
  return (
    <div>
      <Body
        heading="My Work"
        message="This is some of my recent work traveling the world"
      />
      <Portifolio />
    </div>
  );
}

export default work;
