import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './context/ThemeContext.jsx';

import Header from './components/layout/header';
import Footer from './components/layout/footer';
import QuoteSection from './components/ui/quoteSection.jsx';

import Home from './components/ui/home.jsx';
import Projects from './components/ui/project.jsx'; // homepage preview (2 projects)
import ProjectsPage from './pages/ProjectsPage'; // new page with all projects
import ContactPage from './pages/ContactPage'; // new page with contact form
import AboutPage from './pages/aboutPage.jsx'; // new page with about me content

import NotFound from './pages/notFound.jsx';
import Blog from './components/ui/Blog.jsx';
import Skills from './components/ui/skill.jsx';
import Certificate from './components/ui/certificate.jsx';
import Contact from './components/ui/contact.jsx';



function HomePage() {
  return (
    <>
      <Home />
      <Projects />
      <Skills />
      <Blog />
      <Certificate />
      <Contact />
    </>
  );
}

function AppContent() {
  const { isBlurring } = useContext(ThemeContext);

  return (
    <div className={`app-wrapper ${isBlurring ? 'page-blur' : ''}`}>
      <Header />

      <main className="mx-auto w-full max-w-6xl px-[2px] pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </main>

      <div className="mx-auto w-full max-w-6xl px-[2px]">
        <QuoteSection />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;