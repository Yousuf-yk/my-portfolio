import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext.jsx';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Projects from './pages/project.jsx';
import Blog from './pages/Blog.jsx';
import Skills from './pages/skill.jsx';
import Certificate from './pages/certificate.jsx';
import Contact from './pages/contact';
import QuoteSection from './components/quoteSection.jsx';

function AppContent() {
  const { isBlurring } = useContext(ThemeContext);

  return (
    <div className={`app-wrapper ${isBlurring ? 'page-blur' : ''}`}>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-[2px] pt-24">
        <Home />
        <Projects />
        <Skills />
        <Blog />
        <Certificate />
        <Contact />
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
      <AppContent />
    </ThemeProvider>
  );
}

export default App;