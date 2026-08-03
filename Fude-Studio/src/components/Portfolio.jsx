import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { pageContent, projects } from "../constants/portfolio";

export default function Portfolio() {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <section className="min-h-screen bg-[#f3f2f0] px-6 py-12 text-[#2A2A2A] sm:px-10 sm:py-16 lg:px-[4vw] lg:py-[7.1vw]" id="portfolio">
            <div className="mx-auto max-w-[1440px]">
                <div className="mb-16 grid gap-10 md:grid-cols-[1.04fr_0.96fr] md:gap-16 lg:mb-[7.1vw] lg:gap-[9vw]">
                    <div>
                        <h1 className="max-w-[620px] font-sans text-[48px] font-[48px] leading-[1.2] tracking-[-0.065em] uppercase text-[#2A2A2A]">
                            {pageContent.heading.map((line) => (
                                <span className="block" key={line}>
                                    {line}
                                </span>
                            ))}
                        </h1>
                    </div>
                    <div className="flex flex-col justify-end md:pb-1 pr-[10%] font-sans pt-[5%]">
                        <p className="mb-7 text-[12px] leading-[1.2] text-[#6d6b67] sm:text-[16px] ">
                            {pageContent.description}
                        </p>
                        <button
                            type="button"
                            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                            className="group flex w-fit items-center tracking-tight gap-3 rounded-full bg-[#1b1b1b] px-4 py-2.5 text-[14px] font-extralight uppercase text-white transition-colors hover:bg-[#6d182d] focus:outline-none focus:ring-2 focus:ring-[#6d182d] focus:ring-offset-2 focus:ring-offset-[#f3f2f0]"
                        >
                            <ArrowRight size={20} strokeWidth={2.5} />
                            {pageContent.button}
                        </button>
                    </div>
                </div>

                <div id="work" className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-[1.3vw]">
                    {projects.map((project, index) => (
                        <button
                            key={project.title}
                            type="button"
                            aria-label={`View ${project.title} project`}
                            onClick={() => setActiveProject(activeProject === project.title ? null : project.title)}
                            className="group relative aspect-[1.72/1] overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-[#6d182d] focus:ring-offset-4 focus:ring-offset-[#f3f2f0]"
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} project preview`}
                                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
                            <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
                                <div className="text-white">
                                    <p className="font-sans text-2xl tracking-[-0.04em]">{project.title}</p>
                                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/75">{project.category}</p>
                                </div>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
                                    <ChevronRight size={15} />
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
