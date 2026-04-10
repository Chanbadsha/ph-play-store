"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.png";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const pathName = usePathname();

  const links = (
    <>
      <li>
        <Link
          className={`mr-2 text-lg ${pathName === "/" ? "text-[#864cec] border-b border-b-[#864cec]" : ""}`}
          href={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`mr-2 text-lg ${pathName === "/apps" ? "text-[#864cec] border-b border-b-[#864cec]" : ""}`}
          href={"/apps"}
        >
          Apps
        </Link>
      </li>
      <li>
        <Link
          className={`mr-2 text-lg ${pathName === "/installation" ? "text-[#864cec] border-b border-b-[#864cec]" : ""}`}
          href={"/installation"}
        >
          Installation
        </Link>
      </li>
    </>
  );
  return (
    <nav className=" bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center ">
            <Image src={logo} alt="Hero Logo" width={40} height={40}></Image>
            <span className="font-bold uppercase text-xl text-[#864cec]">
              Hero.io
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            className="flex items-center gap-1 md:text-lg  border px-4 rounded-lg text-white font-semibold bg-linear-to-r from-[#6832e4] to-[#9f62f2] py-2"
            href={"/"}
          >
            <FaGithub />
            Contribute
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
