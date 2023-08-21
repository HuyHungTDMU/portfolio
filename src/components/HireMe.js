import React from "react";
import {SvgPhone} from "./Icons";
import Link from "next/link";

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 h-24 flex justify-center items-center overflow-hidden">
            <div className="items-center flex justify-center">
                <Link
                    href="mailto:huyhung.tdm@gmail.com"
                    className="p-3 bg-dark animate-bounce hover:bg-transparent hover:text-dark hover:border-dark border text-light flex items-center justify-center border-solid text-xs shadow-md rounded-full">
                    <SvgPhone className="bg-purple-800"/>
                </Link>
            </div>
        </div>
    );
};

export default HireMe;
