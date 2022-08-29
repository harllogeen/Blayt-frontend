import React from 'react'
import { NavLink } from 'react-router-dom';
import Courses from './Courses'





const Navbar = (props) => {

  

  
  return (
    <div id='navbar'>
      <nav className="navbar navbar-expand-lg bg-light shadow fixed-top d-flex" id='navnav'>
        <div className="container ">

              <div className="container">
              
             
              </div>
              
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavLink className="navbar-brand fw-bolder fs-4 " to="/"><img src="/assets/about2.png" alt="about" width={70} /></NavLink>
            {props.auth ?
              <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
              <li className="nav-item">
                <NavLink className="nav-link active fw-bold text-light bg-primary rounded-2 " id='colorr' aria-current="page" to="/">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold text-primary" id='colorr' to="/about">ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold text-primary" id='colorr' to="/service">SERVICES</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link fw-bold text-primary" id='colorr' to="/contact">CONTACT</NavLink>
              </li>
              <li className="nav-item nav-link courses ">
                
                  <Courses /> 
                   
               
                
              </li>

            </ul>
            
                <NavLink to="/login" className='btn btn-outline-primary ms-auto px-4 rounded-pill fw-bold'>
                  <i className='fa fa-sign-in me-2'></i>LOGIN</NavLink>
                <NavLink to="/register" className='btn btn-outline-primary ms-2 px-4 rounded-pill fw-bold'>
                  <i className='fa fa-user-plus me-2'></i>REGISTER</NavLink>
              </>
              :
              <>



                <button type="button" className="btn btn-primary position-relative ms-auto px-4 rounded-pill gapp fw-bold">
                  Notification
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>
                <NavLink to="/logout" className='btn btn-outline-primary ms-2 px-4 rounded-pill fw-bold'>
                  <i className='fa fa-sign-out me-2'></i>Logout</NavLink>
              </>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar