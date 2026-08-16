import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GlowButton from '../layout/button';
import {
  TextAnimationProvider,
  AnimatedText,
} from '../../context/textAnimation';

function Home() {
const techStack = [
  {
    name: 'React',
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    color:
      'text-gray-900 border-2 border-dotted border-[#7DD3FC] shadow-[0_0_10px_rgba(14,165,233,0.25)] hover:shadow-[0_0_22px_rgba(14,165,233,0.7)]',
  },
  {
    name: 'Node.js',
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    color:
      'text-gray-900 border-2 border-dotted border-[#86EFAC] shadow-[0_0_10px_rgba(21,128,61,0.25)] hover:shadow-[0_0_22px_rgba(21,128,61,0.7)]',
  },
  {
    name: 'Express',
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    color:
      'text-gray-900 border-2 border-dotted border-gray-400 shadow-[0_0_10px_rgba(107,114,128,0.25)] hover:shadow-[0_0_22px_rgba(107,114,128,0.7)]',
    darkIcon: true,
  },
  {
    name: 'PostgreSQL',
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    color:
      'text-gray-900 border-2 border-dotted border-[#93C5FD] shadow-[0_0_10px_rgba(37,99,235,0.25)] hover:shadow-[0_0_22px_rgba(37,99,235,0.7)]',
  },
  {
    name: 'Tailwind CSS',
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    color:
      'text-gray-900 border-2 border-dotted border-[#67E8F9] shadow-[0_0_10px_rgba(8,145,178,0.25)] hover:shadow-[0_0_22px_rgba(8,145,178,0.7)]',
  },
];

  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-1 pb-2 sm:px-6 md:py-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--bg-main)] via-emerald-50/30 to-[var(--bg-main)] dark:via-emerald-900/10" />

      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left content */}
        <div className="text-left">
          {/* Availability badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-800 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to internships and SDE opportunities
          </div>

          {/* Animation Provider */}
          <TextAnimationProvider delaySpeed={0.004}>
            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight text-[var(--text-main)] sm:text-5xl md:text-6xl xl:text-7xl">
              <AnimatedText as="span" text="Building web apps" />
              <br />
              <AnimatedText
                as="span"
                className="text-emerald-600"
                text="that people actually use."
              />
            </h1>

            {/* Description */}
            <AnimatedText
              as="p"
              className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8"
              text="I’m Yousuf Khan, a full stack web developer specializing in the PERN stack. I build responsive frontends, scalable backends, and production-ready APIs with a strong focus on clean architecture, performance, and real-world usability."
            />
          </TextAnimationProvider>

          {/* Tech stack */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  backdrop-blur-md
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-0.5
                  active:scale-95
                  sm:px-4
                  sm:py-2.5
                  sm:text-sm
                  ${tech.color}
                `}
              >
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className={`
                      h-5
                      w-5
                      object-contain
                      transition-all
                      duration-300
                      group-hover:drop-shadow-[0_0_6px_currentColor]
                      ${
                        tech.darkIcon
                          ? 'brightness-0'
                          : ''
                      }
                    `}
                  />
                </span>

                <span>{tech.name}</span>
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-row gap-3">
            <a href="#project">
              <GlowButton className="!bg-gray-500 hover:!bg-gray-700 px-4">
                View All Projects
              </GlowButton>
            </a>

            <Link to="/notfound">
              <GlowButton className="!bg-emerald-600 hover:!bg-emerald-700 px-4">
                download resume
              </GlowButton>
            </Link>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/yousuf-khan06"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-[var(--text-secondary)] transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-600"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/Yousuf-yk"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-[var(--text-secondary)] transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-600"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.instagram.com/_yousuf.yk_?igsh=azl6ZWZpd3RpNzcx"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-[var(--text-secondary)] transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-600"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://x.com/yousufKhan_20"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-[var(--text-secondary)] transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-600"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[330px] rounded-3xl border border-[var(--border-color)] bg-gray-950 p-5 shadow-2xl sm:max-w-[380px] lg:max-w-[400px]">
            {/* Mac dots */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            {/* Code */}
            <pre className="overflow-x-auto text-[11px] leading-6 text-gray-300 sm:text-sm">
              <code>{`const developer = {
  name: "Yousuf Khan",
  role: "Full Stack Developer",
  stack: ["React", "Node", "PostgreSQL"],
  focus: "Scalable web apps"
};

while (learning) {
  build();
  optimize();
  ship();
}`}</code>
            </pre>

            {/* Bottom stats */}
            <div className="mt-5 border-t border-gray-800 pt-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-900 p-4">
                  <p className="text-xl font-bold text-white">PERN</p>
                  <p className="text-xs text-gray-400">Primary stack</p>
                </div>

                <div className="rounded-xl bg-gray-900 p-4">
                  <p className="text-xl font-bold text-white">2026</p>
                  <p className="text-xs text-gray-400">
                    Portfolio rebuild
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;