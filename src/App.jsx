import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/about";
import Bot from "./components/bot";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Resume from "./components/resume";



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
