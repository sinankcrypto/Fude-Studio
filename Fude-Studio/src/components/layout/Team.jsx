import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TEAM_SECTION, TEAM_MEMBERS } from "../../constants/team";

export default function Team() {
  const totalMembers = TEAM_MEMBERS.length;
  // Duplicate array 3 times for smooth stepped infinite carousel
  const displayMembers = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS];

  // Start virtualIndex at middle set
  const [virtualIndex, setVirtualIndex] = useState(totalMembers);
  const [stepWidth, setStepWidth] = useState(330);

  const trackRef = useRef(null);
  const cardRef = useRef(null);

  // Measure card width + gap dynamically for responsive step distance
  const updateStepWidth = () => {
    if (cardRef.current && trackRef.current) {
      const cardW = cardRef.current.offsetWidth;
      const style = window.getComputedStyle(trackRef.current);
      const gapVal = parseFloat(style.gap) || 32;
      setStepWidth(cardW + gapVal);
    }
  };

  useEffect(() => {
    updateStepWidth();
    window.addEventListener("resize", updateStepWidth);
    return () => window.removeEventListener("resize", updateStepWidth);
  }, []);

  const handleNext = () => {
    setVirtualIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setVirtualIndex((prev) => prev - 1);
  };

  // Seamlessly loop boundary indices without visible jump
  const handleAnimationComplete = () => {
    if (virtualIndex >= totalMembers * 2) {
      setVirtualIndex(virtualIndex - totalMembers);
    } else if (virtualIndex < totalMembers) {
      setVirtualIndex(virtualIndex + totalMembers);
    }
  };

  return (
    <section id="team" className="w-full px-6 py-16 lg:px-16 lg:py-24 overflow-hidden bg-[#EDEDED]">
      {/* Section Header - Crisp Figma Typography */}
      <div className="max-w-6xl">
        <h2 className="text-[#2A2A2A] text-3xl sm:text-4xl lg:text-[48px] font-normal uppercase leading-[1.1] tracking-normal">
          {TEAM_SECTION.title}
        </h2>

        <p className="mt-4 sm:mt-5 text-[#717171] text-base 3xl:text-[20px] font-normal leading-[1.3] tracking-tighter">
          {TEAM_SECTION.description}
        </p>
      </div>

      {/* Team Carousel Container with Minimal Left/Right Arrows */}
      <div className="relative w-full mt-12 lg:mt-16">
        {/* Minimal Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute -left-2 sm:left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md border border-neutral-200/80 text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
          aria-label="Previous Team Member"
        >
          <ChevronLeft className="w-5 h-5 stroke-[1.75]" />
        </button>

        {/* Minimal Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute -right-2 sm:right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md border border-neutral-200/80 text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
          aria-label="Next Team Member"
        >
          <ChevronRight className="w-5 h-5 stroke-[1.75]" />
        </button>

        {/* Stepped Carousel Track Viewport */}
        <div className="w-full overflow-hidden py-2 px-1">
          <motion.div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 lg:gap-[70px] w-max"
            animate={{ x: -virtualIndex * stepWidth }}
            transition={{
              duration: 0.7,
              ease: [0.25, 1, 0.5, 1],
            }}
            onAnimationComplete={handleAnimationComplete}
          >
            {displayMembers.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                ref={index === 0 ? cardRef : null}
                className="group flex flex-col w-[240px] sm:w-[260px] shrink-0"
              >
                {/* Role Label */}
                <h3 className="text-[#2A2A2A] text-xs sm:text-sm lg:text-[15px] font-medium uppercase leading-[1.25] min-h-[48px] flex flex-col justify-end tracking-tight">
                  {(member.role.includes("\n")
                    ? member.role.split("\n")
                    : member.role.includes(" & ")
                    ? member.role.split(" & ").map((part, idx, arr) => (idx < arr.length - 1 ? `${part} &` : part))
                    : [member.role]
                  ).map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                {/* Member Portrait Image */}
                <div className="mt-3 sm:mt-4 overflow-hidden bg-neutral-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[260/380] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Member Name */}
                <h3 className="mt-3 sm:mt-4 text-[#2A2A2A] text-lg sm:text-[20px] font-medium uppercase leading-[1.15] tracking-[-0.03em]">
                  {member.name.split(" ").map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
