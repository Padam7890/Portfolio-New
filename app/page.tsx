// app/page.tsx (Homepage)
import React from "react";
import { Metadata } from "next";
import About from "./about/page";

export const metadata: Metadata = {
  title: "Home page",
  description:
    "Empowering developers with cutting-edge web development solutions, tutorials, and resources.",
  keywords: "web development, tutorials, resources, Padam Thapa, Portfolio",
};

const Home = () => {
 
  return (
    <>
      <About />
    </>
  );
};

export default Home;
