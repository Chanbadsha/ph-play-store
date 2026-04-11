import apps from "@/../public/data.json";
import AppCard from "../shared/AppCard/AppCard";
import Link from "next/link";
import PrimaryBtn from "@/app/utils/PrimaryBtn";

const TrendingApps = () => {
  return (
    <div className="container mx-auto text-center my-6 lg:my-12">
      <h2 className="font-semibold text-2xl lg:text-4xl ">Trending Apps</h2>
      <p className="text-xs md:text-base">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid px-4 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {apps.slice(0, 8).map((app, ind) => (
          <AppCard key={ind} app={app} />
        ))}
      </div>
      <Link href={"/apps"} className="flex mt-20 justify-center">
        <PrimaryBtn text={"Show All"}></PrimaryBtn>
      </Link>
    </div>
  );
};

export default TrendingApps;
