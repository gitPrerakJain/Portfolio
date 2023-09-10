import styles from "./App.module.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);
  return (
    <div className={styles.App}>
      <Navbar onLanguageChange={(lang) => i18n.changeLanguage(lang)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
