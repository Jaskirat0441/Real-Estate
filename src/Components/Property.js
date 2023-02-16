import React, { useState,useEffect } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RealEstateState } from "./Context/EstateContext";
import "./Style/property.css";

const Property = ({
  property: {
    coverPhoto,
    price,
    name,
    contactName,
    rentFrequency,
    location,
    rooms,
    title,
    baths,
    area,
    id,
    agency,
    isVerified,
    externalID,
  },
}) => {
  // console.log(property);

    // const dispatch= useDispatch();
    // const navigate = useNavigate();
    const {user,setAlert}= RealEstateState();

    const navigate = useNavigate();

    const handleAdd=(data)=>{
        if(user){
            // dispatch(showAlert(true));
            setAlert({
              open:true,
              message:"Successfully Added",
              type:'Success'
            })

        }
        else{
          setAlert({
            open:true,
            message:"Please Login to Save Property",
            type:'warning'
          })

        }
    }
  return (
    <Col  onClick={() => navigate(`/property/${id}`)}>
      <Card>
        <Card.Img
          variant="top"
          src={coverPhoto ? coverPhoto.url : "DefaultImage"}
        />
        <Card.Body>
          <Card.Title>{agency.name.toUpperCase()}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Price : {price}</ListGroup.Item>
            <ListGroup.Item>Agent Name : {contactName}</ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <Button variant="outline-success" onClick={() => handleAdd(agency.name)}>Save Property</Button>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted d-flex justify-content-between">
            <span>Built At {agency.createdAt.substring(0, 10)}</span>
            <span> Approved by {agency.licenses[1].authority}</span>
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Property;
