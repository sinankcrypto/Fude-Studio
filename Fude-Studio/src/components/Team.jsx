import { TEAM_SECTION, TEAM_MEMBERS } from "../constants/team";

export default function Team() {
  return (
    <section id="team" className="w-full px-6 py-16 lg:px-16 lg:py-24">
      <h2 className="text-4xl font-normal uppercase leading-[1.1] tracking-[-0.03em] text-text sm:text-5xl">
        {TEAM_SECTION.title}
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-snug text-muted">
        {TEAM_SECTION.description}
      </p>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM_MEMBERS.map((member, index) => (
          <div key={`${member.name}-${index}`} className="flex flex-col">
            <p className="text-base uppercase leading-tight text-text">
              {member.role}
            </p>

            <img
              src={member.image}
              alt={member.name}
              className="mt-4 aspect-[2/3] w-full object-cover"
            />

            <p className="mt-4 text-xl font-normal uppercase leading-tight text-text">
              {member.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
