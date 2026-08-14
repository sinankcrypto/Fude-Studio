import { motion } from "motion/react";
import { HERO_CONTENT } from "../constants/navbar";

export default function Hero() {
  return (
    <section
      id="about"
      className="w-full bg-[#F0F0F0] px-6 lg:px-[60px] pt-10 pb-12 lg:pt-[56px] lg:pb-[48px]"
    >
      <div className="mx-auto max-w-[1320px] flex flex-col gap-8 lg:gap-[28px]">
        {/* Main Heading: Matches 966px Figma width */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full max-w-[966px]"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-normal uppercase leading-[1.08] tracking-[-0.02em] text-[#2A2A2A]">
            {HERO_CONTENT.title}
          </h1>
        </motion.div>

        {/* Subtitle Paragraph: Starts at exact same position (56%) as "ABOUT US" in Navbar */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full flex justify-start lg:ml-[56%] lg:max-w-[580px]"
        >
          <p className="w-full text-xs sm:text-sm lg:text-[15px] font-normal uppercase leading-[1.3] tracking-tight lg:tracking-[-0.03em] text-[#2A2A2A]">
            {HERO_CONTENT.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}