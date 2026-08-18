import { motion } from "motion/react";
import { CLIENTS_SECTION, CLIENTS_ROW_1, CLIENTS_ROW_2 } from "../../constants/clients";

export default function Clients() {
  // Duplicate arrays for seamless infinite looping
  const row1Duplicated = [...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1];
  const row2Duplicated = [...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2];

  return (
    <section id="clients" className="w-full px-6 py-16 lg:px-[60px] xl:px-20 2xl:px-28 3xl:px-36 4xl:px-44 lg:pt-[94px] lg:pb-16 xl:pt-28 xl:pb-24 2xl:pt-36 2xl:pb-32 3xl:pt-48 3xl:pb-40 4xl:pt-60 4xl:pb-52 overflow-hidden bg-[#EDEDED]">
      {/* Header Section - Figma Specs Aligned */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 3xl:mb-32 4xl:mb-40">
        <div className="lg:w-[44%]">
          <h2 className="text-[#2A2A2A] text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[24px] font-medium uppercase tracking-[-0.03em]">
            {CLIENTS_SECTION.title}
          </h2>
        </div>

        <div className="lg:w-[60%]">
          <p className="max-w-full lg:max-w-[715px] xl:max-w-[850px] 2xl:max-w-[1050px] 3xl:max-w-[1300px] 4xl:max-w-[1600px] text-lg sm:text-2xl lg:text-[30px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[52px] 4xl:text-[64px] font-normal uppercase leading-[1.2] tracking-[-0.06em] text-[#2A2A2A]">
            {CLIENTS_SECTION.description}
          </p>
        </div>
      </div>

      {/* Carousels Container */}
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full overflow-hidden py-2">
        
        {/* Row 1: Animates to the RIGHT */}
        <div className="w-full overflow-hidden py-3">
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
                className={`group relative flex items-center justify-center w-60 sm:w-72 lg:w-80 xl:w-96 2xl:w-[440px] 3xl:w-[520px] 4xl:w-[640px] h-36 sm:h-44 md:h-48 xl:h-56 2xl:h-64 3xl:h-[300px] 4xl:h-[360px] p-6 shrink-0 transition-all duration-500 ease-out transform-gpu ${
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
                  className={`max-h-12 sm:max-h-16 xl:max-h-20 2xl:max-h-24 3xl:max-h-32 4xl:max-h-40 max-w-[70%] object-contain transition-transform duration-500 ease-out group-hover:scale-105 ${
                    client.invert ? "brightness-0" : ""
                  }`}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Animates to the LEFT */}
        <div className="w-full overflow-hidden py-3">
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
                className={`group relative flex items-center justify-center w-60 sm:w-72 lg:w-80 xl:w-96 2xl:w-[440px] 3xl:w-[520px] 4xl:w-[640px] h-36 sm:h-44 md:h-48 xl:h-56 2xl:h-64 3xl:h-[300px] 4xl:h-[360px] p-6 shrink-0 transition-all duration-500 ease-out transform-gpu ${
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
                  className={`max-h-12 sm:max-h-16 xl:max-h-20 2xl:max-h-24 3xl:max-h-32 4xl:max-h-40 max-w-[70%] object-contain transition-transform duration-500 ease-out group-hover:scale-105 ${
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
