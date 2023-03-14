import React from "react";
import Body from "../components/Body";
import Contact from "../components/Contact";

function contact() {
  return (
    <div>
      <Body
        heading="Contact"
        message="Submit the form below for more work and quotes"
      />
      <Contact />
    </div>
  );
}

export default contact;
