"use client";

import toast from "react-hot-toast";
import GetStoredData from "./GetStoredData";
import saveDataToLS from "./saveDataToLS";
import { useState } from "react";

const InstallBtn = ({ size = 100, appInfo }) => {
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);
  const handleInstallationBtn = () => {
    setInstalling(true);
    const installedApps = GetStoredData("installedApps");
    const isInstalled = installedApps.find((app) => app.id == appInfo.id);
    if (isInstalled) {
      setInstalled(true);
      setInstalling(false);
      toast(`${appInfo.title} is already installed`, {
        icon: "⚠️",
      });
    }

    if (!isInstalled) {
      setTimeout(() => {
        const installedApp = [...installedApps, appInfo];
        saveDataToLS("installedApps", installedApp);
        toast.success(`${appInfo.title} installed successfully`);
        setInstalling(false);
        setInstalled(true);
        return;
      }, 1000);
    }
  };

  return (
    <div>
      <button
        onClick={handleInstallationBtn}
        disabled={installing}
        className="bg-[#00d390] disabled:bg-gray-400 px-4 py-2 text-white rounded-md mt-6"
      >
        {installed
          ? `InstalledApp`
          : installing
            ? "Installing..."
            : `Install Now (${size} MB)`}
      </button>
    </div>
  );
};

export default InstallBtn;
