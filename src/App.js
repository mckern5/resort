import "./App.css"

import {Route, Switch} from "react-router-dom"

import Error from './pages/Error'
//import logo from './logo.svg';
//import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import React from "react";
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={Rooms}/>
    <Route exact path="/rooms/:slug" component={SingleRoom}/>
    <Route component ={Error} />
    </Switch>
    </>
    
  
    );
}

export default App;
