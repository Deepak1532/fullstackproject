import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      
          
           <div className="container-fluid">
             <div className="row">
               <div className="col-md-3"></div>
               <div className="col-md-6">
               <form className="d-flex">
                  <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
                  
                </form> 
               </div>
               <div className="col-md-3">
               <div className="item d-flex">
               
                  <Link className="nav-link" aria-current="page" to="">Wish List<i class="bi bi-heart-fill mx-2"></i></Link>
                  <Link className="nav-link"  aria-current="page" to="">Cart<i class="bi bi-cart-fill mx-2" ></i></Link>
                  <Link className="nav-link"  aria-current="page" to=""><i class="bi bi-people-fill mx-2"></i></Link>
               
                </div>
               </div>
          </div>
          </div>
          <nav className="navbar navbar-expand-lg  navbar-light">
          <div className="container-fluid">
          <a className="navbar-brand" href="#">
          {/* <img src="http://placehold.it/3*3?text=Logo" id="brandlogo" alt=""/> */}
          </a>
          {/* <img src="images/logo/logo2.jpg" id="logoid"></img> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav  mx-auto " >
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="nav-active" aria-current="page" to="/Home">Home<i class="fas fa-home"></i></NavLink>
                </li>
                <li className="nav-item" id="productid">
                  <NavLink className="nav-link" activeClassName="nav-active" to="/Products">Products<i class="fas fa-seedling"></i></NavLink>
                  <ul className="products">
                    <li><a href="/fruit">Fruits</a></li>
                    <li><a href="/veg">Vegetables</a></li>
                    </ul>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="nav-active" to="/contact">Contact us <i class="fas fa-phone"></i></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="nav-active" to="/about">About Us <i class="fas fa-address-book"></i></NavLink>
                </li>

                <form id="login" className="d-flex ml-4" style={{position:'absolute',right:'100px'}}>
                    
                    <NavLink className="btn" activeClassName="nav-active" to="/form" type="submit">login<i class="fas fa-sign-in-alt"></i></NavLink>
                    <NavLink className="btn" activeClassName="nav-active" to="/signup" type="submit">Register</NavLink>
                </form>
                
              <div>
               
              </div>
              </ul>
              
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
