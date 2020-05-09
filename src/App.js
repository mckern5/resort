import "./App.css"

import Error from './pages/Error'
//import logo from './logo.svg';
//import './App.css';
import Home from './pages/Home';
import React from "react";
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

function App() {
  return (
    <>
    <Home/>
    <Rooms/>
    <SingleRoom/>
    <Error/>
    </>
    
  
    );
}

export default App;
