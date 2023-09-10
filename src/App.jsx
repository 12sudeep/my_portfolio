import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/about";
import Bot from "./components/bot";
import Hero from "./components/hero";
import Navbar from "./components/navbar";



function App() {
  return <div className="">
    <Router>
      <Navbar />
      <Bot />
      <Hero />
      <About />
    </Router>
  </div>;
}

export default App;
