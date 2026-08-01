import { motion } from "motion/react";
import { CLIENTS_SECTION, CLIENTS_ROW_1, CLIENTS_ROW_2 } from "../../constants/clients";

export default function Clients() {
  // Duplicate arrays for seamless infinite looping
  const row1Duplicated = [...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1];
  const row2Duplicated = [...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2];

  return (
    <section id="clients" className="w-full px-6 py-16 lg:px-16 lg:py-24 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 lg:mb-16">
        <div className="md:w-1/3">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-text">
            {CLIENTS_SECTION.title}
          </h2>
        </div>

        <div className="md:w-2/3">
          <p className="max-w-2xl text-base sm:text-lg lg:text-[19px] font-normal uppercase leading-[1.35] tracking-normal text-text">
            {CLIENTS_SECTION.description}
          </p>
        </div>
      </div>

      {/* Carousels Container */}
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full overflow-hidden py-2">
        
        {/* Row 1: Animates to the RIGHT */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-8 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {row1Duplicated.map((client, index) => (
              <div
                key={`row1-${client.id}-${index}`}
                className={`relative flex items-center justify-center w-60 sm:w-72 lg:w-80 h-36 sm:h-44 md:h-48 p-6 shrink-0 transition-all duration-300 ${
                  client.isHighlighted
                    ? "bg-white shadow-sm"
                    : "bg-[#EAEAEA] hover:bg-[#E2E2E2]"
                }`}
              >
                {/* Corner Brackets / Ticks (┌ ┐ └ ┘) */}
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-neutral-400/80" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-neutral-400/80" />
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-neutral-400/80" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-neutral-400/80" />

                {/* Logo Image */}
                <img
                  src={client.image}
                  alt={client.name}
                  className={`max-h-12 sm:max-h-16 max-w-[70%] object-contain ${
                    client.invert ? "invert brightness-0" : ""
                  }`}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Animates to the LEFT */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {row2Duplicated.map((client, index) => (
              <div
                key={`row2-${client.id}-${index}`}
                className={`relative flex items-center justify-center w-60 sm:w-72 lg:w-80 h-36 sm:h-44 md:h-48 p-6 shrink-0 transition-all duration-300 ${
                  client.isHighlighted
                    ? "bg-white shadow-sm"
                    : "bg-[#EAEAEA] hover:bg-[#E2E2E2]"
                }`}
              >
                {/* Corner Brackets / Ticks (┌ ┐ └ ┘) */}
                <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-neutral-400/80" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-neutral-400/80" />
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-neutral-400/80" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-neutral-400/80" />

                {/* Logo Image */}
                <img
                  src={client.image}
                  alt={client.name}
                  className={`max-h-12 sm:max-h-16 max-w-[70%] object-contain ${
                    client.invert ? "invert brightness-0" : ""
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
