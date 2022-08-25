import React from 'react';
import { NavLink } from 'react-router-dom'
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <section className="footer">

                <div className="box-container">
                    <div className="box">
                        <h3>Quick Links</h3>
                        <NavLink to="#/" className="foot"> <i className="fas fa-chevron-right"></i>Home</NavLink>
                        <NavLink to="#/" className="foot"> <i className="fas fa-chevron-right"></i>About</NavLink>
                        <NavLink to="#/" className="foot"> <i className="fas fa-chevron-right"></i>Service</NavLink>
                        <NavLink to="#/" className="foot"> <i clasName="fas fa-chevron-right"></i>Contact</NavLink>
                        <NavLink to="#/" className="foot"> <i className="fas fa-chevron-right"></i>Apply</NavLink>
                        <NavLink to="#/" className="foot"> <i className="fas fa-chevron-right"></i>Login</NavLink>

                    </div>

                    <div className="box">
                        <h3>Our Services</h3>
                        <NavLink to="#/"> <i className="fas fa-chevron-right"></i>Frontend</NavLink>
                        <NavLink to="#/"> <i className="fas fa-chevron-right"></i>Backend</NavLink>
                        <NavLink to="#/"> <i className="fas fa-chevron-right"></i>FullStack</NavLink>
                        <NavLink to="#/"> <i className="fas fa-chevron-right"></i>Ui/Ux Design</NavLink>
                        <NavLink to="#/"> <i className="fas fa-chevron-right"></i>Project Manager</NavLink>

                    </div>

                    <div className="box">
                        <h3>Contact info</h3>
                        <NavLink to="#/"> <i className="fas fa-phone"></i> +234-903-759-8050 </NavLink>
                        <NavLink to="#/"> <i className="fas fa-phone"></i> +234-814-667-6786- </NavLink>
                        <NavLink to="#/"> <i className="fas fa-envelope"></i>bluyt2020@gmail.com </NavLink>
                        <NavLink to="#/"> <i className="fas fa-envelope"></i>harlogeen2020@gmail@gmail.com </NavLink>
                        <NavLink to="#/"> <i className="fas fa-map-marker-alt"></i>Abeokuta, Ogun State</NavLink>
                    </div>
                    <div className="box">
                        <h3>Follow Us</h3>
                        <NavLink to="#/"> <i className="fab fa-facebook-f"></i>Facebook</NavLink>
                        <NavLink to="#/"> <i className="fab fa-twitter"></i>Github</NavLink>
                        <NavLink to="#/"> <i className="fab fa-whatsapp"></i>Twitter</NavLink>
                        <NavLink to="#/"> <i className="fab fa-instagram"></i>Instagram</NavLink>
                        <NavLink to="#/"> <i className="fab fa-linkedin"></i>Linkedin</NavLink>
                    </div>

                    <div className='common'>
                        <form>
                            <h3>Subscribe to our newsletter</h3>
                            <p>Montly digest of whats new and exiting from us</p>
                            <div className="newsletter">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter" type='text' className="form-control" placeholder='Email Address' />
                                <button className="btn">Subscribe</button>
                            </div>

                        </form>

                    </div>
                </div>
                <div className="credit"> <span className="sub">&copy; 2022 BLAYT college - All rights reserved. </span> </div>
            </section>

        </div>


    )
}

export default Footer