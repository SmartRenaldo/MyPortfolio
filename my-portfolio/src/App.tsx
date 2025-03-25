import React from "react";
import Layout from "./components/sections/Layout";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import useScrollspy from "./hooks/useScrollspy";
import Education from "./components/sections/Education";

const App: React.FC = () => {
  const activeSection = useScrollspy(
    ["home", "projects", "experience", "skills", "education", "contact"],
    100
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout activeSection={activeSection} scrollToSection={scrollToSection}>
      <Hero scrollToSection={scrollToSection} />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </Layout>
  );
};

export default App;
