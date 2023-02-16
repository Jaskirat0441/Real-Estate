import React from 'react'
import { Container } from 'react-bootstrap'
import { data } from '../data';
import { RealEstateState } from './Context/EstateContext';
import {AiFillDelete} from "react-icons/ai"
import { db } from '../firebase';
import { doc,setDoc } from 'firebase/firestore';

const WatchListPage = () => {
  const property = data;
  const {setAlert,watchlist,user}= RealEstateState();

  
  const removeFromWatchlist = async (prop) => {
    const propRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        propRef,
        { houses: watchlist.filter((wish) => wish !== prop?.id) },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${prop.agency.name} Removed from the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  return (
        
    <Container className='bg-secondary p-4 my-4'>
       <h1 className='text-center my-5' style={{ fontSize: "30px", textShadow: "0 0 5px black"}}>
                    Watchlist
                  </h1>
                  <hr/>
      {property ? property.map((val,idx) =>{
        if(watchlist.includes(val.id)){
          return (
            <div className="d-flex justify-content-around" key={idx}>
            <div>
              {idx}
            </div>
          <div className="property-data ">
           {val.agency.name}
          </div>

          <div className="property-action">
            <AiFillDelete  onClick={() => removeFromWatchlist(val)}
                            />
          </div>
        </div>
           )
        }
      }) : ""}
    </Container>
  )
}

export default WatchListPage