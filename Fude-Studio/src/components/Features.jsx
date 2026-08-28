import ServicesAccordion from "./Accordian";
import { heroContent, introContent } from "../constants/features";

export default function Index() {
    return (
        <div className="min-h-screen bg-dark text-white" id="services">
            <main className="mx-auto w-full px-6 py-16 sm:px-10 md:px-[60px] md:py-20">
                <h1 className="max-w-none text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] uppercase leading-[1.1] tracking-wide">
                    {heroContent.text.map((line, index) => (
                        <span key={index} className="block xl:whitespace-nowrap">
                            {line}
                        </span>
                    ))}
                </h1>

                <div className="mt-14 flex flex-col gap-6 border-t border-white/20 pt-8 md:mt-16 md:flex-row md:items-start md:justify-between md:pt-10">
                    <div className="w-full md:w-[46%] lg:w-[50%] shrink-0">
                        <p className="text-sm 2xl:text-[18px] 3xl:text-[22px] 4xl:text-[26px] uppercase tracking-tighter text-white">
                            {introContent.eyebrow}
                        </p>
                    </div>
                    <div className="w-full md:w-[54%] lg:w-[50%] flex justify-start">
                        <p className="max-w-[580px] xl:max-w-[640px] 2xl:max-w-[720px] text-sm leading-[1.3] text-white/70 sm:text-base 2xl:text-[18px] 3xl:text-[22px] 4xl:text-[26px] tracking-tighter px-0 md:px-3 lg:px-5">
                            {introContent.description}
                        </p>
                    </div>
                </div>

                <div className="mt-14 md:mt-16">
                    <ServicesAccordion />
                </div>
            </main>
        </div>
    );
}
