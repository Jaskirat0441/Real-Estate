import React, { useEffect, useState } from 'react'
import {  Container, Row } from 'react-bootstrap';
import Property from './Property';
import { url, fetchApi } from '../utils/fetchApi';
import { RealEstateState } from './Context/EstateContext';
import { data } from '../data';

const PropertyListing = () => { 
   const {loading}= RealEstateState();
        const property = data;
//    console.log(property)
  return (
    <Container className='m-5'>
      <h2 className='text-center my-5'>Villa,Home For Everyone</h2>
       <Row xs={1} md={3} className="g-4">
      {property.length>0 && property.map((property) => (

         <Property key={property.id} property={property}/>
      ))}
    </Row>
    </Container>
  )
}

export default PropertyListing