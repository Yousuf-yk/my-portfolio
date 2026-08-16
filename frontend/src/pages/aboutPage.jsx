import React from 'react';
import profileImg from '../assets/photos/yousufimg2.jpeg'; // replace with your image
import { TextAnimationProvider, AnimatedText } from '../context/textAnimation';

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
    // Wrap the entire page content in the Provider
    <TextAnimationProvider delaySpeed={0.01}>
      <section className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
        
        {/* Hero */}
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-emerald-600">
            <AnimatedText as="span" text="About me" />
          </span>

          <AnimatedText 
            as="h1" 
            className="text-4xl font-bold text-[var(--text-main)] md:text-6xl"
            text="Full-stack developer focused on building useful products"
          />

          <AnimatedText 
            as="p"
            className="mx-auto mt-6 max-w-3xl text-left text-lg leading-8 text-[var(--text-secondary)]"
            text="I build clean, responsive, and practical web applications with React, Node.js, Express, and PostgreSQL while preparing for software engineering internships and full-time developer roles."
          />
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
            <AnimatedText 
              as="h2" 
              className="text-3xl font-bold text-[var(--text-main)]"
              text="A little about me"
            />

            <AnimatedText 
              as="p"
              className="mt-5 leading-8 text-[var(--text-secondary)]"
              text="I’m Yousuf Khan, a student from Bangalore with a strong interest in full-stack web development. I enjoy building applications that combine good user experience with reliable backend architecture."
            />

            <AnimatedText 
              as="p"
              className="mt-4 leading-8 text-[var(--text-secondary)]"
              text="My goal is to become a software engineer with strong fundamentals in web development, databases, APIs, and scalable application design."
            />

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                Based in Bangalore
              </span>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Student
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
            <AnimatedText 
              as="h2" 
              className="text-3xl font-bold text-[var(--text-main)]"
              text="My journey"
            />

            <div className="mt-6 space-y-5 text-[var(--text-secondary)]">
              <AnimatedText 
                as="p"
                text="I started with HTML, CSS, and JavaScript, and gradually moved into backend development, databases, and full-stack application architecture. What keeps me interested is solving real problems through software rather than just building interfaces."
              />

              <AnimatedText 
                as="p"
                text="I enjoy understanding how applications work end-to-end — from the frontend experience to API design, database relationships, authentication, and deployment."
              />

              <AnimatedText 
                as="p"
                text="My current focus is strengthening my backend skills, learning system design fundamentals, and building production-ready projects that reflect real software engineering practices."
              />
            </div>
          </div>

          {/* Quick Facts */}
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm">
            <AnimatedText 
              as="h3" 
              className="text-2xl font-semibold text-[var(--text-main)]"
              text="Quick facts"
            />

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm font-medium text-[var(--text-secondary)]">Name</p>
                <p className="mt-1 text-[var(--text-main)]">Yousuf Khan</p>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--text-secondary)]">Location</p>
                <p className="mt-1 text-[var(--text-main)]">Bangalore, India</p>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--text-secondary)]">Education</p>
                <p className="mt-1 text-[var(--text-main)]">Bachelor of Computer Applications</p>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--text-secondary)]">Focus</p>
                <p className="mt-1 text-[var(--text-main)]">Full-stack web development</p>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--text-secondary)]">Availability</p>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Open to internships
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Approach */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <AnimatedText 
              as="h2" 
              className="text-3xl font-bold text-[var(--text-main)]"
              text="How I approach development"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm">
              <AnimatedText 
                as="h3" 
                className="text-xl font-semibold text-[var(--text-main)]"
                text="Build with purpose"
              />
              <AnimatedText 
                as="p"
                className="mt-3 leading-7 text-[var(--text-secondary)]"
                text="I prefer projects that solve practical problems and improve my understanding of real-world software development."
              />
            </div>

            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm">
              <AnimatedText 
                as="h3" 
                className="text-xl font-semibold text-[var(--text-main)]"
                text="Keep learning"
              />
              <AnimatedText 
                as="p"
                className="mt-3 leading-7 text-[var(--text-secondary)]"
                text="I continuously strengthen fundamentals, build better projects, and learn technologies used in production environments."
              />
            </div>

            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm">
              <AnimatedText 
                as="h3" 
                className="text-xl font-semibold text-[var(--text-main)]"
                text="Focus on quality"
              />
              <AnimatedText 
                as="p"
                className="mt-3 leading-7 text-[var(--text-secondary)]"
                text="Clean code, responsive interfaces, maintainable architecture, and attention to detail matter as much as functionality."
              />
            </div>
          </div>
        </div>
        
      </section>
    </TextAnimationProvider>
  );
}

export default AboutPage;