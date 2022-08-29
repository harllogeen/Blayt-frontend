import React from 'react'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section id='home'>
                <div className='container containers'  >
                    <div className='row justify-content-center'>
                        <div className='col-md-8 ' id='mt'>
                            <h1 className='display-4 fw-bolder mb-4 text-start text-white mt-5'>
                                Feels the Technologies You Will Learn
                            </h1>
                            <p className='lead text-start fs-4 mb-5 text-white'>
                                This bootcamp is intended for anyone who has zero to some programming knowledge and is looking for that guided approach to becoming an engineer in 4 months. In this bootcamp,
                                you’ll learn the core fundamentals of web programming by building practical, real-life applications using Angular and React.
                            </p>
                            <div className='buttons d-flex
                            justify-content-center gap-2 mb-5'>
                                <NavLink to="/register" className='btn btn-light mt-4 rounded-pill px-5 py-2 ms-2' >
                                <i className='fa fa-sign-in me-2' />
                                    Apply
                                </NavLink>

                                <NavLink to="/service" className='btn btn-outline-light mt-4 rounded-pill px-4 py-2'>Our Services</NavLink>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <About />
            <Service />
            <Contact />

        </div>
    )
}

export default Home