// app/page.tsx (Homepage)
import React from "react";
import Herosection from "@/components/HomePage/Herosection";
import { Metadata } from "next";
import SnakeGame from "@/components/Game/SnakeGame";

export const metadata:Metadata = {
  title: "Home page",
  description:
    "Empowering developers with cutting-edge web development solutions, tutorials, and resources.",
  keywords: "web development, tutorials, resources, Padam Thapa, Portfolio",

};

const Home =() =>{

  return (
    <>
      <Herosection />
      <SnakeGame/>
    </>
  );
}

export default Home;
