import React from "react";

import { Jumbotron } from "./migration";

const AboutMe = ({ heading, message, resume }) => {
  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className={`col-lg-12`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
