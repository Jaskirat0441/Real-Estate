import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import RealEstateContext from './Components/Context/EstateContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <RealEstateContext>
    <App />
    </RealEstateContext>
</BrowserRouter>
  </React.StrictMode>
);
