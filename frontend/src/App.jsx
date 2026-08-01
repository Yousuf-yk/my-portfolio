import { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext.jsx';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Contact from './pages/contact';
import Skills from './pages/skill.jsx';
import Projects from './pages/project.jsx';
import Certificate from './pages/certificate.jsx';
import QuoteSection from './components/quoteSection.jsx';
import Blog from './pages/Blog.jsx';

function AppContent() {
  const { isBlurring } = useContext(ThemeContext);

  return (
    <div className={`app-wrapper ${isBlurring ? 'page-blur' : ''}`}>
      <Header />

      {/* Main content - 80% width */}
      <div className="mx-auto w-full px-[2px] max-w-6xl">
        <main>
          <Home />
          <Projects />
          <Blog />
          <Skills />
          <Certificate />
          <Contact />
        </main>
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