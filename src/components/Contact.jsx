const links = [
  {
    label: "GitHub",
    handle: "@Chukwumnomso",
    href: "https://github.com/chukwumnomso",
    color: "#00e5ff",
  },
  {
    label: "LinkedIn",
    handle: "Johnkennedy Chinomso",
    href: "https://linkedin.com/in/chukwumnomso",
    color: "#7b61ff",
  },
  {
    label: "Email",
    handle: "Johnkennedychinomso@email.com",
    href: "mailto:johnkennedychinomso@email.com",
    color: "#39d353",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-[#00e5ff]/3 rounded-full blur-3xl pointer-events-none" />

      {/* Top border line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#1e2a38] to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] uppercase text-[#00e5ff] mb-4">
          ✦ Get In Touch
        </p>

        {/* Heading */}
        <h2 className="font-['Syne'] font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight">
          Let's build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#7b61ff]">
            great together.
          </span>
        </h2>

        <p className="text-sm text-[#4d6072] max-w-md leading-relaxed mb-16">
          <p className="text-sm text-[#4d6072] max-w-md leading-relaxed mb-16">
            I'm currently open to frontend roles and freelance projects. If you
            have an opportunity or just want to connect — my inbox is open.
          </p>
        </p>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group border border-[#1e2a38] bg-[#0d1117] p-6 hover:border-[#00e5ff]/20 transition-all duration-300 flex flex-col gap-4 "
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: link.color }}
                >
                  {link.label}
                </span>
                <span className="text-[#4d6072] group-hover:text-white transition-colors duration-300 text-lg">
                  ↗
                </span>
              </div>
              <p className="text-white font-['Syne'] font-bold text-lg group-hover:text-[#00e5ff] transition-colors duration-300 break-all">
                {link.handle}
              </p>
            </a>
          ))}
        </div>

        {/* Email CTA */}
        <div className="border border-[#1e2a38] bg-[#0d1117] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest uppercase text-[#4d6072] mb-2">
              Prefer email?
            </p>
            <p className="font-['Syne'] font-bold text-white text-xl break-all">
              Johnkennedychinomso@email.com
            </p>
          </div>
          <a
            href="mailto:johnkennedychinomso@email.com"
            className="px-6 py-3 bg-[#00e5ff] text-[#080b10] text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 shrink-0"
          >
            Send Me An Email
          </a>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[#1e2a38] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4d6072] tracking-wider">
            Designed & Built by{" "}
            <span className="text-[#00e5ff] tracking-widest"> CHUKWUNOMSO</span>
          </p>
          <p className="text-xs text-[#4d6072] tracking-wider">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
