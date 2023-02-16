import { signOut } from 'firebase/auth';
import React from 'react'
import { Container,Button,Table, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { RealEstateState } from './Context/EstateContext';
import {BiUserCircle} from "react-icons/bi"
import "./Style/Header.css"

const UserPage = () => {
    const { user,alert,setAlert} = RealEstateState();
  const navigate = useNavigate();

// console.log(user)
    const handleLogOut=()=>{
        signOut(auth);
        setAlert({
          open:true,
          message:"Logout successful",
          type:'success'
        })
  navigate("/");

    }

  return (
    <Container className='my-5'>

        {user ? <>
           <h1 className='text-center'>Profile Page</h1>
           <div className='user-info d-flex justify-content-evenly m-5'>
            <div className="user-image">
           {user.photoURL ?<img  src={user.photoURL }
            alt={user.displayName || user.email} /> : <BiUserCircle className='user-img'/>
        }
            </div>
            <div className="user-data ">

            <ListGroup className=''>
      <ListGroup.Item>Name: { user.displayName ||   "John Doe"}</ListGroup.Item>
      <ListGroup.Item>Email:{ user.email}</ListGroup.Item>
      <ListGroup.Item>Created At : { user.metadata.creationTime}</ListGroup.Item>
    </ListGroup>

            
    
            </div>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto my-5">
  <button className="btn btn-dark" type="button" onClick={() =>handleLogOut() }>Logout</button>
</div>
        

            </> : "Login First"}
    </Container>
  )
}

export default UserPage