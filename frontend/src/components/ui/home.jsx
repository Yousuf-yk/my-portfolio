import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Home() {
  const techStack = [
    { name: "React", shortName: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js", shortName: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express", shortName: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", darkIcon: true },
    { name: "PostgreSQL", shortName: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Tailwind", shortName: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  ];

  const socials = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/yousuf-khan06" },
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/Yousuf-yk" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/_yousuf.yk_" },
    { name: "X", icon: <FaXTwitter />, url: "https://x.com/yousufKhan_20" },
  ];

  const workHighlights = [
    { number: "01", title: "Frontend", description: "Responsive interfaces" },
    { number: "02", title: "Backend", description: "REST APIs & services" },
    { number: "03", title: "Database", description: "PostgreSQL systems" },
  ];

  return (
    <main className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[55%] top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/[0.025] blur-[120px]" />
        <div className="absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-emerald-500/[0.025] blur-[110px]" />
        <div className="absolute left-[6%] top-0 hidden h-full w-px bg-[var(--border-color)]/40 xl:block" />
        <div className="absolute right-[6%] top-0 hidden h-full w-px bg-[var(--border-color)]/40 xl:block" />
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-[var(--border-color)]/[0.12] lg:block" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(var(--text-main)_1px,transparent_1px),linear-gradient(90deg,var(--text-main)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-[1600px] flex-col px-5 sm:px-8 lg:px-14 xl:px-20">
        <header className="flex min-h-[68px] items-center justify-between border-b border-[var(--border-color)]">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-color)] text-[10px] font-bold tracking-tight">YK</div>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)] sm:block">Yousuf Khan</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-30" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)] sm:text-[10px]">Open to opportunities</span>
          </div>
          <span className="hidden text-[10px] font-medium tracking-[0.2em] text-[var(--text-secondary)] sm:block">2026</span>
        </header>

        <div className="grid flex-1 items-center py-8 sm:py-10 lg:grid-cols-[0.8fr_1.5fr_0.8fr] lg:gap-8 lg:py-10 xl:grid-cols-[0.85fr_1.55fr_0.85fr] xl:gap-12">
          <aside className="order-2 hidden lg:block">
            <div className="mb-10 flex items-center gap-3">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-emerald-600 dark:text-emerald-400">01</span>
              <span className="h-px w-10 bg-[var(--border-color)]" />
            </div>
            <div className="max-w-[220px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">About</p>
              <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">I build digital products from interface to database, combining clean frontend experiences with reliable backend systems.</p>
            </div>
            <div className="my-10 h-px w-full bg-[var(--border-color)]" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">Discipline</p>
              <p className="mt-3 text-sm font-medium">Full Stack Development</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">Web · APIs · Databases</p>
            </div>
            <div className="mt-16 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-secondary)]" />
              <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">Based in India</span>
            </div>
          </aside>

          <div className="order-1 flex flex-col justify-center lg:order-1">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-emerald-500 sm:w-10" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)] sm:text-[10px]">Full Stack Web Developer</span>
            </div>
            <h1 className="max-w-[850px] text-[clamp(3.4rem,8vw,7.4rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              Building<br /><span className="text-[var(--text-secondary)]">useful</span> digital<br />experiences.
            </h1>
            <div className="mt-7 flex items-center gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">I'm Yousuf Khan</span>
              <span className="h-px w-12 bg-[var(--border-color)] sm:w-20" />
            </div>
            <p className="mt-7 max-w-[600px] text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">
              I create responsive web applications with modern technologies, thoughtful interfaces and dependable backend architecture. My focus is turning ideas into products that are simple to use and built to work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Link to="/projects" className="group inline-flex h-11 items-center justify-center gap-5 rounded-full bg-[var(--text-main)] px-6 text-xs font-semibold text-[var(--bg-main)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 sm:h-12 sm:px-7">
                <span>Explore projects</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/contact" className="inline-flex h-11 items-center justify-center text-xs font-semibold text-[var(--text-main)] transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 sm:h-12">
                Let's work together
              </Link>
            </div>
            <div className="mt-10 border-t border-[var(--border-color)] pt-5 lg:hidden">
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">Core stack</p>
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2">
                    <img src={tech.icon} alt={`${tech.name} icon`} className={`h-4 w-4 object-contain ${tech.darkIcon ? "brightness-0 dark:invert" : ""}`} />
                    <span className="text-[10px] font-medium text-[var(--text-secondary)]">{tech.shortName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="order-3 mt-10 lg:mt-0">
            {/* <div className="relative mx-auto h-[230px] w-full max-w-[320px] sm:h-[270px] lg:h-[330px] lg:max-w-none">
              <div className="absolute inset-0 rounded-[2rem] border border-[var(--border-color)]" />
              <div className="absolute inset-4 rounded-[1.5rem] border border-[var(--border-color)]/50" />
              <div className="absolute left-6 top-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">Available</span>
              </div>
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-color)] sm:h-32 sm:w-32">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--text-main)] text-xl font-semibold tracking-[-0.04em] text-[var(--bg-main)] sm:h-24 sm:w-24 sm:text-2xl">YK</div>
              </div>
              <div className="absolute left-1/2 top-1/2 h-[165px] w-[165px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--border-color)]/70 sm:h-[190px] sm:w-[190px]" />
              <span className="absolute left-1/2 top-[28px] h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-500 sm:top-[38px]" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">Personal portfolio</p>
                <p className="mt-1 text-xs font-semibold">Yousuf Khan</p>
              </div>
              <span className="absolute bottom-6 right-6 text-[10px] font-medium tracking-[0.2em] text-[var(--text-secondary)]">01</span>
            </div> */}

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">What I build</p>
                <span className="text-[9px] tracking-[0.15em] text-[var(--text-secondary)]">03</span>
              </div>
              <div className="border-t border-[var(--border-color)]">
                {workHighlights.map((item) => (
                  <div key={item.number} className="group flex items-center justify-between border-b border-[var(--border-color)] py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-medium text-[var(--text-secondary)]">{item.number}</span>
                      <div>
                        <p className="text-xs font-semibold">{item.title}</p>
                        <p className="mt-0.5 text-[9px] text-[var(--text-secondary)]">{item.description}</p>
                      </div>
                    </div>
                    <span className="text-xs text-[var(--text-secondary)] transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="hidden border-t border-[var(--border-color)] py-5 lg:block">
          <div className="grid grid-cols-[0.7fr_2fr_0.7fr] items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">Technologies</span>
              <span className="h-px w-8 bg-[var(--border-color)]" />
            </div>
            <div className="flex items-center justify-center gap-7 xl:gap-10">
              {techStack.map((tech) => (
                <div key={tech.name} className="group flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center">
                    <img src={tech.icon} alt={`${tech.name} icon`} className={`h-5 w-5 object-contain opacity-70 transition-all duration-200 group-hover:scale-110 group-hover:opacity-100 ${tech.darkIcon ? "brightness-0 dark:invert" : ""}`} />
                  </div>
                  <span className="text-[10px] font-medium text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-main)]">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-3">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">PERN Stack</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-4 border-t border-[var(--border-color)] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1">
            <span className="mr-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">Connect</span>
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer" aria-label={social.name} className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-secondary)] transition-all duration-200 hover:bg-[var(--bg-card)] hover:text-[var(--text-main)]">
                <span className="text-sm">{social.icon}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center justify-between gap-5 text-[9px] uppercase tracking-[0.16em] text-[var(--text-secondary)] sm:justify-end">
            <span>Designed & built by Yousuf</span>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--text-secondary)] sm:block" />
            <span>Scroll ↓</span>
          </div>
        </footer>
      </section>

    </main>
  );
}

export default Home;