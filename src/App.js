import GlobalStyle from "./styles";
import Header from "./components/Header/index";
import About from "./components/About/index";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import ImageAlienInvasion from "./assets/AlienInvasion.svg";
// import Navgation from "./components/Navigation";

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
    </>
  );
}

export default App;
