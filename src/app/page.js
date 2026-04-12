import React from "react";
import Hero from "./components/homepage/Hero";
import StatesSection from "./components/homepage/States";
import TrendingApps from "./components/homepage/TrendingApps";
export const metadata = {
  title: "PH Play Store",
  description:
    "A modern app store where you can explore, install, and manage apps with ease.",
};
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
