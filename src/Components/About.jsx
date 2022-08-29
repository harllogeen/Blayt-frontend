import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <section id='about'>
      <div className='container my-5 py-2'>
        <div className='row mt-5'>
          <h3 className='fs-10 mb-0 text-center ' id='font-size'>About Us</h3>
          <div className='col-md-6 ' id='image'>
            <img src='/assets/about4.jpg' alt='About' className='w-100 mt-5 h-75 shadow' data-aos="fade-right" />
          </div>
          <div className='col-md-6' id='aboutme' data-aos="fade-left">

            <h1 className='display-6 mb-2 text-center'>Who <b>We</b> Are</h1>
            <hr className='w-50 mx-auto'></hr>
            <p className='lead mb-4 start' >BLAYT Academy is a registered 501 (3) nonprofit coding academy, run by Akshayya Corporation. With the help of our partners, We are committed to bringing marketable technical skills to women and underrepresesented minorities through unique, effective, fast and affordable technology training and job placement services.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ipsa itaque fugiat tempora numquam expedita.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat unde quae in sapiente cum velit adipisci incidunt obcaecati modi quasi!
            </p>
            <NavLink to="/login" className='btn btn-primary rounded-pill px-4 py-2 text-center'>Get Started</NavLink>
            <NavLink to="/contact" className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2 text-center'>Contact Us</NavLink>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About