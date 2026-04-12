import Image from "next/image";
import React from "react";
import { FaDownload, FaStar, FaTrash } from "react-icons/fa";

const InstalledCard = ({ app, handleDelete }) => {
  const {
    companyName,
    id,
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
    <div className="bg-white px-4 py-4 rounded-md xl:pl-8 pr-12 ">
      <div className="flex items-center  justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full">
            <Image
              src={image}
              alt={title}
              className="rounded-full"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col text-start">
            <h1 className="text-xl mb-2">{title}</h1>
            <div className="text-xs flex gap-4 uppercase font-semibold opacity-60">
              <span className="text-[#10b37f] flex items-center gap-0.5">
                <FaDownload /> {downloads}
              </span>
              <span className="text-[#ff972f] flex items-center gap-0.5">
                <FaStar />
                {ratingAvg}
              </span>
              <span>{size ? size : 0} MB</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleDelete(id)}
          className="bg-gray-200 p-3 rounded-full hover:text-red-500 hover:bg-red-300"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default InstalledCard;
