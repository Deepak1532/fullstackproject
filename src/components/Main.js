import React from 'react'

import Footer from './Footer'
import Cards from './layouts/Cards'
import Carousel from './layouts/Carousel'
import Form from './layouts/Form'
import Gettime from './layouts/Gettime'
import Navbar from './layouts/Navbar'


// let loggedIn=false;
function Main() {
    return (
        <div>
            <Navbar/>
           <Carousel/>
           <br/>
           
            <Cards/> 
           <br/>
           {/* <Card
           imagename="images/img6.jpg"
           title="Hello World"  description="this is all about props " 
           />
           <Card
           imagename="images/img2.jpg"
           title="Hello World"  description="this is all about props " 
           /> */}


             {/* <MainCard/> */}

           
           
           
           {/* {loggedIn===false&&<Form/>} */}
           <br/>
           
           
            <Footer/> 
           
        </div>
    )
}

export default Main
