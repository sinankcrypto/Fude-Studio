import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { pageContent, projects } from "../constants/portfolio";

const allImages = projects.map((project) => project.image);

function ProjectCard({ project, index }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(index % allImages.length);

    useEffect(() => {
        // Stagger the intervals so cards do not transition simultaneously
        const startTimeout = setTimeout(() => {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
            }, 4000);
            return () => clearInterval(interval);
        }, index * 400);

        return () => clearTimeout(startTimeout);
    }, [index]);

    const currentImage = allImages[currentImageIndex];

    return (
        <div className="group relative aspect-[1.72/1] overflow-hidden w-full bg-neutral-200">
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt={`${project.title} project preview`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </AnimatePresence>
        </div>
    );
}

export default function Portfolio() {
    return (
        <section className="min-h-screen bg-[#f3f2f0] px-6 py-12 text-[#2A2A2A] sm:px-10 sm:py-16 lg:px-[4vw] lg:py-[7.1vw]" id="portfolio">
            <div className="mx-auto max-w-[1440px]">
                <div className="mb-16 grid gap-10 md:grid-cols-[1.04fr_0.96fr] md:gap-16 lg:mb-[7.1vw] lg:gap-[9vw]">
                    <div>
                        <h1 className="max-w-[620px] font-heading text-[48px] font-[48px] leading-[1.2] tracking-[-0.065em] uppercase text-[#2A2A2A]">
                            {pageContent.heading.map((line) => (
                                <span className="block" key={line}>
                                    {line}
                                </span>
                            ))}
                        </h1>
                    </div>
                    <div className="flex flex-col justify-end md:pb-1 pr-[10%] font-body pt-[5%]">
                        <p className="mb-7 text-[12px] leading-[1.2] text-[#6d6b67] sm:text-[16px] ">
                            {pageContent.description}
                        </p>
                        <button
                            type="button"
                            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                            className="group flex w-fit items-center tracking-tight gap-3 rounded-full bg-[#1b1b1b] px-4 py-2.5 text-[14px] font-extralight uppercase text-white transition-colors hover:bg-dark focus:outline-none focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-[#f3f2f0]"
                        >
                            <ArrowRight size={20} strokeWidth={2.5} />
                            {pageContent.button}
                        </button>
                    </div>
                </div>

                <div id="work" className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-[1.3vw]">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
