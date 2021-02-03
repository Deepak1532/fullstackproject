import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from './Navbar'

function Fruit() {
    return (
        <div>
          <Navbar/>

            <br/>
          <h2 style={{textAlign:'center'}}>Fruits</h2>
             <div className="row d-flex" style={{justifyContent:'center'}}>
  
  <div className="col-sm-3">
    <div className="card">
    <img src="images/fruit/banana1.png" className="card-img-top" style={{height:'255px'}}/>
      <div className="card-body">
        <h5 className="card-title">Banana</h5>
        <p className="card-text">Rs.50</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src="images/fruit/blackgrape.png" className="card-img-top" style={{height:'255px'}}/>
      <div className="card-body">
        <h5 className="card-title">Blackbrape</h5>
        <p className="card-text">Rs. 80</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src="images/fruit/grape.png" className="card-img-top" style={{height:'255px'}}/>
    
      <div className="card-body">
        <h5 className="card-title">Grapes</h5>
        <p className="card-text">Rs.40</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src="images/fruit/orange1.png" className="card-img-top" style={{height:'255px'}}/>
      <div className="card-body">
        <h5 className="card-title">Oranges</h5>
        <p className="card-text">Rs.40</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
</div>
<br/>
<div className="row d-flex" style={{justifyContent:'center'}}>
  
  <div className="col-sm-3">
    <a href="/apple">
    <div className="card">
    <img src="images/fruit/redapple.jpg" className="card-img-top" style={{height:'255px'}}/>
      <div className="card-body">
        <h5 className="card-title">Apples</h5>
        <p className="card-text">Rs.50</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
    </a>
   
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src="images/fruit/pineapple.jpg" className="card-img-top" style={{height:'255px'}}/>
      <div className="card-body">
        <h5 className="card-title">Pineapple</h5>
        <p className="card-text">Rs.50</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src="images/fruit/mango.jpg" className="card-img-top" style={{height:'255px',backgroundColor:'white'}}/>
    
      <div className="card-body">
        <h5 className="card-title">Capsicum</h5>
        <p className="card-text">Rs. 60</p>
        <a href="#" className="btn btn-primary">Add to Cart Cart</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
    <img src="images/fruit/lychee.jpg" className="card-img-top" style={{height:'255px'}}/>
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

export default Fruit
