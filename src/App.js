import { Route, Routes } from 'react-router-dom';
import './App.css';
import AlertShow from './Components/AlertShow';
import LoginPage from './Components/Authentication/LoginPage';
import SignupPage from './Components/Authentication/SignupPage';
import WatchList from './Components/WatchListPage';
import Header from './Components/Header';
import PropertyListing from './Components/PropertyListing';
import UserPage from './Components/UserPage';
import SingleProperty from './Components/SingleProperty';

function App() {
  return (
    <>
     <Header/>
     <AlertShow/>
<Routes>
<Route path="/" element={ <PropertyListing/>}/>
<Route path="/property/:propId" element={  <SingleProperty/>}/>
<Route path="/login" element={ <LoginPage/>}/>
<Route path="/user" element={ <UserPage/>}/>
<Route path="/register" element={ <SignupPage/>}/>
<Route path="/watchlist" element={ <WatchList/>}/>
</Routes>
  </>
  );
}

export default App;
