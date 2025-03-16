"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TickerTapeProps {
  text: string;
  icon: ReactNode;
  rotation: number;
}

const TickerTape = ({ text, icon, rotation }: TickerTapeProps) => {
  return (
    <div
      className="absolute w-full pointer-events-none"
      style={{
        transform: `rotate(${rotation}deg)`,
        top: rotation > 0 ? "50%" : "50%",
      }}
    >
      <div className="flex w-max mt-52 shadow-[0_0_20px_rgba(59,130,246,0.8)]">
        {/* Original tape */}
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 20, // Adjust speed here
          }}
        >
          {Array(10).fill(text).map((item, i) => (
            <span
              key={i}
              className="flex gap-2 text-black bg-white font-bold px-8 py-2 whitespace-nowrap"
            >
              {icon} {item}
            </span>
          ))}
        </motion.div>

        {/* Cloned tape */}
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 20, // Same speed as original
          }}
          style={{
            marginLeft: "0rem", // Small gap to avoid overlap
          }}
        >
          {Array(10).fill(text).map((item, i) => (
            <span
              key={`clone-${i}`}
              className="flex gap-2 text-black bg-white font-bold px-8 py-2 whitespace-nowrap"
            >
              {icon} {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TickerTape;
