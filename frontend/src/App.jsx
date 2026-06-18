import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Skills from "./pages/skill.jsx"
import Projects from "./pages/project.jsx"
function App(){
  return(
    <>
    <Header />
    <Home />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App;