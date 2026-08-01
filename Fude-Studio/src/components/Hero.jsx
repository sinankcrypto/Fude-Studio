import { motion } from "motion/react";
import { HERO_CONTENT } from "../constants/navbar";

export default function Hero() {
    return (
        <section className="w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0 pt-16 pb-24 md:pt-20 md:pb-32 bg-[#F0F0F0]">
            <div className="w-full lg:col-span-7 lg:row-start-1 flex flex-col">
                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.610, 0.355, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-medium tracking-tighter leading-[1.0] uppercase text-[#2A2A2A]"
                >
                    A digital design studio<br className="hidden sm:inline" /> driven by research<br className="hidden md:inline" /> & strategy
                </motion.h1>
            </div>

            <div className="w-full lg:col-span-4 lg:col-start-9 lg:row-start-2 flex flex-col lg:items-end mt-4 lg:mt-0">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.610, 0.355, 1] }}
                    className="w-full max-w-[420px]"
                >
                    <p className="text-[11px] sm:text-xs leading-relaxed uppercase tracking-widest text-[#2A2A2A]/85">
                        {HERO_CONTENT.subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}  