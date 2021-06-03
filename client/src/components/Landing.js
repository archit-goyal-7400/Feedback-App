import React from "react";
import Testimonial from "./testimonial";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Understand Your Customers Needs</h1>
      <h5 style={{ marginBottom: "90px" }}>
        Collect feedback from people easily and improve your business . We
        provide best ways to get feedback from the users.
      </h5>
      <h1>Testimonials</h1>
      <Testimonial />
    </div>
  );
};

export default Landing;
