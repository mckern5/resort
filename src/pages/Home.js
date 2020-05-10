import Banner from '../components/Banner'
import Hero from  '../components/Hero'
import {Link} from 'react-router-dom'
import React from 'react'

export default function Home() {
    return ( 
    <Hero> 
        <Banner title ="luxurious rooms"
                 subtitle ="deluxe rooms starting at $299"
        >
           <Link to ='/rooms'  className="btn-primary">
               our rooms
           </Link>
        </Banner>
    </Hero>        
    
    )
    
}

