import { useState, useEffect, useRef } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { services } from "../constants/features";

function ToggleIcon() {
    return (
        <span className="relative flex h-7 w-7 xl:h-9 xl:w-9 2xl:h-11 2xl:w-11 3xl:h-14 3xl:w-14 4xl:h-18 4xl:w-18 shrink-0 items-center justify-center rounded-full bg-white">
            <span className="absolute h-[1px] xl:h-[2px] 4xl:h-[3px] w-2.5 xl:w-3.5 2xl:w-4.5 3xl:w-6 4xl:w-8 bg-black" />
            <span className="absolute h-2.5 xl:h-3.5 2xl:h-4.5 3xl:h-6 4xl:h-8 w-[1px] xl:w-[2px] 4xl:w-[3px] bg-black origin-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=open]:scale-y-0 group-data-[state=open]:rotate-90" />
        </span>
    );
}

export default function ServicesAccordion() {
    const [openNumber, setOpenNumber] = useState(services[0].number);
    const itemRefs = useRef({});
    const hasUserInteracted = useRef(false);

    useEffect(() => {
        if (!hasUserInteracted.current) {
            return;
        }

        if (openNumber) {
            // A delay allows the collapsing accordion's height layout change to begin
            // so we target the correct viewport scroll position.
            const timer = setTimeout(() => {
                const element = itemRefs.current[openNumber];
                if (element) {
                    if (window.lenis) {
                        window.lenis.scrollTo(element, {
                            offset: -120, // Offset to keep it below the sticky navbar
                            duration: 1.2,
                            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                        });
                    } else {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                        });
                    }
                }
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [openNumber]);

    return (
        <AccordionPrimitive.Root
            type="single"
            value={openNumber}
            onValueChange={(val) => {
                hasUserInteracted.current = true;
                setOpenNumber(val);
            }}
            collapsible
            className="divide-y divide-white/20 border-y border-white/20"
        >
            {services.map((service) => {
                const hasColumns = service.columns.length > 0;

                return (
                    <AccordionPrimitive.Item
                        key={service.number}
                        value={service.number}
                        ref={(el) => {
                            if (el) {
                                itemRefs.current[service.number] = el;
                            } else {
                                delete itemRefs.current[service.number];
                            }
                        }}
                    >
                        <AccordionPrimitive.Header className="flex">
                            <AccordionPrimitive.Trigger
                                className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors md:py-8 cursor-pointer"
                            >
                                <span
                                    className="flex items-baseline gap-3 font-heading text-2xl uppercase tracking-tight transition-colors sm:gap-4 sm:text-[30px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[52px] 4xl:text-[64px] text-white/40 group-data-[state=open]:text-white"
                                >
                                    <span>{service.number}</span>
                                    <span>{service.title}</span>
                                </span>
                                <ToggleIcon />
                            </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>

                        {hasColumns && (
                            <AccordionPrimitive.Content className="group/content overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                <div className="grid grid-cols-1 gap-x-16 gap-y-10 pb-10 sm:pl-4 md:grid-cols-2 md:pb-12 xl:gap-x-24 xl:gap-y-16 xl:pb-16 2xl:gap-x-32 2xl:gap-y-20 2xl:pb-20 3xl:gap-x-40 3xl:gap-y-28 3xl:pb-28 4xl:gap-x-52 4xl:gap-y-36 4xl:pb-36 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=closed]/content:translate-y-2 group-data-[state=open]/content:translate-y-0 group-data-[state=closed]/content:opacity-0 group-data-[state=open]/content:opacity-100">
                                    {service.columns.map((column, columnIndex) => (
                                        <div key={columnIndex} className="flex flex-col gap-10 xl:gap-14 2xl:gap-18 3xl:gap-24 4xl:gap-32">
                                            {column.map((item) => (
                                                <div key={item.title}>
                                                    <h3 className="text-lg uppercase tracking-tight text-white sm:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-[34px] 4xl:text-[40px]">
                                                        {item.title}
                                                    </h3>
                                                    <p className="mt-3 max-w-xl xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl text-sm leading-relaxed text-white/70 sm:text-base xl:text-[17px] 2xl:text-[19px] 3xl:text-[22px] 4xl:text-[26px]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </AccordionPrimitive.Content>
                        )}
                    </AccordionPrimitive.Item>
                );
            })}
        </AccordionPrimitive.Root>
    );
}
