const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "1", label: "Project Shipped" },
  { value: "100%", label: "Passion for UI" },
  { value: "∞", label: "Will to Learn" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Accent line */}
      <div className="absolute left-0 top-0 w-px h-full bg-linear-to-b from-transparent via-[#00e5ff]/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] uppercase text-[#00e5ff] mb-4">
          ✦ About Me
        </p>

        {/* Heading */}
        <h2 className="font-['Syne'] font-extrabold text-4xl md:text-5xl text-white mb-16 leading-tight">
          I craft interfaces <br />
          <span className="text-[#4d6072]">that people love to use.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <div className="space-y-6 text-sm leading-relaxed text-[#cdd9e5]/70">
            <p>
              Hey! I'm{" "}
              <span className="text-white font-bold tracking-widest">
                CHUKWUNOMSO
              </span>
              , a frontend developer based in{" "}
              <span className="text-white tracking-widest">OWERRI</span>. I
              specialize in building modern web applications using React,
              JavaScript, and cutting-edge CSS.
            </p>
            <p>
              I care deeply about the details — the micro-interactions, the load
              performance, the accessibility, and the overall feel of a product.
              Good UI isn't just pretty, it's purposeful.
            </p>
            <p>
              When I'm not coding I'm probably obsessing over design systems,
              contributing to open source, or exploring new tools in the JS
              ecosystem.
            </p>

            {/* Terminal-style fact */}
            <div className="mt-8 border border-[#1e2a38] bg-[#0d1117] p-4 rounded-sm">
              <p className="text-[#4d6072] text-xs mb-2">~ / about.js</p>
              <p className="text-xs">
                <span className="text-[#7b61ff]">const</span>{" "}
                <span className="text-[#00e5ff]">me</span>{" "}
                <span className="text-white">= {"{"}</span>
              </p>
              <p className="text-xs pl-4">
                <span className="text-[#cdd9e5]/50">currently</span>
                <span className="text-white">: </span>
                <span className="text-[#39d353]">"Growing as a dev"</span>,
              </p>
              <p className="text-xs pl-4">
                <span className="text-[#cdd9e5]/50">openTo</span>
                <span className="text-white">: </span>
                <span className="text-[#39d353]">
                  <span className="text-[#39d353]">
                    "Open to new opportunities"
                  </span>
                  ,
                </span>
                ,
              </p>
              <p className="text-xs pl-4">
                <span className="text-[#cdd9e5]/50">building</span>
                <span className="text-white">: </span>
                <span className="text-[#39d353]">
                  "More projects every week"
                </span>
                ,
              </p>
              <p className="text-xs">
                <span className="text-white">{"}"}</span>
              </p>
            </div>

            {/* Resume link */}
            <a
              href="/Okoro Chinomso Johnkennedy.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#00e5ff] border-b border-[#00e5ff]/30 hover:border-[#00e5ff] pb-0.5 transition-all duration-300 tracking-widest uppercase mt-4"
            >
              Download Resume
              <span>↗</span>
            </a>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-[#1e2a38] bg-[#0d1117] hover:border-[#00e5ff]/30 transition-all duration-300 p-6 group"
              >
                <p className="font-['Syne'] font-extrabold text-4xl text-white group-hover:text-[#00e5ff] transition-colors duration-300 mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-[#4d6072] tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Wide bottom card */}
            <div className="col-span-2 border border-[#1e2a38] bg-[#0d1117] hover:border-[#7b61ff]/30 transition-all duration-300 p-6 group">
              <p className="text-xs text-[#4d6072] tracking-widest uppercase mb-3">
                Currently Vibing With
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind", "Vite", "Framer Motion"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 border border-[#1e2a38] text-[#cdd9e5]/60 group-hover:border-[#7b61ff]/40 group-hover:text-[#7b61ff] transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
