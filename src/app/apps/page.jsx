"use client";
import { useState } from "react";
import AppCard from "../components/shared/AppCard/AppCard";
import apps from "@/../public/data.json";
import SectionHedding from "../utils/SectionHedding";
import NoAppFound from "../components/shared/NoAppFound/NoAppFound";
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
        <SectionHedding
          title={"Our All Applications"}
          subtitle={
            "Explore All Apps on the Market developed by us. We code for Millions"
          }
        />
        <div className="flex pb-6 items-center justify-between md:text-2xl font-semibold mt-12 mb-2 px-4 lg:px-8">
          <p>({appsInfo.length}) Apps Found</p>
          <input
            type="text"
            className="input max-w-48"
            placeholder="Search Apps"
            onChange={handleSearchApp}
          />
        </div>
        <div
          className={`${appsInfo.length > 0 ? "grid" : "block"} px-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 `}
        >
          {appsInfo.length > 0 ? (
            appsInfo.map((app, ind) => <AppCard key={ind} app={app} />)
          ) : (
            <NoAppFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppsPage;
