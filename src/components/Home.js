import React from 'react'
import Footer from './Footer'
import Cards from './layouts/Cards'
import Carousel from './layouts/Carousel'

import Navbar from './layouts/Navbar'




function Home() {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <Cards/>         
           
           <Footer/>
            
        </div>
    )
}

export default Home
