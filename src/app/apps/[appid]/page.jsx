import apps from "@/../public/data.json";
import BarCharts from "@/app/utils/BarCharts";

import Image from "next/image";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";

const AppDetails = async ({ params }) => {
  const { appid } = await params;
  const app = apps.find((appData) => appData.id == appid);
  const {
    companyName,
    downloads,
    description,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
  } = app;
  return (
    <div className="flex-1 bg-base-200 px-4 lg:px-0 ">
      <div className="container mx-auto">
        <div className="hero flex border-b pb-12 pt-16 ">
          <div className="flex gap-12 justify-center items-center w-full flex-col lg:flex-row">
            <Image
              className="bg-white p-6 rounded-lg"
              src={image}
              alt="title"
              height={300}
              width={300}
            ></Image>
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold">
                {title}
              </h1>
              <p className="py-6 font-semibold">
                Developed by{" "}
                <span className="text-[#6d37e5]"> {companyName}</span>
              </p>

              <div className="flex justify-center lg:justify-start text-xl lg:text-3xl gap-12 border-t pt-6 rounded-none w-full">
                <div className=" flex gap-1 flex-col  items-start justify-center">
                  <span className="text-2xl lg:text-4xl text-green-400 ">
                    <IoMdDownload />
                  </span>
                  <div className="stat-title">Downloads</div>
                  <div className="stat-value text-xl lg:text-3xl">
                    {downloads}
                  </div>
                </div>

                <div className=" flex gap-1 flex-col  items-start justify-center">
                  <span className="text-2xl lg:text-4xl text-[#ff8811] ">
                    <FaStarHalfAlt />
                  </span>
                  <div className="stat-title">Average Ratings</div>
                  <div className="stat-value text-xl lg:text-3xl">
                    {ratingAvg}
                  </div>
                </div>
                <div className=" flex gap-1 flex-col  items-start justify-center">
                  <span className="text-2xl lg:text-4xl text-[#6d37e5] ">
                    <TfiWrite />
                  </span>
                  <div className="stat-title">Total Reviews</div>
                  <div className="stat-value text-xl lg:text-3xl">
                    {reviews}
                  </div>
                </div>
              </div>
              <button className="bg-[#00d390] px-4 py-2 text-white rounded-md mt-6">
                Install Now ({size}MB)
              </button>
            </div>
          </div>
        </div>

        {/* Ratings Section */}
        <div className="flex mt-4  flex-col">
          <span className="font-semibold ">Ratings</span> <br />
          <BarCharts data={ratings} />
        </div>

        {/* Description Section */}
        <p className="whitespace-pre-line mt-2 leading-7 text-gray-700">
          <span className="font-semibold">Description</span> <br />{" "}
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
