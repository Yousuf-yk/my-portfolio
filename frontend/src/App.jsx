import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
import ScrollToTop from "./ScrollToTop";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import QuoteSection from "./components/ui/quoteSection.jsx";
import Contact from "./components/ui/contact.jsx";
import Skills from "./components/ui/skill.jsx";
import Home from "./components/ui/home.jsx";
import Projects from "./components/ui/project.jsx";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/aboutPage.jsx";

import NotFound from "./pages/notFound.jsx";
import BlogAndCertificates from "./components/ui/mega.jsx";

import SmoothScroll from "./components/animation/scrollanimation.jsx";

function HomePage() {
  return (
    <>
     <Home />
      <Projects />
      <Skills />
      <BlogAndCertificates/>
      <Contact />
    </>
  );
}

function AppContent() {
  const { isBlurring } = useContext(ThemeContext);

  return (
    <div className={`app-wrapper ${isBlurring ? "page-blur" : ""}`}>

      {/* Header MUST stay outside ScrollSmoother */}
      <Header />

      <SmoothScroll>
        <main className="mx-auto w-full max-w-6xl px-[2px] pt-24">
          <ScrollToTop />

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
      </SmoothScroll>

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