
import React from 'react';
import profileImg from '../assets/photos/yousufimg2.jpeg'; // replace with your image

function AboutPage() {
  const skills = [
    { name: 'React', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    { name: 'Node.js', color: 'bg-green-100 text-green-700 border-green-200' },
    { name: 'Express.js', color: 'bg-gray-100 text-gray-700 border-gray-200' },
    { name: 'PostgreSQL', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
    { name: 'REST APIs', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    { name: 'Git & GitHub', color: 'bg-orange-100 text-orange-700 border-orange-200' },
    { name: 'Responsive Design', color: 'bg-pink-100 text-pink-700 border-pink-200' },
    { name: 'Authentication', color: 'bg-violet-100 text-violet-700 border-violet-200' },
    { name: 'Vite', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { name: 'SQL', color: 'bg-sky-100 text-sky-700 border-sky-200' },
  ];

  return (
    <section className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
      {/* Hero */}
      <div className="mb-16 text-center">
        <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-emerald-600">
          About me
        </span>

        <h1 className="text-4xl font-bold text-[var(--text-main)] md:text-6xl">
          Full-stack developer focused on building useful products
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-left text-lg leading-8 text-[var(--text-secondary)]">
          I build clean, responsive, and practical web applications with React,
          Node.js, Express, and PostgreSQL while preparing for software
          engineering internships and full-time developer roles.
        </p>
      </div>

      {/* Profile + Bio */}
      <div className="mb-20 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Yousuf Khan"
            className="h-80 w-80 rounded-3xl object-cover shadow-xl ring-1 ring-[var(--border-color)]"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[var(--text-main)]">
            A little about me
          </h2>

          <p className="mt-5 leading-8 text-[var(--text-secondary)]">
            I’m Yousuf Khan, a BCA student from Bangalore with a strong interest
            in full-stack web development. I enjoy building applications that
            combine good user experience with reliable backend architecture.
          </p>

          <p className="mt-4 leading-8 text-[var(--text-secondary)]">
            My goal is to become a software engineer with strong fundamentals in
            web development, databases, APIs, and scalable application design.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              Based in Bangalore
            </span>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              BCA Student
            </span>
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
              Open to internships
            </span>
          </div>
        </div>
      </div>

      {/* My Journey */}
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[var(--text-main)]">
            My journey
          </h2>

          <div className="mt-6 space-y-5 text-[var(--text-secondary)]">
            <p>
              I started with HTML, CSS, and JavaScript, and gradually moved into
              backend development, databases, and full-stack application
              architecture. What keeps me interested is solving real problems
              through software rather than just building interfaces.
            </p>

            <p>
              I enjoy understanding how applications work end-to-end — from the
              frontend experience to API design, database relationships,
              authentication, and deployment.
            </p>

            <p>
              My current focus is strengthening my backend skills, learning
              system design fundamentals, and building production-ready projects
              that reflect real software engineering practices.
            </p>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-[var(--text-main)]">
            Quick facts
          </h3>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                Name
              </p>
              <p className="mt-1 text-[var(--text-main)]">Yousuf Khan</p>
            </div>

            <div>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                Location
              </p>
              <p className="mt-1 text-[var(--text-main)]">
                Bangalore, India
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                Education
              </p>
              <p className="mt-1 text-[var(--text-main)]">
                Bachelor of Computer Applications
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                Focus
              </p>
              <p className="mt-1 text-[var(--text-main)]">
                Full-stack web development
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                Availability
              </p>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Open to internships
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      {/* <div className="mt-20 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-[var(--text-main)]">
            Technologies I work with
          </h2>

          <p className="mt-4 text-[var(--text-secondary)]">
            I enjoy working across the full stack and continuously improving my
            understanding of modern web technologies.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-transform duration-200 hover:-translate-y-1 ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div> */}

      {/* Development Approach */}
      <div className="mt-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[var(--text-main)]">
            How I approach development
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--text-main)]">
              Build with purpose
            </h3>
            <p className="mt-3 leading-7 text-[var(--text-secondary)]">
              I prefer projects that solve practical problems and improve my
              understanding of real-world software development.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--text-main)]">
              Keep learning
            </h3>
            <p className="mt-3 leading-7 text-[var(--text-secondary)]">
              I continuously strengthen fundamentals, build better projects, and
              learn technologies used in production environments.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--text-main)]">
              Focus on quality
            </h3>
            <p className="mt-3 leading-7 text-[var(--text-secondary)]">
              Clean code, responsive interfaces, maintainable architecture, and
              attention to detail matter as much as functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

