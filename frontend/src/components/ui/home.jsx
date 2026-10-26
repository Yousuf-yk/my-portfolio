
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { BadgeCheck } from "lucide-react";
import GlowButton from "@/components/layout/button";
import { Highlighter } from "@/components/ui/highlighter";
import yousufImg from "../../assets/photos/heroPic.jpeg";
import badgeCheck from "../../assets/photos/verified.png";
import { WordRotate } from "@/components/ui/word-rotate"


function Home() {
  const techStack = [
    { name: "React", src: "/svg/React.svg" },
    { name: "Node.js", src: "/svg/Node.js.svg" },
    { name: "Express", src: "/svg/Express.svg", darkIcon: true },
    { name: "PostgreSQL", src: "/svg/PostgresSQL.svg" },
    { name: "Tailwind CSS", src: "/svg/tailwind.svg" },
  ];

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
    <main className=" bg-[var(--bg-main)] pb-1 text-[var(--text-main)]">
      <section className="mx-auto w-full max-w-5xl px-5 py-0.1 sm:px-8 sm:py-16 lg:px-12 lg:py-2">
       
        <header className="flex w-full min-w-0 flex-row items-center gap-3 text-left sm:gap-5">
          <img
            src={yousufImg}
            alt="Yousuf Khan"
            className="h-20 w-20 shrink-0 rounded-full border-[3px] border-neutral-400/70 object-cover p-1 sm:h-32 sm:w-32"
          />

          <div className="min-w-0 flex-1">
            <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <h1 className="min-w-0 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Yousuf Khan
              </h1>

              <span
                aria-label="Verified"
                title="Verified"
                className="flex h-5 w-5 shrink-0 items-center justify-center text-sky-500 sm:h-7 sm:w-7"
              >
                <img src={badgeCheck} alt="Verified" className="h-full w-full" />
              </span>
            </div>

            <p className="mt-2 text-sm font-medium text-[var(--text-secondary)] sm:text-xl">
              
              <Highlighter action="underline" color="#FF9800">
                <WordRotate words={["Full Stack Developer", "Software Engineer"]} />
              </Highlighter>
            </p>
          </div>
        </header>

        {/* Introduction */}
        <p className="mt-6 max-w-xl text-left text-sm leading-7 text-[var(--text-main)] sm:mt-5 sm:text-base sm:leading-8">
          I create{" "}
          <Highlighter action="underline" color="#8D8CD9">
            responsive web applications
          </Highlighter>{" "}
          with modern technologies, thoughtful interfaces and dependable
          backend architecture. My focus is turning ideas into products
          that are simple to use and built to work.
        </p>

        {/* Social links and actions */}
        <div className="mt-7 flex flex-col items-start gap-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <nav
            aria-label="Social links"
            className="flex items-center gap-5"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="text-lg text-neutral-500 transition-colors hover:text-[var(--text-main)] sm:text-2xl"
              >
                {social.icon}
              </a>
            ))}
          </nav>

          <div className="flex w-full items-center gap-3 sm:w-auto sm:gap-5">
            <Link to="/projects" className="shrink-0">
              <GlowButton>
                <span className="text-xs sm:text-sm">
                  Explore projects
                </span>
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </GlowButton>
            </Link>

            <Link
              to="/contact"
              className="shrink-0 whitespace-nowrap text-xs font-semibold transition-colors hover:text-sky-500 sm:text-sm"
            >
              Let's work together
            </Link>
          </div>
        </div>

        {/* Technology stack */}
        <section className="mt-5 sm:mt-16 lg:mt-5">
          <h2 className="font-serif text-2xl italic tracking-tight sm:text-3xl">
            Tech Stack
          </h2>

          <div
            aria-label="Technology stack"
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-4 sm:gap-x-7 sm:gap-y-5"
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex shrink-0 items-center gap-2"
              >
                <img
                  src={tech.src}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 object-contain sm:h-8 sm:w-8"
                />

                <span className="whitespace-nowrap text-xs font-medium text-[var(--text-main)] sm:text-sm">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
