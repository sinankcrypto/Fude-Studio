import { useState } from "react";
// import { ArrowUpRight, ChevronRight } from "lucide-react";


const pageContent = {
    eyebrow: "Selected work",
    heading: ["See the work", "behind the words"],
    description:
        "From first thought to final frame, we shape distinctive identities and digital stories for ambitious people and brands. Explore a selection of projects built with clarity, character, and care.",
    button: "View our portfolio",
};

const projects = [
    {
        title: "Jojo",
        category: "Brand identity · Culture",
        image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
        accent: "#6d182d",
    },
    {
        title: "Breen",
        category: "Strategy · Hospitality",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
        accent: "#b78d68",
    },
    {
        title: "Chemzol",
        category: "Packaging · Industry",
        image:
            "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=85",
        accent: "#1e83c8",
    },
    {
        title: "X marks",
        category: "Digital · Technology",
        image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
        accent: "#241453",
    },
];

export default function Index() {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <main className="min-h-screen bg-[#f3f2f0] px-6 py-12 text-[#171717] sm:px-10 sm:py-16 lg:px-[4vw] lg:py-[7.1vw]">
            <section className="mx-auto max-w-[1440px]">
                <div className="mb-16 grid gap-10 md:grid-cols-[1.04fr_0.96fr] md:gap-16 lg:mb-[7.1vw] lg:gap-[9vw]">
                    <div>
                        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77736e] sm:text-xs">
                            {pageContent.eyebrow}
                        </p>
                        <h1 className="max-w-[620px] font-display text-[clamp(3.15rem,6.2vw,7.25rem)] font-medium leading-[0.86] tracking-[-0.065em]">
                            {pageContent.heading.map((line) => (
                                <span className="block" key={line}>
                                    {line}
                                </span>
                            ))}
                        </h1>
                    </div>
                    <div className="flex max-w-[360px] flex-col justify-end md:pb-1 lg:max-w-[390px]">
                        <p className="mb-7 text-[12px] leading-[1.55] text-[#6d6b67] sm:text-[13px]">
                            {pageContent.description}
                        </p>
                        <button
                            type="button"
                            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                            className="group flex w-fit items-center gap-3 rounded-full bg-[#1b1b1b] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#6d182d] focus:outline-none focus:ring-2 focus:ring-[#6d182d] focus:ring-offset-2 focus:ring-offset-[#f3f2f0]"
                        >
                            {pageContent.button}
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                                {/* <ArrowUpRight size={10} strokeWidth={2.5} /> */}
                            </span>
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
                            {index === 0 && (
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden bg-[#6d182d]/45">
                                    <span className="absolute whitespace-nowrap font-display text-[clamp(4.5rem,10vw,10rem)] font-medium uppercase leading-none tracking-[-0.1em] text-[#f7ead7] opacity-90">
                                        JOJO
                                    </span>
                                    <span className="relative mt-6 h-[42%] w-[25%] overflow-hidden rounded-t-[50%] bg-[#d4b08b]/80 mix-blend-multiply" />
                                </div>
                            )}
                            <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
                                <div className="text-white">
                                    <p className="font-display text-2xl tracking-[-0.04em]">{project.title}</p>
                                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/75">{project.category}</p>
                                </div>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
                                    {/* <ChevronRight size={15} /> */}
                                </span>
                            </div>
                            {activeProject === project.title && (
                                <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#171717] sm:left-5 sm:top-5">
                                    Selected
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </section>
        </main>
    );
}
