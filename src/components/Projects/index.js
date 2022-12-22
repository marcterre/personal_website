import styled from "styled-components";

const quizAppURL = "https://github.com/marcterre/quiz_app";
const weatherActivitysAppURL =
  "https://github.com/marcterre/weather-activites-app";

export default function Projects() {
  return (
    <section>
      <h2>My Projects</h2>
      <ProjectPreview
        projectLink={quizAppURL}
        projectName="Quiz App"
        projectDescription="In our Recap Project Nr. 1 & 2 we had to code
       a little Quiz App and everytime we learned something new 
       i added more functions and dynamic to my App."
        projectImage={""}
        alt="Quiz App Preview"
      />
      {/* Have to add a Link below */}
      <ProjectPreview
        projectLink={""}
        projectName="Rick and Morty App"
        projectDescription="Our Recap Project 4 was a group project.
      I descided to code it a second time for myself. You can switch threw
      all the different characters from the series. Thanks to the 'Rick
      and Morty API' we have a bunch of them."
        projectImage={""}
      />
      <ProjectPreview
        projectLink={weatherActivitysAppURL}
        projectName="Weather & Activitys App"
        projectDescription="This is our Recap Project Nr. 4. You can
      add new Activitys and decide if its a 'Good-weather acitivy'.
      Beside the current weather is shown."
        projectImage={""}
        alt="Weather and Activitys App Preview"
      />
    </section>
  );
}

function ProjectPreview({
  projectImage,
  projectAlt,
  projectDescription,
  projectName,
  projectLink,
}) {
  return (
    <section>
      <a href={projectLink}>
        <ProjectPreviewContainer>
          <h2>{projectName}</h2>
          <img src={projectImage} alt={projectAlt} />
          <p>{projectDescription}</p>
        </ProjectPreviewContainer>
      </a>
    </section>
  );
}

const ProjectPreviewContainer = styled.div`
  border: 2px solid black;
`;
