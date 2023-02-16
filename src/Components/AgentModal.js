import React, { useState,useRef } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import { RealEstateState } from './Context/EstateContext';


const AgentModal = (props) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const form = useRef();
  const {alert,setAlert} = RealEstateState();

  const contactAgent =(e)=>{
    if(!email || !name || !message ) {
      e.preventDefault();
    emailjs.sendForm('service_bfx5mm8', 'template_k3851es', form.current, 'KDoEesQbOUdGj-JbH')
      .then((result) => {
          setAlert({
      open:true,
      message:`Message Send Succesfully ${result.text}`,
      type:'success'
    })
      }, (error) => {
          console.log(error.text);
          setAlert({
            open:true,
            message:`Error ${error.text}`,
            type:'danger'
          })
      });
      // props.show=
    }
    else{
      setAlert({
        open:true,
        message:"Fill Data Properly ",
        type:'danger'
      })
    }
  }
  return (
   
    <Modal
      {...props}    
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
      Contact Agent
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <Form ref={form} onSubmit={contactAgent}>
       <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" name="user_name"  value={name} onChange={(e)=>setName(e.target.value)}/>
        
      </Form.Group> <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="user_email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        
      </Form.Group>
      <Form.Label>Message</Form.Label>

      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          name="message"
          placeholder="Leave a query here"
          value={message} 
          onChange={(e)=>setMessage(e.target.value)}
          style={{ height: '100px' }}
        />
      </FloatingLabel>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="message" />
      </Form.Group> */}
      
      <Button variant="primary" type="submit" className='mt-2' value="Send"  >
        Submit
      </Button>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AgentModal