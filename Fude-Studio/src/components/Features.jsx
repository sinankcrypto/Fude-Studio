import ServicesAccordion from "./Accordian";
import { heroContent, introContent } from "../constants/features";

export default function Index() {
    return (
        <div className="min-h-screen bg-dark text-white" id="services">
            <main className="mx-auto w-full px-6 py-16 sm:px-10 md:px-[60px] md:py-20 xl:px-20 xl:py-24 2xl:px-28 2xl:py-32 3xl:px-36 3xl:py-40 4xl:px-44 4xl:py-52">
                <h1 className="max-w-none text-2xl sm:text-3xl md:text-[40px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[68px] 4xl:text-[80px] uppercase leading-[1.1] tracking-wide">
                    {heroContent.text.map((line, index) => (
                        <span key={index} className="block">
                            {line}
                        </span>
                    ))}
                </h1>

                <div className="mt-14 flex flex-col gap-6 border-t border-white/20 pt-8 md:mt-16 md:flex-row md:items-start md:justify-between md:pt-10 xl:mt-20 xl:pt-12 2xl:mt-24 2xl:pt-16 3xl:mt-32 3xl:pt-20 4xl:mt-40 4xl:pt-28">
                    <p className="text-sm xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[24px] uppercase tracking-tight text-white">
                        {introContent.eyebrow}
                    </p>
                    <p className="max-w-xl xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl text-sm leading-relaxed text-white/70 sm:text-base xl:text-[17px] 2xl:text-[19px] 3xl:text-[22px] 4xl:text-[26px]">
                        {introContent.description}
                    </p>
                </div>

                <div className="mt-14 md:mt-16 xl:mt-20 2xl:mt-24 3xl:mt-32 4xl:mt-40">
                    <ServicesAccordion />
                </div>
            </main>
        </div>
    );
}
