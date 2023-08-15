import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div>
      <MotionLink
        className="bg-[#A9D9D4] w-12 h-12 rounded-full text-xl font-medium text-light flex items-center justify-center"
        href="/"
        whileHover={{
          backgroundColor: [
            "#A9D9D4",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#A9D9D4",
          ],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}>
        HH
      </MotionLink>
    </div>
  );
};

export default Logo;
