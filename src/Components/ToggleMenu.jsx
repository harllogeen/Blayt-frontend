import React, { useState } from "react"
import { NavLink } from "react-router-dom";

import "./ToggleMenu.css"


function ToggleMenu(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="Toggle">

      <nav className="navbar navbar-expand-lg bg-light fixed-top px-2 py-2">
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu} >
          <span className="navbar-toggler-icon"></span>

        </button>
        <div id="mylogo">
          <img src="/assets/about2.png" className="logo" alt="aboutme" />
        </div>
      </nav>

      {openMenu === true ? (
        <div className="block"  >
          {props.auth ?
            <>
              <li className="line">
                <NavLink onClick={() => { document.getElementById("close-button").click() }} to="/">Home</NavLink>
              </li>
              <li className="line">
                <NavLink onClick={() => { document.getElementById("close-button").click() }} to="/about">About</NavLink>
              </li>
              <li className="line">
                <NavLink onClick={() => { document.getElementById("close-button").click() }} to="/service">Services</NavLink>
              </li>
              <li className="line">
                <NavLink onClick={() => { document.getElementById("close-button").click() }} to="/contact">Contact</NavLink>
              </li>
              <li className="dropit">
                <div class="dropdown" >
                  <div className="dropitt">Courses</div>
                  <div class="dropdown-content" onClick={() => { document.getElementById("close-button").click() }}>
                    <NavLink onClick={() => { document.getElementById("close-button").click() }} to="/frontend">Frontend Web Development</NavLink>
                    <NavLink onClick={() => { document.getElementById("close-button").click() }} to="/backend">Backend Web Development</NavLink>
                    <NavLink onClick={() => { document.getElementById("close-button").click() }} to="/fullstack">Software Engineer</NavLink>
                    <NavLink onClick={() => { document.getElementById("close-button").click() }} to="/design">UI/UX Design</NavLink>
                  </div>
                </div>
              </li>
              <li>
                <NavLink onClick={() => { document.getElementById("close-button").click() }} to="/register" className="bg-light text-primary px-4 rounded-2 "><i className='fa fa-user-plus me-2'></i>SIGN UP</NavLink >

              </li>




            </>
            :
            <>
              <li>
                <button type="button" className="btn btn-primary position-relative px-4 rounded-pill gapp bg-blue ms-4 fs-2 mt-4">
                  Notification
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>
              </li>

              <li>
                <NavLink onClick={() => { document.getElementById("close-button").click() }} to="/logout" className="bg-light text-primary px-4 rounded-2 "> <i className='fa fa-sign-out' />SIGN OUT</NavLink>
              </li>
            </>
          }
        </div>


      ) : null}
    </div>
  );
}

export default ToggleMenu;
