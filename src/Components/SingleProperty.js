import React,{useState} from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { RealEstateState } from './Context/EstateContext';
import "./Style/Header.css"
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaWhatsapp} from "react-icons/fa";
import AgentModal from './AgentModal';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { data } from '../data';


const SingleProperty = () => {
  const { propId } = useParams();
  const {loading,setAlert,watchlist,user}= RealEstateState();
  const [modalShow, setModalShow] = useState(false);


    const property = data;
    // console.log(property);
    const singleProp= property && property.find((prop)=>prop.id==propId);
    // console.log(singleProp);

 
// console.log(singleProp.id)
    const inWatchList = watchlist.includes(singleProp?.id);
    // const inWatchlist = watchlist.includes(coin?.id);
    console.log(inWatchList)
    const saveProperty =async(singleProp)=>{
    let propId= singleProp.id;
      if(user){
        const propRef=doc(db,"watchlist",user.uid);
        try{
          await setDoc(
            propRef,
            { houses: watchlist ? [...watchlist, propId] : [propId] },
          );
            setAlert({
              open:true,
              message:`${singleProp.agency.name} Added to Watchlist`,
              type:'success'
            })
        }
        catch(error){
          // dispatch(showAlert(true));
          setAlert({
            open:true,
            message:`Error -${error}`,
            type:'warning'
          })
        }
      }
      else{
        setAlert({
          open:true,
          message:"Please Login to Save Property in Watchlist",
          type:'warning'
        })

  }

  }
   return (

    <Container className='my-5'>
     
      <h2 className='p-2 text-secondary m-2'>

      Product Details : {singleProp.agency.name}
      </h2>
     
      <div className="upper-details d-flex " >
       <div className='img-carausel '>
        <img src={singleProp.coverPhoto.url} className="single-prop-img"  alt="pic" />
        
      </div>

       
      <div className="property-details ms-5 flex-grow-1 d-flex justify-content-between flex-column">
      
      <div className="prop-title fs-2">
            {singleProp.agency.name}
          </div> 
          <div className=" d-flex fs-5 justify-content-between">
             <div>
           Cost : <span className="text-success">
             {singleProp.price}
            </span>
            </div> 
            <div>

            CompletionStatus : <span className="text-success">
             {singleProp.completionStatus }</span>
            </div>
          </div> 
          {/* 2nd */}
                    <div className=" d-flex fs-5 justify-content-between ">
            <div>
           Area : <span className="text-success">
             {singleProp.area}
            </span>
            </div>
            Furnishing : <span className="text-success">
             {singleProp.furnishingStatus || "Semi-Furnished"}</span>
            <div>
            </div>
          </div>  
         
      <ListGroup variant="flush" className='my-5'>
        <ListGroup.Item>
        Created At : {singleProp.agency.createdAt.substring(0, 10)}
        </ListGroup.Item>
      <ListGroup.Item>
        <Button variant="outline-success" onClick={() => saveProperty(singleProp)}> {inWatchList ? "Remove From WatchList " : "Add to WatchList" }</Button>
        </ListGroup.Item> 
      </ListGroup>
        
      </div>
      </div> 
      <ListGroup variant="flush" className='my-5'>
        <h1 className='text-secondary'>Agent Information</h1>
            <ListGroup.Item>Agent : {singleProp.ownerAgent.name}</ListGroup.Item>
            <ListGroup.Item>Agent image :<img src={singleProp.ownerAgent.user_image} className="img-thumbnail agent-image" alt="..."></img></ListGroup.Item>
            <ListGroup.Item>
              Phone <BsFillTelephoneFill/> : {singleProp.phoneNumber.mobile}
            </ListGroup.Item>
              <ListGroup.Item>
            Whatsapp <FaWhatsapp/> : {singleProp.phoneNumber.whatsapp}
            </ListGroup.Item>
            <ListGroup.Item>
            <Button variant="outline-success" onClick={() => setModalShow(true)}>Contact Agent</Button>
            </ListGroup.Item>
            <AgentModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        // agentDetails={singleProp}
      />
          </ListGroup>
    </Container>
  )
      // > : return ( <>Null </>)}
}

export default SingleProperty