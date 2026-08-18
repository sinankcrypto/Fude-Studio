import { useState, useEffect, useRef } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { services } from "../constants/features";

function ToggleIcon() {
    return (
        <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
            <span className="absolute h-[1px] w-2.5 bg-black" />
            <span className="absolute h-2.5 w-[1px] bg-black origin-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=open]:scale-y-0 group-data-[state=open]:rotate-90" />
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
                                    className="flex items-baseline gap-3 font-heading text-2xl uppercase tracking-tight transition-colors sm:gap-4 sm:text-[30px] text-white/40 group-data-[state=open]:text-white"
                                >
                                    <span>{service.number}</span>
                                    <span>{service.title}</span>
                                </span>
                                <ToggleIcon />
                            </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>

                        {hasColumns && (
                            <AccordionPrimitive.Content className="group/content overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                <div className="grid grid-cols-1 gap-x-16 gap-y-10 pb-10 sm:pl-4 md:grid-cols-2 md:pb-12 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=closed]/content:translate-y-2 group-data-[state=open]/content:translate-y-0 group-data-[state=closed]/content:opacity-0 group-data-[state=open]/content:opacity-100">
                                    {service.columns.map((column, columnIndex) => (
                                        <div key={columnIndex} className="flex flex-col gap-10">
                                            {column.map((item) => (
                                                <div key={item.title}>
                                                    <h3 className="text-lg uppercase tracking-tight text-white sm:text-xl">
                                                        {item.title}
                                                    </h3>
                                                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
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
