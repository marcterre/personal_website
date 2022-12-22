import GlobalStyle from "./styles";
import Header from "./components/Header/index";
import About from "./components/About/index";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ImageAlienInvasion from "./assets/AlienInvasion.svg";

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Header title="This is my universe" heading="Welcome to my universe" />
        <About aboutImageSrc={ImageAlienInvasion} aboutAlt="Alien Invasion" />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
