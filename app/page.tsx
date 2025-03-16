"use client";

import BeamBadge from "@/components/beamBadge";
import Socials from "@/components/socialsDock";
import TickerTape from "@/components/tickerTape";
import { Construction, Sparkle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Pixelify_Sans } from "next/font/google"

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["cyrillic"]
});

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative">

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-20 mb-36 md:gap-5 md:mb-28 z-10 ">
        <Socials/>
        <BeamBadge/>
          <h1 className={`text-5xl md:text-9xl text-white mb-12 ${pixelifySans.className}`}>
            Blockchain Orbit
          </h1>
        </div>

        
        {/* Background Video */}
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover filter brightness-50 contrast-125"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/black-hole.mp4" type="video/mp4" />
        </motion.video>

        <div className="">
        <TickerTape text="Under Construction" icon={<Construction/>} rotation={isSmallScreen ? -15 : -8} />
        <TickerTape text="Coming Soon" icon={<Sparkle size={16}/>} rotation={isSmallScreen ? 15 : 8} />
        </div>

    </div>
  );
}
