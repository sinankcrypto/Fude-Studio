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
  const [isHovered, setIsHovered] = useState(false);

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

  // Auto-advance by 1 card length at regular time interval
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [virtualIndex, isHovered]);

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
    <section id="team" className="w-full px-6 py-16 lg:px-16 xl:px-20 2xl:px-28 3xl:px-36 4xl:px-44 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40 4xl:py-52 overflow-hidden bg-[#EDEDED]">
      {/* Section Header - Crisp Figma Typography */}
      <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-[1400px] 4xl:max-w-[1800px]">
        <h2 className="text-[#2A2A2A] text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] 2xl:text-[64px] 3xl:text-[76px] 4xl:text-[92px] font-normal uppercase leading-[1.1] tracking-normal">
          {TEAM_SECTION.title}
        </h2>

        <p className="mt-4 sm:mt-5 text-[#717171] text-base lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-normal leading-[1.3] max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl">
          {TEAM_SECTION.description}
        </p>
      </div>

      {/* Team Carousel Container with Minimal Left/Right Arrows */}
      <div
        className="relative w-full mt-12 lg:mt-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Minimal Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute -left-2 sm:left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 4xl:w-22 4xl:h-22 rounded-full bg-white/90 shadow-md border border-neutral-200/80 text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
          aria-label="Previous Team Member"
        >
          <ChevronLeft className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-9 3xl:h-9 4xl:w-11 4xl:h-11 stroke-[1.75]" />
        </button>

        {/* Minimal Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute -right-2 sm:right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 4xl:w-22 4xl:h-22 rounded-full bg-white/90 shadow-md border border-neutral-200/80 text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
          aria-label="Next Team Member"
        >
          <ChevronRight className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-9 3xl:h-9 4xl:w-11 4xl:h-11 stroke-[1.75]" />
        </button>

        {/* Stepped Carousel Track Viewport */}
        <div className="w-full overflow-hidden py-2 px-1">
          <motion.div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 lg:gap-[70px] xl:gap-[80px] 2xl:gap-[100px] 3xl:gap-[120px] 4xl:gap-[150px] w-max"
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
                className="group flex flex-col w-[240px] sm:w-[260px] xl:w-[300px] 2xl:w-[350px] 3xl:w-[420px] 4xl:w-[500px] shrink-0"
              >
                {/* Role Label */}
                <p className="text-[#2A2A2A] text-xs sm:text-sm lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[22px] 4xl:text-[26px] font-normal uppercase leading-[1.25] min-h-[48px] xl:min-h-[56px] 2xl:min-h-[64px] 3xl:min-h-[76px] 4xl:min-h-[92px] flex flex-col justify-end tracking-[0.08em]">
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
                </p>

                {/* Member Portrait Image */}
                <div className="mt-3 sm:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-8 4xl:mt-10 overflow-hidden bg-neutral-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[260/380] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Member Name */}
                <h3 className="mt-3 sm:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-8 4xl:mt-10 text-[#2A2A2A] text-lg sm:text-[20px] xl:text-2xl 2xl:text-3xl 3xl:text-[34px] 4xl:text-[40px] font-medium uppercase leading-[1.15] tracking-[-0.03em]">
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
