import React from 'react'
import Footer from '../Footer'

import Navbar from './Navbar'

function Potatolist() {
    return (
        <div>
            <Navbar/>
            <div className="col-md-3" id="product1">
             <div className="container d-flex">
      
                <img src="images/veg/potato.jpg" className="card-img-top" style={{height:'255px'}}/>
                <div className="card-body" >
                    <h5 className="card-title">Potato</h5><span>Rs.50</span>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">Add to Cart Cart</a><br/><br/>
                    <a href="#" className="btn btn"><i class="bi bi-heart-fill mx-2"></i>Add to wishlist</a>
                </div>
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    )
}

export default Potatolist
