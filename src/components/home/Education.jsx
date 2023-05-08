import React from 'react';
import { Jumbotron } from './migration';

const Education = ({ education }) => {
  const { heading, data } = education;

  return (
    <Jumbotron className="m-0 bg-light" id="education">
      <h2 className="display-4 mb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="container row" style={{ justifyContent: "center", alignItems: "center" }}>
          {/* <div className="col-lg-6 d-flex" style={{justifyContent: "right"}}> */}
          <div className="col-lg-3 text-center">
            <img
              src={data.img}
              alt="seal"
              width={data.imgWidth}
              height={data.imgHeight}
              className='m-5'
            />
          </div>
          <div className="col-lg-5 text-center">
            <h4>{data.name}</h4>
            <p className='lead'>Bachelor of Science, Computer Science</p>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Education;
