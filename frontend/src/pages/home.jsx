import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Home() {
  const techStack = [
    { name: 'React', color: 'bg-[#D9F7FF] text-[#0EA5E9] border-[#7DD3FC]' },
    { name: 'Node.js', color: 'bg-[#DCFCE7] text-[#15803D] border-[#86EFAC]' },
    { name: 'Express', color: 'bg-gray-200 text-gray-800 border-gray-300' },
    { name: 'PostgreSQL', color: 'bg-[#DBEAFE] text-[#2563EB] border-[#93C5FD]' },
    { name: 'Tailwind CSS', color: 'bg-[#CCFBF1] text-[#0891B2] border-[#67E8F9]' },
  ];

  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-32 py-20 sm:px-6 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-emerald-50/30 to-white" />

      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left content */}
        <div className="text-left">
          {/* Availability badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-800 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to internships and SDE opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl xl:text-7xl">
            Building web apps
            <br />
            <span className="text-emerald-600">that people actually use.</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            I’m Yousuf Khan, a full stack web developer specializing in the PERN
            stack. I build responsive frontends, scalable backends, and
            production-ready APIs with a strong focus on clean architecture,
            performance, and real-world usability.
          </p>

          {/* Tech stack */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`rounded-lg border px-3 py-2 text-xs font-semibold shadow-sm sm:px-4 sm:py-2.5 sm:text-sm ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#project"
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:px-6 sm:py-3 sm:text-base"
            >
              View projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-emerald-500 hover:text-emerald-600 sm:px-6 sm:py-3 sm:text-base"
            >
              Download resume
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/yousuf-khan06"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-gray-200 bg-white p-3 text-gray-600 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-600"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/Yousuf-yk"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-gray-200 bg-white p-3 text-gray-600 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-600"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://x.com/yousufKhan_20"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-gray-200 bg-white p-3 text-gray-600 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-600"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[330px] rounded-3xl border border-gray-200 bg-gray-950 p-5 shadow-2xl sm:max-w-[380px] lg:max-w-[400px]">
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
}`} </code>
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
                  <p className="text-xs text-gray-400">Portfolio rebuild</p>
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