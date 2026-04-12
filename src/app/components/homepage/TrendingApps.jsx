import apps from "@/../public/data.json";
import AppCard from "../shared/AppCard/AppCard";
import Link from "next/link";
import PrimaryBtn from "@/app/utils/PrimaryBtn";
import SectionHedding from "@/app/utils/SectionHedding";

const TrendingApps = () => {
  return (
    <div className="container mx-auto text-center my-6 lg:my-12">
      <SectionHedding
        title={"Trending Apps"}
        subtitle={"  Explore All Trending Apps on the Market developed by us"}
      />
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
