import { motion } from "motion/react";
import { HERO_CONTENT } from "../constants/navbar";

export default function Hero() {
  return (
    <section
      id="about"
      className="w-full bg-[#F0F0F0] px-6 lg:px-[60px] xl:px-20 2xl:px-28 3xl:px-36 4xl:px-44 pt-10 pb-12 lg:pt-[56px] lg:pb-[48px] xl:pt-20 xl:pb-16 2xl:pt-28 2xl:pb-24 3xl:pt-36 3xl:pb-32 4xl:pt-48 4xl:pb-40"
    >
      <div className="w-full flex flex-col gap-8 lg:gap-[28px] xl:gap-10 2xl:gap-14 3xl:gap-20 4xl:gap-28">
        {/* Main Heading: Matches 966px Figma width */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full max-w-[966px] xl:max-w-[1100px] 2xl:max-w-[1300px] 3xl:max-w-[1600px] 4xl:max-w-[2000px]"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] xl:text-[72px] 2xl:text-[84px] 3xl:text-[98px] 4xl:text-[120px] font-normal uppercase leading-[1.08] tracking-[-0.02em] text-[#2A2A2A]">
            {HERO_CONTENT.title}
          </h1>
        </motion.div>

        {/* Subtitle Paragraph: Starts at exact same position (56%) as "ABOUT US" in Navbar */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full flex justify-start md:ml-[56%] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[480px] 2xl:max-w-[560px] 3xl:max-w-[700px] 4xl:max-w-[950px]"
        >
          <p className="w-full text-xs sm:text-sm lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[22px] 4xl:text-[26px] font-normal uppercase leading-[1.3] tracking-tight lg:tracking-[-0.03em] text-[#2A2A2A]">
            {HERO_CONTENT.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}