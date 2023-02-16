import React from 'react';
import {Alert} from 'react-bootstrap';
import { RealEstateState } from './Context/EstateContext';
import "../Components/Style/Header.css"

function AlertShow() {
const {alert,setAlert} = RealEstateState()
// console.log(alert);

    if (alert.open) {
        setTimeout(()=>{
          setAlert({open:false})
        },3000)
}

    return (
    alert.open? 
        <Alert key={alert.type} variant={alert.type} className='text-center alert-geniobits'>
        {alert.message}
        </Alert>
        : ""
    );
  }

export default AlertShow