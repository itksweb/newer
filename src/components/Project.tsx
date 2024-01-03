import { useEffect, useState } from "react";
import imd from "../assets/project.jpg";
import { Repo } from "../models/types";

const Project: React.FC<{ repo: Repo }> = ({ repo }) => {
  const [haveImg, setHaveImg] = useState(false);
  const repo_img: string = `https://raw.githubusercontent.com/itksweb/${repo.name}/${repo.default_branch}/screenshot.jpg`;

  useEffect(() => {
    const getImage = (url: string) => {
      fetch(url)
        .then((res) => {
          if (res.ok) setHaveImg(true);
        })
        .catch((e) => console.log("juy ", e.message));
    };
    getImage(repo_img);
  }, []);

  return (
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <div className="project-wrapper__text load-hidden">
          <h3 className="project-wrapper__text-title text-capitalize">
            {repo.name.split("-").join(" ")}
          </h3>
          <div>
            <p className="mb-4">
              {repo.description
                ? repo.description
                : `
                Demonstrate in this description the skills of a programmer: such
                as having commitment, having perseverance and accepting
                alternative solutions. Remember that being a portfolio you are not
                selling the project, you are selling yourself, it reflects the
                resources used: Frameworks, libraries, platforms, etc.
              `}
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--hero"
            href={repo.homepage}
          >
            See Live
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn text-color-main"
            href={repo.html_url}
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="project-wrapper__image load-hidden">
          <a rel="noreferrer" href="#!" target="_blank">
            <div
              data-tilt
              data-tilt-max="4"
              data-tilt-glare="true"
              data-tilt-max-glare="0.5"
              className="thumbnail rounded js-tilt"
            >
              <img
                alt={repo.name}
                className="img-fluid"
                src={haveImg ? repo_img : imd}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
