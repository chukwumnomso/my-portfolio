const socials = [
  { label: "GitHub", href: "https://github.com/chukwumnomso" },
  { label: "LinkedIn", href: "https://linkedin.com/in/chukwumnomso" },
  { label: "Twitter", href: "https://twitter.com/diamond_oj" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#7b61ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full pt-24">
        {/* Top label */}
        <p className="fade-up text-xs tracking-[0.3em] uppercase text-[#00e5ff] mb-6">
          ✦ Available for Work & Freelance
        </p>

        {/* Name */}
        <h1 className="fade-up-2 font-['Syne'] font-extrabold text-4xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-6">
          Chinomso
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00e5ff] to-[#7b61ff]">
            OKoro.
          </span>
        </h1>

        {/* Role */}
        <p className="fade-up-3 text-sm md:text-base text-[#4d6072] tracking-widest uppercase mb-8">
          <p className="fade-up-3 text-sm md:text-base text-[#4d6072] tracking-widest uppercase mb-8">
            Frontend Developer &nbsp;/&nbsp; React Developer &nbsp;/&nbsp;
            Available for Work
          </p>
        </p>

        {/* Description */}
        <p className="fade-up-4 max-w-xl text-[#cdd9e5]/70 text-sm md:text-base leading-relaxed mb-12">
          <p className="fade-up-4 max-w-xl text-[#cdd9e5]/70 text-sm md:text-base leading-relaxed mb-12">
            Frontend developer building responsive, modern web apps with React,
            Tailwind, and Supabase. Available for new opportunities and
            freelance projects — I ship fast and learn even faster.
          </p>
        </p>

        {/* CTAs */}
        <div className="fade-up-4 flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#00e5ff] text-[#080b10] text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#1e2a38] text-sm text-[#cdd9e5] tracking-widest uppercase hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Socials */}
        <div className="fade-up-4 flex items-center gap-6">
          <span className="text-xs text-[#4d6072] tracking-widest uppercase">
            Find me on
          </span>
          <div className="h-px w-8 bg-[#1e2a38]" />
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#4d6072] hover:text-[#00e5ff] tracking-widest uppercase transition-colors duration-300"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-6 md:right-0 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#4d6072] rotate-90 mb-6">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-[#00e5ff] to-transparent glow" />
        </div>
      </div>
    </section>
  );
}
