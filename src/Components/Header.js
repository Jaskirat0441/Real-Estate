import React, { useState } from 'react'
import {Container,Nav,Navbar,Carousel ,Button } from 'react-bootstrap';
import { RealEstateState } from './Context/EstateContext';
import "./Style/Header.css"
import {BiUserCircle} from "react-icons/bi"
import { Link } from 'react-router-dom';
import "./Style/Header.css"


const Header = () => {

    const {user}= RealEstateState();
    
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Link  className='navbar-brand' to="/">Geniobits  Real Estate</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/watchlist">WatchList</Link>
         
        </Nav>
        <Nav>
          {!user ? 
        <>
                  <Link className='nav-link' to="/login"><Button>Login</Button></Link>
        </>
         : <Link to="/user" >
          <BiUserCircle className='text-light fs-3' />
          </Link>
}
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Carousel.Item className='banner-container'>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

</>
  )
}

export default Header