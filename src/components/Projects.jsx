import ecommerce from "../assets/ecommerce.png";
import githubFinder from "../assets/githubfinder.png";
import fationsense from "../assets/fationsense_store_front.png";
import fationsenseAdmin from "../assets/fationsense_admin.png";
const projects = [
  {
    number: "01",
    title: "E-Commerce Storefront",
    image: ecommerce,
    description:
      "A full-featured e-commerce storefront with user authentication, real products, cart, checkout flow, and a Supabase backend. Built with React and Tailwind CSS. Focused on clean UI and smooth user experience.",
    tags: ["React", "Tailwind", "JavaScript", "Supabase", "Vite"],
    live: "https://shopwillstore.vercel.app",
    github: "https://github.com/chukwumnomso/shopwill-V2",
    featured: true,
  },
  {
    number: "02",
    title: "GitHub Repo finder",
    image: githubFinder,
    description:
      "A developer tool that lets you search any GitHub username and instantly view their profile stats, top repositories sorted by stars, programming languages and followers. Built with React and the GitHub REST API.",
    tags: ["React", "Tailwind", "JavaScript", "GitHub API", "Vite"],
    live: "https://githubrepo-finder.vercel.app",
    github: "https://github.com/chukwumnomso/github-finder",
    featured: true,
  },
  {
    number: "03",
    title: "Fationsense",
    image: fationsense,
    description: `A complete e-commerce storefront for a Lagos-based streetwear label, built as a portfolio project. Frontend and backend fully integrated.
Built with Next.js 14 + Supabase (Postgres, Auth, Storage). Features product catalog with variants, image galleries, cart, and checkout UI. I created 6 original house labels — PREDATOR, NOIR, CULTURE, STREET, ESSENTIALS, VAULT — to keep the brand legally clean.
Backend is live: products, inventory, and customer data are stored in Supabase with Row Level Security. Google OAuth is wired up, images served from cloudinary and url stored in supabase. Designed mobile-first for Nigerian networks, with Naira pricing and Paystack-ready checkout flow.
`,

    tags: [
      "Next.js",
      "Tailwind",
      "JavaScript",
      "Supabase",
      "Vercel",
      "Framer Motion",
    ],
    live: "https://fationsense.vercel.app",
    github: "https://github.com/chukwumnomso/fationsense",
    featured: true,
  },
  {
    number: "04",
    title: "Fationsense Admin Dashboard",
    image: fationsenseAdmin,
    description: `A standalone admin dashboard built for managing a streetwear brand's operations. Built as a portfolio project to demonstrate real-time data and secure admin patterns.
Built with React and Supabase Realtime. The dashboard displays live orders, revenue, customers, inventory, newsletter subscribers, and contact messages — all updating instantly without refresh.
Key features:
•  Dark Mode
•  Live stats with 7-day revenue chart
•  Low-stock alerts and inventory management
•  Customer management with Google OAuth integration
•  Role-based access: full admin vs view-only mode (visitors can log in but can't delete/edit)
•  Row Level Security policies protecting all tables
•  Glass-morphism UI, fully responsive
I solved Supabase Realtime limitations on views by using direct table counts with head: true for performance. Authentication auto-creates customer profiles via Postgres trigger.
,`,
    tags: ["React", "Tailwind", "JavaScript", "Supabase", "Vite"],
    live: "https://fationsense-admin.vercel.app",
    github: "https://github.com/chukwumnomso/fationsense-admin",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,97,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(123,97,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#7b61ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] uppercase text-[#00e5ff] mb-4">
          ✦ Selected Work
        </p>

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="font-['Syne'] font-extrabold text-4xl md:text-5xl text-white leading-tight">
            Things I've <br />
            <span className="text-[#4d6072]">built & shipped.</span>
          </h2>
          <a
            href="https://github.com/chukwumnomso"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#4d6072] hover:text-[#00e5ff] tracking-widest uppercase transition-colors duration-300 border-b border-[#1e2a38] hover:border-[#00e5ff] pb-0.5 self-start md:self-auto"
          >
            View All on GitHub ↗
          </a>
        </div>

        {/* Projects */}
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group border border-[#1e2a38] bg-[#0d1117] hover:border-[#00e5ff]/20 transition-all duration-500 overflow-hidden"
            >
              {/* Screenshot */}
              <div className="relative w-full h-48 md:h-64 overflow-hidden border-b border-[#1e2a38]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0d1117] via-[#0d1117]/20 to-transparent" />
                {project.featured && (
                  <span className="absolute top-4 right-4 text-[10px] px-2 py-0.5 border border-[#00e5ff]/30 text-[#00e5ff] tracking-widest uppercase bg-[#0d1117]/80">
                    Featured
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-6 flex-1">
                  <span className="font-['Syne'] font-extrabold text-4xl text-[#1e2a38] group-hover:text-[#00e5ff]/20 transition-colors duration-500 leading-none select-none">
                    {project.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-['Syne'] font-bold text-xl text-white group-hover:text-[#00e5ff] transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#cdd9e5]/50 leading-relaxed max-w-xl mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-[#080b10] border border-[#1e2a38] text-[#4d6072] tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 md:flex-col md:items-end shrink-0">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-4 py-2 bg-[#00e5ff] text-[#080b10] font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
                  >
                    Live ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-4 py-2 border border-[#1e2a38] text-[#4d6072] tracking-widest uppercase hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
