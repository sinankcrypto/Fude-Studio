import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HERO_CONTENT } from "../constants/navbar";

export default function Video() {
    const containerRef = useRef(null);

    // Parallax scroll effect for background
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    const textLines = ["Nature.", "Nourish.", "Glow."];

    return (
        <section
            ref={containerRef}
            className="w-full relative overflow-hidden bg-[#759560] min-h-[550px] sm:min-h-[650px] md:min-h-[750px] lg:min-h-[820px] flex items-center justify-center"
        >
            {/* Background Skincare Video with Parallax and Hover Zoom */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                <motion.video
                    src={HERO_CONTENT.hero_video_url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onEnded={(e) => e.target.play()}
                    className="w-full h-full object-cover brightness-[0.95] select-none"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1.05, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </motion.div>
        </section>
    );
}