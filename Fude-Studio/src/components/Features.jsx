import ServicesAccordion from "./Accordian";
import { heroContent, introContent } from "../constants/features";

export default function Index() {
    return (
        <div className="min-h-screen bg-dark text-white" id="services">
            <main className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 md:px-[60px] md:py-20">
                <h1 className="max-w-[918px] text-3xl uppercase leading-[1.1] tracking-tight sm:text-4xl md:text-[40px]">
                    {heroContent.text}
                    <span className="underline underline-offset-4">
                        {heroContent.linkText}
                    </span>
                </h1>

                <div className="mt-14 flex flex-col gap-6 border-t border-white/20 pt-8 md:mt-16 md:flex-row md:items-start md:justify-between md:pt-10">
                    <p className="text-sm uppercase tracking-tight text-white">
                        {introContent.eyebrow}
                    </p>
                    <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                        {introContent.description}
                    </p>
                </div>

                <div className="mt-14 md:mt-16">
                    <ServicesAccordion />
                </div>
            </main>
        </div>
    );
}
