import React from 'react'

function Cards() {
    return (
        <div className="container" >
           {/* fruits cards starts */}
                <h2>Fresh Fruits</h2>
                
            <div className="row" style={{justifyContent:'center'}}>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="images/fruit/redapple.jpg" className="card-img-top" alt="..." style={{height:'255px'}}/>
                    <div className="card-body">
                    <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                    </div>
                    </div>
                </div>
            <div className="col-sm-3">
                <div className="card">
                <img src="images/fruit/anar.jpg" className="card-img-top" style={{height:'255px'}}alt="..."/>
                <div className="card-body">
                <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                <img src="images/fruit/grapes.jpg" className="card-img-top" style={{height:'255px'}} alt="..."/>
                <div className="card-body">
                <a href="#" className="btn" style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                <img src="images/fruit/mango.jpg" className="card-img-top" style={{height:'255px'}} alt="..."/>
                <div className="card-body">
                    <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>
            
            </div> 
            <br/>
            {/* vegetables cards starts */}
             <h2>Fresh Vegetables</h2>
            
           <div className="row" style={{justifyContent:'center'}}>
                <div className="col-sm-3 ">
                    <div className="card">
                    <img src="images/veg/garlic2.jpg" className="card-img-top" alt="..." style={{height:'255px'}}/>
                    <div className="card-body">
                    <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                    </div>
                    </div>
                </div>
            <div className="col-sm-3">
                <div className="card">
                <img src="images/veg/onion1.jpg" className="card-img-top" style={{height:'255px'}}alt="..."/>
                <div className="card-body">
                <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                <img src="images/veg/ptato.png" className="card-img-top" style={{height:'255px'}} alt="..."/>
                <div className="card-body">
                <a href="#" className="btn" style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                <img src="images/veg/Okra-2.jpg" className="card-img-top" style={{height:'255px'}} alt="..."/>
                <div className="card-body">
                    
                    
                    <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>
            </div> 
             {/* vegetables cards ends */}
            <br/>
            {/* leafy vegetables */}
           <h2>Green vegetables</h2>

           <div className="row" style={{justifyContent:'center'}}>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="images/green leaf/palak.jpg" className="card-img-top" alt="..." style={{height:'255px'}}/>
                    <div className="card-body">
                    <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                    </div>
                    </div>
                </div>
            <div className="col-sm-3">
                <div className="card">
                <img src="images/green leaf/mustard-greens.jpg" className="card-img-top" style={{height:'255px'}}alt="..."/>
                <div className="card-body">
                <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                <img src="images/green leaf/Methi.jpg" className="card-img-top" style={{height:'255px'}} alt="..."/>
                <div className="card-body">
                <a href="#" className="btn" style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                <img src="images/green leaf/springonion.jpg" className="card-img-top" style={{height:'255px'}} alt="..."/>
                <div className="card-body">
                    <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>
            </div>

            <br/>
            <h2>Popular</h2>

            <div className="row  "style={{justifyContent:'center'}}>
                <div className="col-sm-3">
                    <div className="card">
                    <img src="images/fruit/pineapple.jpg" className="card-img-top" alt="..." style={{height:'255px'}}/>
                    <div className="card-body">
                    <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                    </div>
                    </div>
                </div>
            <div className="col-sm-3">
                <div className="card">
                <img src="images/fruit/kiwi.jpg" className="card-img-top" style={{height:'255px'}}alt="..."/>
                <div className="card-body">
                <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                <img src="images/fruit/dragonfruit.jpg" className="card-img-top" style={{height:'255px'}} alt="..."/>
                <div className="card-body">
                <a href="#" className="btn" style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                <img src="images/fruit/avocado.jpeg" className="card-img-top" style={{height:'255px'}} alt="..."/>
                <div className="card-body">
                    <a href="#" className="btn " style={{backgroundColor:'none',fontSize:'25px'}}>See more</a>
                </div>
                </div>
            </div>
            </div>
       </div>

    )
}

export default Cards
