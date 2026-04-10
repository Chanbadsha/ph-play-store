import React from "react";
import Hero from "./components/homepage/Hero";
import StatesSection from "./components/homepage/States";
import TrendingApps from "./components/homepage/TrendingApps";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <StatesSection />
      <TrendingApps />
    </div>
  );
};

export default HomePage;
