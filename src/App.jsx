import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/about/about";
import Bot from "./components/layouts/bot";
import Hero from "./components/home/hero";
import Navbar from "./components/navbar/navbar";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Project from "./components/projects/project";



function App() {




  return <div className="container mx-auto w-full">
    <Router>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </Router>
  </div>;
}

export default App;
