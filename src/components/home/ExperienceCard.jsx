import React from 'react';

import {
  Col,
  Card,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  const {
    role,
    location,
    date,
    img,
    imgHeight,
    highlights,
    link
  } = data;

  return (<Col md={6}>
    <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Body>
      <a href={link} target="_blank">
      <img
          src={img}
          alt={`logo`}
          className='mt-5 mb-5'
          Height={imgHeight}
        />
        </a>
        {/* <div className='d-flex' style={{justifyContent:"space-between"}}> */}
        <div className='row'>
        <Card.Title as="h5" className='col-lg-6'>{role} </Card.Title>
        <div className='col-lg-6' style={{textAlign: "right"}}>
        <Card.Text style={{marginBottom: 0}}>{date}</Card.Text>
        <Card.Text>{location}</Card.Text>
        </div>
        </div>
        {/* <div className='row'>
        <Card.Text className='col-lg-12' style={{textAlign: "right"}}>{location} </Card.Text>
        </div> */}
        <hr />
        {highlights.sort().map((highlight, index)=> {
          return <span key={index} className='badge bg-light text-dark' style={{fontWeight: 400}}>{highlight}</span>
        })}
      </Card.Body>
    </Card>
  </Col>)
}

export default ExperienceCard;