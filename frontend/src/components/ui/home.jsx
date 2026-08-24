import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import GlowButton from "../layout/button";
import {
  TextAnimationProvider,
  AnimatedText,
} from "../../context/textAnimation";

function Home() {
  const techStack = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      darkIcon: true,
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={19} />,
      url: "https://www.linkedin.com/in/yousuf-khan06",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={19} />,
      url: "https://github.com/Yousuf-yk",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={19} />,
      url: "https://www.instagram.com/_yousuf.yk_",
    },
    {
      name: "X",
      icon: <FaXTwitter size={18} />,
      url: "https://x.com/yousufKhan_20",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* <div className="absolute left-[15%] top-[-220px] h-[500px] w-[500px] rounded-full bg-emerald-500/[0.035] blur-3xl" /> */}

        {/* <div className="absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-[var(--text-main)]/[0.025] blur-3xl" /> */}

        <div className="absolute bottom-[-250px] left-[35%] h-[450px] w-[450px] rounded-full bg-emerald-500/[0.025] blur-3xl" />
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-10 pt-1 sm:px-8 md:pb-14 lg:px-10">
        {/* ───────────────── HERO ───────────────── */}
        <div className="grid min-h-[calc(100vh-110px)] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* LEFT */}
          <div className="text-left">
            {/* Availability */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              Open to internships & SDE opportunities
            </div>

            <TextAnimationProvider delaySpeed={0.004}>
              {/* Heading */}
              <AnimatedText
                as="h1"
                className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl xl:text-[4.5rem]"
                text="Building web apps that people actually use."
              />

              <AnimatedText
                as="p"
                className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8"
                text="I'm Yousuf Khan, a full-stack web developer specializing in the PERN stack. I build responsive interfaces, reliable APIs, and database-driven applications with a focus on clean architecture and real-world usability."
              />
            </TextAnimationProvider>

            {/* Tech stack */}
            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                Primary stack
              </p>

              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group inline-flex items-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-2 py-1 text-sm font-medium text-[var(--text-secondary)] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/60 hover:text-[var(--text-main)] hover:shadow-lg"
                  >
                    <span className="flex h-5 w-5 items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={`${tech.name} icon`}
                        className={`h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110 ${
                          tech.darkIcon ? "brightness-0 dark:invert" : ""
                        }`}
                      />
                    </span>

                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="mr-2 text-xs font-medium text-[var(--text-secondary)]">
                Find me on
              </span>

              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="group inline-flex items-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-3 py-2.5 text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/60 hover:text-emerald-600 hover:shadow-md"
                >
                  {social.icon}

                  <span className="hidden text-xs font-medium sm:block">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[470px]">
              {/* Glow behind card */}
              <div className="absolute -inset-5 rounded-[2.5rem] bg-emerald-500/[0.04] blur-3xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-gray-800 bg-[#0b0d0f] shadow-2xl">
                {/* Window header */}
                <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>

                  <span className="text-[10px] font-medium text-gray-500">
                    developer.js
                  </span>

                  <span className="text-[10px] text-gray-600">
                    JavaScript
                  </span>
                </div>

                {/* Code */}
                <div className="overflow-x-auto px-5 py-6 sm:px-7">
                  <pre className="text-[11px] leading-6 text-gray-300 sm:text-sm">
                    <code>
                      {`const developer = {
  name: "Yousuf Khan",
  role: "Full Stack Developer",

  stack: {
    frontend: ["React", "Tailwind"],
    backend: ["Node", "Express"],
    database: "PostgreSQL",
  },

  mindset: "Build → Learn → Improve",
};

developer.ship();`}
                    </code>
                  </pre>
                </div>

                {/* Stats */}
                <div className="border-t border-gray-800 p-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-gray-900 px-3 py-4">
                      <p className="text-lg font-bold text-white">PERN</p>
                      <p className="mt-1 text-[10px] text-gray-500">
                        Core stack
                      </p>
                    </div>

                    <div className="rounded-xl bg-gray-900 px-3 py-4">
                      <p className="text-lg font-bold text-white">Full</p>
                      <p className="mt-1 text-[10px] text-gray-500">
                        Stack
                      </p>
                    </div>

                    <div className="rounded-xl bg-gray-900 px-3 py-4">
                      <p className="text-lg font-bold text-white">2026</p>
                      <p className="mt-1 text-[10px] text-gray-500">
                        Building
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating status card */}
              <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-3 shadow-xl backdrop-blur-xl sm:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    Currently building
                  </p>

                  <p className="text-[10px] text-[var(--text-secondary)]">
                    Full-stack projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

     
      </section>
    </main>
  );
}

export default Home;