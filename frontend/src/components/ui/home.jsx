import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import yousufImg from "../../assets/photos/heroPic.jpeg";
import { Routes, Route, useLocation } from "react-router-dom";

function Home() {
  const techStack = [
    { name: "React", src: "/svg/React.svg" },
    { name: "Node.js", src: "/svg/Node.js.svg" },
    { name: "Express", src: "/svg/Express.svg" },
    { name: "PostgreSQL", src: "/svg/PostgresSQL.svg" },
    { name: "Tailwind CSS", src: "/svg/tailwind.svg" },
  ];

  const location = useLocation();
  const isHome = location.pathname === "/";

  const socials = [
    {
      name: "X",
      icon: <FaXTwitter />,
      url: "https://x.com/yousufKhan_20",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Yousuf-yk",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/yousuf-khan06",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/_yousuf.yk_",
    },
  ];

  return (
    <main
      className={`bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 ${location.pathname === "/" ? "pt-0" : "pt-10"
        }`}
    >

      {/* Hero Section */}
      <section
        className="relative flex min-h-[680px] items-center overflow-hidden border-b border-[var(--text-main)]/10 sm:min-h-[820px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(150,150,150,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(150,150,150,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "108px 108px",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-1 sm:px-10 lg:px-16">
          <div className="max-w-5xl">

            <div className="mb-10 flex items-center gap-4 sm:mb-12">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Bengaluru, India
              </span>
              <span className="h-[2px] max-w-[300px] flex-1 bg-[var(--text-secondary)]/30" />
            </div>

            <h1 className="text-[clamp(5rem,14vw,12rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]">
              YOUSUF
              <br />
              KHAN<span className="text-[#f5c400]">.</span>
            </h1>

            <p className="mt-12 max-w-4xl text-2xl font-medium leading-[1.2] tracking-tight sm:mt-14 sm:text-4xl lg:text-5xl">
              Full-stack developer building{" "}
              <span className="font-bold underline decoration-[#e6bd00] decoration-[5px] underline-offset-4">
                useful products
              </span>{" "}
              and exploring AI-powered systems.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-5 rounded-full border-2 border-[var(--text-main)] bg-[var(--bg-main)] text-[var(--text-main)] py-1.5 pl-6 pr-1.5 text-sm font-semibold shadow-[4px_5px_0px_var(--text-main)] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                See the work

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ffcc00] text-black text-xl transition-transform group-hover:rotate-[-45deg]">
                  →
                </span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-dashed border-[var(--text-secondary)] px-5 py-4 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--text-main)] hover:text-[var(--text-main)]"
              >
                <span className="h-2 w-2 rounded-full bg-[#ffcc00]" />
                Let's build something interesting
                <span className="rounded-full border border-[var(--text-main)] bg-[#ffcc00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                  Let's talk
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-b border-[var(--text-main)]/10 bg-transparent">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="mb-12 max-w-xl">
            <div className="mb-5 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                About
              </span>
              <span className="h-[2px] flex-1 bg-[var(--text-secondary)]/30" />
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Hi there!
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="relative mx-auto w-full max-w-[460px] lg:mx-0">

              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[var(--text-main)]" />

              <img
                src={yousufImg}
                alt="Yousuf Khan"
                className="relative aspect-[4/5] w-full rounded-2xl border-2 border-[var(--text-main)] object-cover object-center"
              />
            </div>

            <div>
              <h3 className="text-2xl font-medium leading-[1.4] tracking-tight sm:text-3xl lg:text-[2.5rem]">
                I build full-stack applications, explore AI engineering, and enjoy turning interesting ideas into real products.
              </h3>

              <div className="mt-8 space-y-5 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                <p>
                  I'm a BCA student and full-stack developer interested in building applications that solve real problems. I enjoy working across the frontend and backend, from designing interfaces to building APIs and managing databases.
                </p>

                <p>
                  Lately, I've also been exploring AI engineering, including LLMs, RAG pipelines, AI agents, and integrating intelligent features into web applications.
                </p>

                <p>
                  I believe in learning by building. I like experimenting with new technologies, solving problems, breaking things, and understanding how they work under the hood.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="text-2xl text-[var(--text-secondary)] transition-all duration-200 hover:-translate-y-1 hover:text-[var(--text-main)]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-3 border-b-2 border-[#e6bd00] pb-2 text-sm font-bold text-[var(--text-main)] transition-all hover:gap-5"
              >
                Get in touch <span>→</span>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}

      <section className="overflow-hidden bg-transparent py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

          <div className="mb-10 flex items-center gap-4">
            <h2 className="shrink-0 text-3xl font-bold tracking-tight sm:text-4xl">
              Tech Stack
            </h2>
            <span className="h-[2px] flex-1 bg-[var(--text-secondary)]/30" />
          </div>

          <div className="group relative overflow-hidden">
            <div className="flex w-max animate-marquee-right group-hover:[animation-play-state:paused]">

              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
                  aria-hidden={copy === 1}
                >
                  {techStack.map((tech) => (
                    <div
                      key={`${copy}-${tech.name}`}
                      className="flex shrink-0 items-center gap-3"
                    >
                      <img
                        src={tech.src}
                        alt=""
                        aria-hidden="true"
                        className="h-8 w-8 object-contain"
                      />

                      <span className="whitespace-nowrap text-sm font-medium text-[var(--text-main)]">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>


    </main>
  );
}

export default Home;