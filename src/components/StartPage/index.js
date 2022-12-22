import Header from "../Header";
import About from "../About";
import ImageAlienInvasion from "../../assets/AlienInvasion.svg";

export default function StartPage() {
  return (
    <>
      <Header title="This is my universe" heading="Welcome to my universe" />
      <About aboutImageSrc={ImageAlienInvasion} aboutAlt="Alien Invasion" />
    </>
  );
}
