import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

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
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  const [selected, setSelected] = useState("yes");

  function addComments(comment) {
    setComments((oldComments) => [
      {
        ...comment,
        id: crypto.randomUUID(),
      },
      ...oldComments,
    ]);
  }

  const [checkboxOutput, setCheckboxOutput] = useState("");

  function handleRadioChange(event) {
    setSelected(event.target.value);
    // console.log(event.target.value);
    // not working below
    setCheckboxOutput("Nope");
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
          handleRadioChange={handleRadioChange}
          selected={selected}
        />
        <CommentList comments={comments} checkboxOutput={checkboxOutput} />
      </main>
      <Footer />
    </>
  );
}

export default App;
