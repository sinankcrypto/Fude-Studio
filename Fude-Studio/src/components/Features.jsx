import ServicesAccordion from "./Accordian";
import { heroContent, introContent } from "../constants/features";

export default function Index() {
    return (
        <div className="bg-dark text-white" id="services">
            <main className="mx-auto w-full px-6 py-5 sm:px-10 sm:py-12 md:px-[60px] md:py-20">
                <h1 className="max-w-none text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] uppercase leading-[1.1] tracking-wide">
                    {heroContent.text.map((line, index) => (
                        <span key={index} className="block xl:whitespace-nowrap">
                            {line}
                        </span>
                    ))}
                </h1>

                <div className="mt-8 flex flex-col gap-4 border-t border-white/20 pt-6 sm:mt-12 sm:gap-6 sm:pt-8 md:mt-16 md:flex-row md:items-start md:justify-between md:pt-10">
                    <div className="w-full md:w-[46%] lg:w-[50%] shrink-0">
                        <p className="text-sm uppercase tracking-tight text-white sm:text-base">
                            {introContent.eyebrow}
                        </p>
                    </div>
                    <div className="w-full md:w-[54%] lg:w-[50%] flex justify-start">
                        <p className="max-w-[580px] xl:max-w-[640px] text-sm leading-[1.3] text-white/70 sm:text-base tracking-tight px-0 md:px-3 lg:px-5">
                            {introContent.description}
                        </p>
                    </div>
                </div>

                <div className="mt-1 sm:mt-12 md:mt-16">
                    <ServicesAccordion />
                </div>
            </main>
        </div>
    );
}
