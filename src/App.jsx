import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/about/about";
import Bot from "./components/home/bot";
import Hero from "./components/home/hero";
import Navbar from "./components/navbar/navbar";
import Resume from "./components/resume/resume";



function App() {
  return <div className="container mx-auto">
    <Router>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Resume />
    </Router>
  </div>;
}

export default App;
