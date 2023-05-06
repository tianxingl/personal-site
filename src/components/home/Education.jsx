import React from 'react';
import { Jumbotron } from './migration';

const Education = ({ education }) => {
  const { heading, data } = education;

  return (
    <Jumbotron className="m-0 bg-light" id="education">
      <h2 className="display-4 mb-5 text-center">{heading}</h2>
      <div className="container d-flex" style={{ justifyContent: "center", alignItems: "center" }}>
          <img
            src={data.img}
            alt="seal"
            width={data.imgWidth}
            height={data.imgHeight}
            style={{ margin: "0 7em" }}
          />
          <div>
            <h4>{data.name}</h4>
            <p className='lead'>Bachelor of Science, Computer Science</p>
          </div>
      </div>
    </Jumbotron>
  );
};

export default Education;
