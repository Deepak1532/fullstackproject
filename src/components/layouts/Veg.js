import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer'

import Navbar from './Navbar'

function Veg() {
    return (
        <div>
          <Navbar/>

          <br/>
          <h2 style={{textAlign:'center'}}>Vegetables</h2>
             <div className="row d-flex" style={{justifyContent:'center'}}>
  
  
    <div className="col-sm-3">
    <a href="/potato">
      <div className="card" >
        
      <img src="images/veg/potato.jpg"  className="card-img-top" style={{height:'255px'}}/>
        <div className="card-body">
       
          <h5 className="card-title">Potato</h5>
          <p className="card-text">Rs.50</p>
          <a href="#" className="btn btn-primary">Add to Cart Cart</a>
        </div>
      </div>
      </a>
    </div>
  
  <div className="col-sm-3">
    <div className="card">
    <img src="images/veg/onion.jpg" className="card-img-top" style={{height:'255px'}}/>
      <div className="card-body">
        <h5 className="card-title">Onion</h5>
        <p className="card-text">Rs. 80</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src="images/veg/tomato.png" className="card-img-top" style={{height:'255px'}}/>
    
      <div className="card-body">
        <h5 className="card-title">Tomato</h5>
        <p className="card-text">Rs.40</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src="images/veg/cabbage.jpg" className="card-img-top" style={{height:'255px'}}/>
      <div className="card-body">
        <h5 className="card-title">Cabbage</h5>
        <p className="card-text">Rs.40</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
</div>
<br/>
<div className="row d-flex" style={{justifyContent:'center'}}>
  
  <div className="col-sm-3">
    <div className="card">
    <img src="images/veg/cauli.jpg" className="card-img-top" style={{height:'255px'}}/>
      <div className="card-body">
        <h5 className="card-title">Cauliflower</h5>
        <p className="card-text">Rs.50</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src="images/veg/peas.jpg" className="card-img-top" style={{height:'255px'}}/>
      <div className="card-body">
        <h5 className="card-title">Green Peas</h5>
        <p className="card-text">Rs.50</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src="images/veg/capsicum.jpg" className="card-img-top" style={{height:'255px',backgroundColor:'white'}}/>
    
      <div className="card-body">
        <h5 className="card-title">Capsicum</h5>
        <p className="card-text">Rs. 60</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src="images/veg/pumpkin.png" className="card-img-top" style={{height:'255px'}}/>
      <div className="card-body">
        <h5 className="card-title">Pumpkin</h5>
        <p className="card-text">Rs.30</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
</div>
<br/>

<Footer/>

        </div>
    )
}

export default Veg
