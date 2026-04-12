"use client";

import { useEffect, useState } from "react";
import SectionHedding from "../utils/SectionHedding";
import GetStoredData from "../lib/GetStoredData";
import InstalledCard from "../components/installationPage/InstalledCard";
import RemoveStoredData from "../lib/RemoveStoredData";
import NoAppFound from "../components/shared/NoAppFound/NoAppFound";
import NoAppInstall from "../components/shared/NoAppInstalle/NoAppInstall";
import toast from "react-hot-toast";

const InstallationPage = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [selected, setSelected] = useState("Sort By");
  const [originalApps, setOriginalApps] = useState([]);

  useEffect(() => {
    const data = GetStoredData("installedApps");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInstalledApps(data);
    setOriginalApps(data); // ✅ keep backup
  }, []);

  const handleFilter = (value) => {
    setSelected(value);

    let sortedData = [...originalApps]; // always from original

    if (value === "Rating") {
      sortedData.sort((a, b) => b.ratingAvg - a.ratingAvg);
    }

    if (value === "Page") {
      sortedData.sort((a, b) => b.size - a.size);
    }

    setInstalledApps(sortedData);
  };

  const handleDelete = (appId) => {
    const filterData = RemoveStoredData("installedApps", appId);

    setInstalledApps(filterData);
    toast.error(`Successfully removed from installed apps 🗑️`);
  };

  return (
    <div className="bg-base-300 flex-1">
      <div className="container mx-auto text-center mt-12">
        <SectionHedding
          title={"Your Installed Apps"}
          subtitle={"Explore All Trending Apps on the Market developed by us"}
        />

        {/* Filter Tab */}
        <div className="flex mx-12 justify-between items-center mt-12">
          <h6 className="font-semibold text-xl">
            ({installedApps.length}) Apps Found
          </h6>

          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">
              {selected}
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a onClick={() => handleFilter("Page")}>Page</a>
              </li>
              <li>
                <a onClick={() => handleFilter("Rating")}>Rating</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Cards */}
        <div className="flex lg:px-12 flex-col gap-8 mb-12 mt-6">
          {installedApps.length > 0 ? (
            installedApps.map((app) => (
              <InstalledCard
                handleDelete={handleDelete}
                app={app}
                key={app.id}
              />
            ))
          ) : (
            <NoAppInstall />
          )}
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;
