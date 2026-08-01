import { HERO_CONTENT } from "../constants/navbar";

export default function Hero() {
    return (
        <section className="w-full min-h-[60vh] px-6 lg:px-16 flex flex-col lg:flex-row mb-20">
            <div className="w-full lg:w-3/5 flex flex-col justify-center">
                <h1 className="text-5xl lg:text-[66px] tracking-tighter leading-[1.1] break-words">
                    {HERO_CONTENT.title.toUpperCase()}
                </h1>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-end mt-6 lg:mt-0">
                <p className="break-words text-[14px] sm:text-[16px]">
                    {HERO_CONTENT.subtitle.toUpperCase()}
                </p>
            </div>
        </section>
    )
}  