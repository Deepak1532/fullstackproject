import React from 'react'

function Carousel() {
    return (
         <div id="carouselhead" className="container-fluid" >
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" ></li>
               </ol>

                 <div className="container-fluid carousel-inner">
                <div className="carousel-item active" data-bs-interval='2000'>
                    <img src="images/carousel/c4.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="images/carousel/c1.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                  <div className="carousel-item " data-bs-interval='2000'>
                    <img src="images/carousel/c7.png" className="d-block w-100"  alt="..."/>
                  </div>
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="images/carousel/c9.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="images/carousel/c3.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                  
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="images/carousel/c11.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                 
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="images/carousel/c2.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="images/carousel/c5.jpg" className="d-block w-100"  alt="..."/>
                  </div>
              </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </a>
          </div>

              {/* <div className="row shadow rounded bg-light w-50"style={{position:'absolute',top:'80%',left:'25%'}}>
              <div className="col-sm-4">
                <div className="card">
                  <img src="images/sale.jpg" className=" rounded-circle mx-auto pt-3" style={{height:'80px',width:'95%'}}/>
                  <div className="card-body">
                    <h5 className="card-title">Discount upto 50% on first order</h5>
                    
                    <a href="#" className="btn btn-warning">See more</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                <img src="images/logo1.png" className=" rounded-circle mx-auto pt-3" style={{height:'80px',width:'95%'}}/>
                  <div className="card-body">
                    <h5 className="card-title">Pay with different options</h5>
                    <a href="#" className="btn btn-warning">See more</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                <img src="images/Nabil.jpg" className=" rounded-circle mx-auto pt-3" style={{height:'80px',width:'95%'}}/>
                  <div className="card-body">
                    <h5 className="card-title">10% discount on Nabil Bank.</h5>
                    
                    <a href="#" className="btn btn-warning">See more</a>
                  </div>
                </div>
              </div>
            </div> */}
      </div>  
    )
}
export default Carousel
