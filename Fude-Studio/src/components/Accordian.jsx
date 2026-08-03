import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "../constants/features";

function ToggleIcon({ open }) {
    return (
        <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
            <span className="absolute h-[1px] w-2.5 bg-black" />
            <motion.span 
                initial={false}
                animate={{ 
                    scaleY: open ? 0 : 1,
                    rotate: open ? 90 : 0
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute h-2.5 w-[1px] bg-black origin-center" 
            />
        </span>
    );
}

export default function ServicesAccordion() {
    const [openNumber, setOpenNumber] = useState(services[0].number);

    const toggle = (number) => {
        setOpenNumber((current) => (current === number ? null : number));
    };

    return (
        <div className="divide-y divide-white/20 border-y border-white/20">
            {services.map((service) => {
                const isOpen = openNumber === service.number;
                const hasColumns = service.columns.length > 0;

                return (
                    <div key={service.number}>
                        <button
                            type="button"
                            onClick={() => toggle(service.number)}
                            aria-expanded={isOpen}
                            className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors md:py-8"
                        >
                            <span
                                className={`flex items-baseline gap-3 text-2xl uppercase tracking-tight transition-colors sm:gap-4 sm:text-[30px] ${isOpen ? "text-white" : "text-white/40"
                                    }`}
                            >
                                <span>{service.number}</span>
                                <span>{service.title}</span>
                            </span>
                            <ToggleIcon open={isOpen} />
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && hasColumns && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="grid grid-cols-1 gap-x-16 gap-y-10 pb-10 sm:pl-4 md:grid-cols-2 md:pb-12">
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
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
