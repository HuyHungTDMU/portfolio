import React from "react";
import { SvgProfile } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex justify-center items-center overflow-hidden">
      <div className="w-32 h-auto relative items-center flex justify-center">
        <SvgProfile className="animate-spin animate-spin-slow" />

        <Link
          href="mailto:huyhung.tdm@gmail.com"
          className="absolute bg-dark hover:bg-transparent hover:text-dark hover:border-dark border text-light left-1/2 top-1/2 w-14 h-14 flex items-center justify-center border-solid text-xs -translate-x-1/2 -translate-y-1/2 shadow-md rounded-full">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
