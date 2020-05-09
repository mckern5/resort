import "./App.css"

import Error from './pages/Error'
//import logo from './logo.svg';
//import './App.css';
import Home from './pages/Home';
import React from "react";
import Rooms from './pages/Rooms';
import {Route} from "react-router-dom"
import SingleRoom from './pages/SingleRoom'

function App() {
  return (
    <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={Rooms}/>
    <Route exact path="/single-room" component={SingleRoom}/>
    
    
    </>
    
  
    );
}

export default App;
