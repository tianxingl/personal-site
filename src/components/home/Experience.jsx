// import React from 'react';
// import ExperienceCard from "./ExperienceCard";
// import { Jumbotron } from './migration';
// import {
//   Container,
//   Row,
// } from "react-bootstrap";

// const Experience = ({ experiences }) => {
//   return (
//     <section className="section">
//       <Container>
//         <Jumbotron className="bg-white">
//           <h2 className="display-4 mb-5 text-center">
//             {experiences.heading}
//           </h2>
//           <Row>
//             {
//               experiences.data.map((data, index) => {
//                 return <ExperienceCard key={index} data={data} />
//               })
//             }
//           </Row>
//         </Jumbotron>
//       </Container>
//     </section>
//   );
// }

// export default Experience;

import React from 'react';
import { Jumbotron } from './migration';

const Experience = ({ experiences }) => {
  const { heading, data } = experiences;

  return (
    <Jumbotron className="m-0" id="experience">
      <h2 className="display-4 mb-5 text-center">{heading}</h2>
      {data.map((experience, index) => {
        return <div className="row" key={index}>
          <div className="container d-flex" style={{ justifyContent: "center", alignItems: "center" }}>
            <img
              src={experience.img}
              alt={`logo-${index}`}
              style={{ margin: "7em" }}
            />
            <div>
              <h4>{experience.role}</h4>
              <p className='lead'>Bachelor of Science, Computer Science</p>
            </div>
          </div>
        </div>
      })}
    </Jumbotron>
  );
};

export default Experience;
