import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import videoImage from "../assets/images/video-image.jpeg";

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
            {/* Background Skincare Image with Parallax and Hover Zoom */}
            <motion.div 
                style={{ y: yBg }}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                <motion.img 
                    src={videoImage} 
                    alt="Skincare Hero Background" 
                    className="w-full h-full object-cover brightness-[0.95] select-none"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1.05, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </motion.div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none" />

            {/* Glassmorphic Smartphone Frame */}
            <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                    duration: 1.2, 
                    delay: 0.2, 
                    ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="relative z-10 w-[240px] h-[440px] sm:w-[280px] sm:h-[510px] md:w-[320px] md:h-[580px] rounded-[36px] sm:rounded-[44px] border-[1.5px] border-white/25 bg-white/5 backdrop-blur-[5px] flex flex-col items-center justify-center p-6 shadow-2xl transition-shadow duration-300 select-none cursor-pointer"
            >
                {/* Smartphone Speaker/Camera Notch Detail */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3 rounded-full bg-white/15 backdrop-blur-[1px] border border-white/10" />

                {/* Smartphone Side Buttons Detail */}
                <div className="absolute -left-[2px] top-24 w-[2px] h-10 bg-white/30 rounded-r" />
                <div className="absolute -left-[2px] top-[144px] w-[2px] h-12 bg-white/30 rounded-r" />
                <div className="absolute -right-[2px] top-28 w-[2px] h-16 bg-white/30 rounded-l" />

                {/* Logo "envís" */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-white text-3xl sm:text-4xl md:text-5xl font-light tracking-wide lowercase opacity-95 select-none"
                    style={{ fontFamily: "sans-serif" }}
                >
                    envís
                </motion.div>

                {/* Monospaced side details - "Nature. Nourish. Glow." */}
                <div className="absolute bottom-8 right-6 text-right flex flex-col gap-[2px]">
                    {textLines.map((line, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 + idx * 0.15, duration: 0.5 }}
                            className="font-mono text-[9px] sm:text-[10px] md:text-[11px] font-medium leading-none tracking-wider text-white/80 uppercase"
                        >
                            {line}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}