// App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, useTheme } from "../src/components/layouts/themeContext";

import About from "./components/about/about";
import Bot from "./components/layouts/bot";
import Hero from "./components/home/hero";
import Navbar from "./components/navbar/navbar";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Project from "./components/projects/project";

function App() {
  const { theme } = useTheme(); // Use the useTheme hook to get the current theme

  // Dynamically set the body class based on the theme
  document.body.className = theme === "dark" ? "main-theme" : "light-theme";


  return (
    <><div className="container mx-auto w-full">
      <Router>
        <Navbar />
        <Bot />
        <Hero />
        <About />
        <Project />
        <Resume />
        <Contact />
      </Router>
    </div>
      <Footer /></>
  );
}

export default App;
