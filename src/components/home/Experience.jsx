import ExperienceCard from "./ExperienceCard";

import React from 'react';
import { Jumbotron } from './migration';

const Experience = ({ experiences }) => {
  const { heading, data } = experiences;

  return (
    <Jumbotron className="m-0" id="experiences">
      <h2 className="display-4 mb-5 text-center">{heading}</h2>
      <div className="row">
      {data.map((experienceData, index) => {
        return <ExperienceCard key={index} data={experienceData}></ExperienceCard>
      })}
      </div>
    </Jumbotron>
  );
};

export default Experience;
