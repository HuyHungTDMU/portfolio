import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    i: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function AnimatedText({ text, className = "" }) {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-4xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate">
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={index}
            className="inline-block">
            {word} &nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
