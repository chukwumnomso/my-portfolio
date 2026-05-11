const skillGroups = [
  {
    category: "Frontend",
    icon: "⬡",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "⬡",
    skills: [
      { name: "Supabase", level: 70 },
      { name: "REST APIs", level: 65 },
      { name: "Git & GitHub", level: 75 },
      { name: "Figma", level: 55 },
    ],
  },
  {
    category: "Currently Learning",
    icon: "⬡",
    skills: [
      { name: "TypeScript", level: 35 },
      { name: "Next.js", level: 50 },
      { name: "Framer Motion", level: 60 },
    ],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00e5ff]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] uppercase text-[#00e5ff] mb-4">
          ✦ My Stack
        </p>

        {/* Heading */}
        <h2 className="font-['Syne'] font-extrabold text-4xl md:text-5xl text-white mb-16 leading-tight">
          Tools I work <br />
          <span className="text-[#4d6072]">with & master.</span>
        </h2>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="border border-[#1e2a38] bg-[#0d1117] p-6 hover:border-[#00e5ff]/20 transition-all duration-500 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#00e5ff] text-lg">{group.icon}</span>
                <p className="text-xs tracking-widest uppercase text-[#4d6072] group-hover:text-[#00e5ff] transition-colors duration-300">
                  {group.category}
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-[#cdd9e5]/80">
                        {skill.name}
                      </span>
                      <span className="text-xs text-[#4d6072]">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Bar track */}
                    <div className="h-px w-full bg-[#1e2a38] relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00e5ff] to-[#7b61ff] transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge row */}
        <div className="mt-12 flex flex-wrap gap-3">
          {[
            "Responsive Design",
            "REST APIs",
            "Supabase Auth",
            "Supabase Database",
            "Component Architecture",
            "Cross-browser Compatibility",
          ].map((badge) => (
            <span
              key={badge}
              className="text-xs px-4 py-2 border border-[#1e2a38] text-[#4d6072] hover:border-[#00e5ff]/30 hover:text-[#00e5ff] transition-all duration-300 tracking-wider"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
