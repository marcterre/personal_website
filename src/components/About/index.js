import AboutArticle from "./AboutArticle";
import AboutTags from "./AboutTags";

export default function About({ aboutImageSrc, aboutAlt }) {
  return (
    <>
      <AboutArticle
        aboutTopHeading="About me"
        aboutHeading="Landing..."
        aboutTextContent=" I was 16 when i started working as a carpenter. Then i studied for 2
    semester architecure until i recognized its not the job i thought it
    was. I ended up working in the pest control. Beside the fact that i love
    animals i continued working there for the last 3,5 years. Finally i did
    the step i wanted to do for a long time - learning web development full
    time!
    <br />
    Here you can follow my journey."
      />
      <img src={aboutImageSrc} alt={aboutAlt}></img>
      <AboutTags />
    </>
  );
}
