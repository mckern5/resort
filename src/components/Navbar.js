import React, { Component } from 'react'

import {faAlignRight} from 'react-icons/fa'
import {link} from 'react-router-dom'
import logo from  '../images/logo.svg'

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }

    
    render() {
        return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
        
                    <link to="/">
                        <img src={logo} alt="Beach Resort"/>
                    </link>
                </div>
            </div>
        </nav>
        )
    }
}
