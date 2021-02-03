import React from 'react'
import Footer from '../Footer'
import Navbar from './Navbar'

function Form() {
  return (
    <div>

      <Navbar/>
      <br/>
              <div class="login-form">    
                <form action="#" method="post">
                    <div class="avatar"><i class="material-icons">&#xE7FF;</i></div>
                    <h4 class="modal-title">Login to Your Account</h4>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username" required="required"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" required="required"/>
                    </div>
                    <div class="form-group small clearfix">
                        <div class="form-check-label">
                          <input type="checkbox"/> Remember me
                          </div>
                        <a href="#" class="forgot-link">Forgot Password?</a>
                    </div> 
                    <input type="submit" class="btn btn-primary btn-block btn-lg" value="Login"/>              
                </form>			
                <div class="text-center small" style={{color:'black'}}>Don't have an account? <a href="#">Sign up</a></div>
            </div>
        <br/>
        <Footer/>
    </div>
  )
}

export default Form
