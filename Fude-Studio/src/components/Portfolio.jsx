import { ArrowRight } from "lucide-react";
import { pageContent } from "../constants/portfolio";

function PortfolioShowcase() {
    return (
        <div className="group relative aspect-[1.72/1] overflow-hidden w-full bg-neutral-200">
            <video
                src={pageContent.portfolio_video_url}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onEnded={(e) => e.target.play()}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
        </div>
    );
}

export default function Portfolio() {
    return (
        <section className="min-h-screen bg-[#f3f2f0] px-6 lg:px-[60px] py-12 sm:py-16 lg:py-[7.1vw] text-[#2A2A2A]" id="portfolio">
            <div className="w-full">
                <div className="mb-16 grid gap-10 md:grid-cols-[1.04fr_0.96fr] md:gap-16 lg:mb-[7.1vw] lg:gap-[9vw]">
                    <div>
                        <h1 className="max-w-[620px] font-heading text-3xl sm:text-4xl lg:text-[48px] font-normal leading-[1.2] tracking-tight uppercase text-[#2A2A2A]">
                            {pageContent.heading.map((line) => (
                                <span className="block" key={line}>
                                    {line}
                                </span>
                            ))}
                        </h1>
                    </div>
                    <div className="flex flex-col justify-end md:pb-1 pr-[10%] font-body pt-[5%]">
                        <p className="mb-7 text-[12px] leading-[130%] text-[#6d6b67] sm:text-[16px] ">
                            {pageContent.description}
                        </p>
                        <a
                            href={pageContent.portfolio_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex w-fit items-center gap-3 overflow-hidden rounded-full bg-[#1b1b1b] px-6 py-2.5 text-[14px] font-extralight uppercase text-[#F0F0F0] visited:text-[#F0F0F0] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-dark focus:ring-offset-2"
                        >
                            {/* Animated Background Sweep */}
                            <span className="absolute inset-0 z-0 bg-dark scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />

                            {/* Content Wrapper */}
                            <span className="relative z-10 flex items-center gap-3 tracking-tight text-[#F0F0F0]">
                                <span className="relative overflow-hidden flex h-5 w-5 items-center justify-center shrink-0">
                                    <ArrowRight size={18} strokeWidth={1.5} className="text-[#F0F0F0] transition-transform duration-300 ease-out group-hover:translate-x-5 absolute" />
                                    <ArrowRight size={18} strokeWidth={1.5} className="text-[#F0F0F0] transition-transform duration-300 ease-out -translate-x-5 group-hover:translate-x-0 absolute" />
                                </span>
                                {pageContent.button}
                            </span>
                        </a>
                    </div>
                </div>

                <div id="work" className="w-full">
                    <PortfolioShowcase />
                </div>
            </div>
        </section>
    );
}
