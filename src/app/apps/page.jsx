"use client";
import { useState } from "react";
import AppCard from "../components/shared/AppCard/AppCard";
import apps from "@/../public/data.json";
const AppsPage = () => {
  const [appsInfo, setAppsInfo] = useState(apps);
  const handleSearchApp = (e) => {
    const searchInp = e.target.value;
    if (!searchInp.length > 0) {
      setAppsInfo(apps);
    } else {
      const searchApps = appsInfo.filter((app) =>
        app.title.toLowerCase().includes(searchInp.toLowerCase()),
      );
      setAppsInfo(searchApps);
    }
  };
  return (
    <div className="bg-gray-100">
      {" "}
      <div className="container  mx-auto text-center my-6 lg:my-12">
        <h2 className="font-semibold text-2xl md:text-4xl lg:text-5xl  mb-2">
          Our All Applications
        </h2>
        <p className="text-xs md:text-base">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex items-center justify-between md:text-2xl font-semibold mt-12 mb-2 px-4 lg:px-8">
          <p>({appsInfo.length}) Apps Found</p>
          <input
            type="text"
            className="input max-w-48"
            placeholder="Search Apps"
            onChange={handleSearchApp}
          />
        </div>
        <div className="grid px-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {appsInfo.map((app, ind) => (
            <AppCard key={ind} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsPage;
