import { useState } from "react";
import GlobalStyle from "./styles";
import Header from "./components/Header/index";
import About from "./components/About/index";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Form from "./components/Form";
import CommentList from "./components/Comment/CommentList";
import Footer from "./components/Footer";

import ImageAlienInvasion from "./assets/AlienInvasion.svg";

function App() {
  const [comments, setComments] = useState([]);

  function addComments(comment) {
    setComments((oldComments) => [
      ...oldComments,
      {
        ...comment,
        id: crypto.randomUUID(),
      },
    ]);
  }
  return (
    <>
      <GlobalStyle />
      <main>
        <Header title="This is my universe" heading="Welcome to my universe" />
        <About aboutImageSrc={ImageAlienInvasion} aboutAlt="Alien Invasion" />
        <Projects />
        <Contact />
        <Form
          onSubmit={addComments}
          labelAnimals="Whats your favorite animal?"
        />
        <CommentList comments={comments} />
      </main>
      <Footer />
    </>
  );
}

export default App;
