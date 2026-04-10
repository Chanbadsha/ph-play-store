import Image from "next/image";
import heroImg from "@/assets/images/hero.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content pb-0 xl:pt-20 pt-10  text-center">
        <div className="  gap-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold">
            We Build <br />
            <span className="bg-linear-to-r from-[#6832e4] to-[#9f62f2] text-transparent bg-clip-text">
              Productive 
            </span>
            Apps
          </h1>
          <p className="xl:py-4 text-xs md:text-base md:py-2 max-w-3xl xl:max-w-4xl">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn yo ur ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex gap-3    ">
            <button className="btn flex gap-1 items-center ">
              <IoLogoGooglePlaystore />
              Google Play
            </button>
            <button className="btn flex gap-1 items-center ">
              <FaAppStoreIos />
              App Store
            </button>
          </div>
          <div className="">
            <Image
              src={heroImg}
              alt="Hero Img "
              width={600}
              height={600}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
