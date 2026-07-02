// import Header from "./components/header"
// import Footer from "./components/footer"
// import Home from "./pages/home"
// import Contact from "./pages/contact"
// import Skills from "./pages/skill.jsx"
// import Projects from "./pages/project.jsx"
// function App(){
//   return(
//     <>
//     <Header />
//     <Home />
//     <Skills />
//     <Projects />
//     <Contact />
//     <Footer />
//     </>
//   )
// }

// export default App;


import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Skills from "./pages/skill.jsx"
import Projects from "./pages/project.jsx"

// 1. Create an inner component to consume the theme context
function AppContent() {
  const { isBlurring } = useContext(ThemeContext);

  return (
    // 2. Apply the blur class dynamically to the wrapper
    <div className={`app-wrapper ${isBlurring ? 'page-blur' : ''}`}>
      <Header />
      {/* Grouping your page sections in a main tag is good semantic HTML */}
      <main>
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// 3. Wrap the inner component with your ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;