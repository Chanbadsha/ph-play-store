import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  return (
    <div className="card p-4 bg-base-100  shadow-sm">
      <figure className="bg-gray-100 rounded-lg py-8">
        <Image
          className="rounded-xl"
          src={image}
          alt={title}
          width={200}
          height={200}
        ></Image>
      </figure>
      <div className="card-body pb-0">
        <h2 className="card-title lg:text-xl mb-2 ">{title}</h2>

        <div className="card-actions justify-between ">
          <div className="flex  items-center gap-1 text-base text-green-500 py-2 px-4 rounded-lg bg-green-50">
            <MdDownload />
            {downloads}
          </div>
          <div className="flex  items-center gap-1 text-base text-green-500 py-2 px-4 rounded-lg bg-green-50">
            <FaRegStar />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
