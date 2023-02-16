import React,{useState} from 'react'
import {Modal,Button,Form, Container} from 'react-bootstrap';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {auth} from '../../firebase'
import { RealEstateState } from '../Context/EstateContext';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {alert,setAlert} = RealEstateState();
  const navigate = useNavigate();


  const handleLogin = async (e)=>{
    e.preventDefault();
   if(!password || !email){
    setAlert({
      open:true,
      message:"Fill data Properly",
      type:'danger'
    })
    return;
}
try {
  const res= await signInWithEmailAndPassword(auth,email,password);
  setAlert({
    open: true,
    message: `Login Successful. Welcome ${res.user.email}`,
    type: "success",
  });
  navigate("/");
  
} catch (err) {
  setAlert({
    open:true,
    message:err.message,
    type:'danger'
  })
  return;
}

  }
  return (

    <Container className='my-5'>
      <h1 className='text-center'>Login Page</h1>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={(e)=>handleLogin(e)}>
        Submit
      </Button>
    </Form>
    <div className='text-secondary'>Don't have an account yet ? <Link to='/register' className='text-success underline'>Register</Link> 
            </div>


    </Container>






  )
}

export default LoginPage