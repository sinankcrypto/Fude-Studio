import { motion } from "motion/react";
import { CLIENTS_SECTION, CLIENTS_ROW_1, CLIENTS_ROW_2 } from "../../constants/clients";

export default function Clients() {
  // Duplicate arrays for seamless infinite looping
  const row1Duplicated = [...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1];
  const row2Duplicated = [...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2];

  return (
    <section id="clients" className="w-full px-6 py-8 sm:py-12 md:py-16 lg:px-[60px] lg:pt-[94px] lg:pb-16 overflow-hidden bg-[#EDEDED]">
      {/* Header Section - Figma Specs Aligned */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 mb-12 lg:mb-16">
        <div className="w-full lg:w-[45%]">
          <h2 className="text-[#2A2A2A] text-[14px] font-medium uppercase tracking-[-0.03em]">
            {CLIENTS_SECTION.title}
          </h2>
        </div>

        <div className="w-full lg:w-[55%] flex justify-start 2xl:justify-center min-[2000px]:justify-center min-[2200px]:justify-center">
          <p className="w-full max-w-full lg:max-w-[715px] min-[2200px]:max-w-[780px] text-lg sm:text-2xl lg:text-[30px] font-normal uppercase leading-[1.2] tracking-[-0.06em] text-[#2A2A2A]">
            {CLIENTS_SECTION.description}
          </p>
        </div>
      </div>

      {/* Carousels Container */}
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full overflow-hidden py-3">
        
        {/* Row 1: Animates to the RIGHT */}
        <div className="w-full">
          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-8 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {row1Duplicated.map((client, index) => (
              <div
                key={`row1-${client.id}-${index}`}
                className={`group relative flex items-center justify-center w-60 sm:w-72 lg:w-80 h-36 sm:h-44 md:h-48 p-6 shrink-0 transition-all duration-500 ease-out transform-gpu ${
                  client.isHighlighted
                    ? "bg-white shadow-md -translate-y-1"
                    : "bg-[#EAEAEA] hover:bg-white hover:shadow-xl hover:-translate-y-2 hover:z-10"
                }`}
              >
                {/* Corner Brackets / Ticks (┌ ┐ └ ┘) */}
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-neutral-400/80 group-hover:border-neutral-900 transition-colors duration-500" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-neutral-400/80 group-hover:border-neutral-900 transition-colors duration-500" />
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-neutral-400/80 group-hover:border-neutral-900 transition-colors duration-500" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-neutral-400/80 group-hover:border-neutral-900 transition-colors duration-500" />

                {/* Logo Image */}
                <img
                  src={client.image}
                  alt={client.name}
                  className={`max-h-12 sm:max-h-16 max-w-[70%] object-contain transition-transform duration-500 ease-out group-hover:scale-105 ${
                    client.invert ? "brightness-0" : ""
                  }`}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Animates to the LEFT */}
        <div className="w-full">
          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {row2Duplicated.map((client, index) => (
              <div
                key={`row2-${client.id}-${index}`}
                className={`group relative flex items-center justify-center w-60 sm:w-72 lg:w-80 h-36 sm:h-44 md:h-48 p-6 shrink-0 transition-all duration-500 ease-out transform-gpu ${
                  client.isHighlighted
                    ? "bg-white shadow-md -translate-y-1"
                    : "bg-[#EAEAEA] hover:bg-white hover:shadow-xl hover:-translate-y-2 hover:z-10"
                }`}
              >
                {/* Corner Brackets / Ticks (┌ ┐ └ ┘) */}
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-neutral-400/80 group-hover:border-neutral-900 transition-colors duration-500" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-neutral-400/80 group-hover:border-neutral-900 transition-colors duration-500" />
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-neutral-400/80 group-hover:border-neutral-900 transition-colors duration-500" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-neutral-400/80 group-hover:border-neutral-900 transition-colors duration-500" />

                {/* Logo Image */}
                <img
                  src={client.image}
                  alt={client.name}
                  className={`max-h-12 sm:max-h-16 max-w-[70%] object-contain transition-transform duration-500 ease-out group-hover:scale-105 ${
                    client.invert ? "brightness-0" : ""
                  }`}
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
