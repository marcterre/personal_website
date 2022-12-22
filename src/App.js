import GlobalStyle from "./styles";
import Header from "./components/Header/index";
import About from "./components/About/index";
import ImageAlienInvasion from "./assets/AlienInvasion.svg";
// import Navgation from "./components/Navigation";

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <>
          <Header
            title="This is my universe"
            heading="Welcome to my universe"
          />
          <About aboutImageSrc={ImageAlienInvasion} aboutAlt="Alien Invasion" />
        </>
      </main>
    </>
  );
}

export default App;
