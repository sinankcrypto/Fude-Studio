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
        <section className="min-h-screen bg-[#f3f2f0] px-6 lg:px-[60px] xl:px-20 2xl:px-28 3xl:px-36 4xl:px-44 py-12 sm:py-16 lg:py-[7.1vw] xl:py-[6vw] 2xl:py-[5vw] 3xl:py-[4vw] 4xl:py-[3.5vw] text-[#2A2A2A]" id="portfolio">
            <div className="w-full">
                <div className="mb-16 grid gap-10 md:grid-cols-[1.04fr_0.96fr] md:gap-16 lg:mb-[7.1vw] lg:gap-[9vw] xl:mb-20 2xl:mb-24 3xl:mb-32 4xl:mb-40 xl:gap-[8vw] 2xl:gap-[7vw] 3xl:gap-[6vw] 4xl:gap-[5vw]">
                    <div>
                        <h1 className="max-w-[620px] xl:max-w-[700px] 2xl:max-w-[850px] 3xl:max-w-[1050px] 4xl:max-w-[1300px] font-heading text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] 2xl:text-[64px] 3xl:text-[76px] 4xl:text-[92px] font-normal leading-[1.2] tracking-tight uppercase text-[#2A2A2A]">
                            {pageContent.heading.map((line) => (
                                <span className="block" key={line}>
                                    {line}
                                </span>
                            ))}
                        </h1>
                    </div>
                    <div className="flex flex-col justify-end md:pb-1 pr-[10%] xl:pr-[8%] 2xl:pr-[6%] 3xl:pr-[4%] 4xl:pr-[2%] font-body pt-[5%]">
                        <p className="mb-7 text-[12px] leading-[130%] text-[#6d6b67] sm:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px]">
                            {pageContent.description}
                        </p>
                        <a
                            href={pageContent.portfolio_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex w-fit items-center gap-3 overflow-hidden rounded-full bg-[#1b1b1b] px-6 py-2.5 xl:px-8 xl:py-3.5 2xl:px-10 2xl:py-4.5 3xl:px-12 3xl:py-5.5 4xl:px-16 4xl:py-7 text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] 4xl:text-[26px] font-extralight uppercase text-[#F0F0F0] visited:text-[#F0F0F0] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-dark focus:ring-offset-2"
                        >
                            {/* Animated Background Sweep */}
                            <span className="absolute inset-0 z-0 bg-dark scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />

                            {/* Content Wrapper */}
                            <span className="relative z-10 flex items-center gap-3 tracking-tight text-[#F0F0F0]">
                                <span className="relative overflow-hidden flex h-5 w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 3xl:h-8 3xl:w-8 4xl:h-10 4xl:w-10 items-center justify-center shrink-0">
                                    <ArrowRight strokeWidth={1.5} className="text-[#F0F0F0] transition-transform duration-300 ease-out group-hover:translate-x-5 absolute w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10" />
                                    <ArrowRight strokeWidth={1.5} className="text-[#F0F0F0] transition-transform duration-300 ease-out -translate-x-5 group-hover:translate-x-0 absolute w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10" />
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
