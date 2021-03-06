import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/table-background.jpg";
import AboutDisplay from "../components/AboutDisplay/AboutDisplay";

function About() {
  return (
    <>
      <Header
        title="About us"
        image={headerImage}>
        A Bakery Paradise is an establishment that produces and sells flour-based food baked in an oven such as bread, cookies, cakes, donuts, pastries, and pies. Some retail bakeries are also categorized as cafés, serving coffee and tea to customers who wish to consume the baked goods on the premises.
      </Header>
      <AboutDisplay />
    </>
  );
}

export default About;