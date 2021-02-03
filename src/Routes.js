import React from 'react'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/layouts/Navbar'
import Main from './components/Main'
import Carousel from './components/layouts/Carousel'
import Cards from './components/layouts/Cards'
import Products from './components/layouts/Products'
import Veg from './components/layouts/Veg'
import Fruit from './components/layouts/Fruit'
import Potatolist from './components/layouts/Potatolist'
import Signup from './components/layouts/Signup'
import Productcard from './components/layouts/Productcard'
import Contactus from './components/layouts/Contactus'
import Aboutus from './components/layouts/Aboutus'
import Form from './components/layouts/Form'





function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/form" exact component={Form}/>
            <Route path="/Home" exact component={Home}/>
            <Route path="/products" exact component={Home}/>
            <Route path="/contact" exact component={Contactus}/>
            <Route path="/about" exact component={Aboutus}/>
            <Route path="/signup" exact component={Signup}/>            
            <Route path="/Veg" exact component={Veg}/>
            <Route path="/fruit" exact component={Fruit}/>
            <Route path="/potato" exact component={Potatolist}/>
            <Route path="/apple" exact component={Productcard}/>

        </Switch>
        </BrowserRouter>
    )
}

export default Routes
