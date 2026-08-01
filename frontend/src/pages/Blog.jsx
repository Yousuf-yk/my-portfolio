import React from 'react';

function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'How to Push Your Code to GitHub',
      description:
        'A step-by-step guide on initializing a repository, connecting a remote, and pushing your local code to GitHub using Git.',
      date: 'Recently uploaded',
      readTime: '4 min read',
      link: 'https://medium.com/@yk0574292/how-to-push-your-code-to-github-33dd2d49132e',
    },
  ];

  return (
    <section id='blog' className='mx-auto max-w-4xl px-6 py-24'>
      <div className='mb-12 text-center'>
        <p className='mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-600'>
          Writing
        </p>

        <h2 className='text-4xl font-bold text-gray-900 md:text-5xl'>
          Latest writing
        </h2>

        <p className='mx-auto mt-4 max-w-2xl text-gray-600'>
          Technical articles and practical guides based on what I learn while
          building software.
        </p>
      </div>

      <div className='grid gap-8'>
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.link}
            target='_blank'
            rel='noopener noreferrer'
            className='group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
          >
            <div className='mb-4 flex items-center gap-2 text-sm text-gray-500'>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>

            <h3 className='mb-4 text-2xl font-semibold text-gray-900 transition-colors duration-200 group-hover:text-emerald-700'>
              {blog.title}
            </h3>

            <p className='leading-7 text-gray-600'>
              {blog.description}
            </p>

            <div className='mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-all duration-200 group-hover:gap-3'>
              Read on Medium
              <span>→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Blog;