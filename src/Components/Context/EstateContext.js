import axios from "axios";
import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./../../firebase";
import { url, fetchApi } from '../../utils/fetchApi';
import { onSnapshot } from "firebase/firestore";
import { doc, setDoc } from 'firebase/firestore';

const RealEstate= createContext();

const RealEstateContext =({children})=>{

        const [user, setUser] = useState(null);
        const [watchlist, setWatchlist] = useState([]);
        const [loading, setLoading] = useState(false);
        const [alert, setAlert] = useState({
            open:false,
            message:"",
            type:"success",
            // visible:alertVisible
        })
        const [property, setProperty] = useState([]);
        // console.log(baseUrl)
    
        // const fetchProperty=async()=>{
        //         setLoading(true)
        //     const propertyForSale = await fetchApi(`${url}`);
        //     setLoading(true)
        //     setProperty(propertyForSale.hits);
        //     // console.log(propertyForSale.hits);
        //     setLoading(false);
        // }
        // useLayoutEffect(() => {
        //     fetchProperty();
        // }, [])
        
        
        useEffect(() => {
            onAuthStateChanged(auth,user =>{
                if(user){
                    setUser(user);
                }
                else{
                    setUser(null);
                }
            })
        }, [user])

  
    useEffect(() => {
        if(user){
          const propRef = doc(db,"watchlist",user.uid);
         var unSubscribe= onSnapshot(propRef,house=>{
              if(house.exists()){
                  setWatchlist(house.data().houses);
              }
              else{
                  console.log("No items in watchlist")
              }
          })

          return ()=>{
              unSubscribe();
          }
      }
      
      }, [user])
      
        

        
    return(
        <RealEstate.Provider value={{alert,setAlert,user,setUser,property,loading,watchlist,setWatchlist }}>
            {children}
        </RealEstate.Provider>
    )
}
export default RealEstateContext;

export const RealEstateState = () => {
    return useContext(RealEstate);
  };