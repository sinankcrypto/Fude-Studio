import { motion } from "motion/react";
import { TEAM_SECTION, TEAM_MEMBERS } from "../../constants/team";

export default function Team() {
  // Duplicate team members array to create a seamless infinite marquee carousel
  const duplicatedMembers = [
    ...TEAM_MEMBERS,
    ...TEAM_MEMBERS,
    ...TEAM_MEMBERS,
    ...TEAM_MEMBERS,
  ];

  return (
    <section id="team" className="w-full px-6 py-16 lg:px-16 lg:py-24 overflow-hidden">
      {/* Section Header */}
      <h2 className="text-4xl font-normal uppercase leading-[1.1] tracking-[-0.03em] text-text sm:text-5xl">
        {TEAM_SECTION.title}
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-snug text-muted">
        {TEAM_SECTION.description}
      </p>

      {/* Team Carousel Container */}
      <div className="mt-16 w-full overflow-hidden py-2">
        <motion.div
          className="flex gap-6 sm:gap-8 w-max"
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
          {duplicatedMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="flex flex-col w-64 sm:w-72 lg:w-80 shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <p className="text-sm sm:text-base uppercase leading-tight text-text font-medium truncate">
                {member.role}
              </p>

              <div className="mt-4 overflow-hidden rounded-xs bg-neutral-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[2/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <p className="mt-4 text-lg sm:text-xl font-normal uppercase leading-tight text-text">
                {member.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
