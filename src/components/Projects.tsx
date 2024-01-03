import { useEffect } from "react";
import { Repo } from "../models/types";
import Project from "./Project";

const Projects: React.FC<{ gitData: Repo[] }> = ({ gitData }) => {
  useEffect(() => {
    gitData.map((repo) =>
      console.log(
        `https://raw.githubusercontent.com/itksweb/${repo.name}/${repo.default_branch}/screenshot.jpg`
      )
    );
  }, []);
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          {gitData.map((repo) => (
            <Project key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
