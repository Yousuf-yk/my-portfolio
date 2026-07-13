import React from 'react';


function Blog() {
  // Array holding your blog data. You can easily add future posts here.
  const blogs = [
    {
      id: 1,
      title: "How to Push Your Code to GitHub",
      description: "",
      date: "Recent uploaded", 
      readTime: "4 min read",
      link: "https://medium.com/@yk0574292/how-to-push-your-code-to-github-33dd2d49132e",
    }
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <h2 className="blog-heading">Latest Writing</h2>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <a 
              href={blog.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={blog.id} 
              className="blog-card"
            >
              <div className="blog-content">
                <div className="blog-meta">
                  <span>• {blog.date}</span>
                  <span className="dot">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc">{blog.description}</p>
                <div className="blog-read-more">
                  Read on Medium <span className="arrow">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;