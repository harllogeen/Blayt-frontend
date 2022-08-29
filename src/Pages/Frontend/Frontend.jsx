import React, { useEffect } from 'react'
import '../FullStack/FullStack.css'
import AOS from "aos";
import "aos/dist/aos.css";


const Frontend = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <div className='back container'>

      <div className='container my-5'>
        <p>Home / Frontend ReactJs</p>
        <h1 className='text-center my-5'>Frontend ReactJs</h1>

        <div>
          <div className='row '>
            <div className='col-md-8' >
              <div className='d-flex gap-4 text-secondary'>
                <h4>Overview</h4>
                <h4>Instructor</h4>
                <h4>Review</h4>


              </div>
              <hr className='w-90'></hr>
              <div>
                <h2 className='mt-4'>Course Description</h2>
                <p className='text-secondary pt-4'>
                  What's this course about? This course is a complete guide to become an expert front-end web developer. It contains all the tools and technologies that you should be proficient in work as a React Developer.
                </p>
                <p className='text-secondary'>
                  React.js is one of the most demanding frameworks in the market;31.3% of worldwide specialists are currently utilizing ReactJs. Some of the world’s top tech teams use the tool to design scalable, easy-to-maintain solutions — Netflix, PayPal, eBay, Airbnb, and more.
                </p>
                <p className='text-secondary'>
                  Asking for a Senior react developer salary. It’s one of the most in-demand frameworks at the moment — that’s why business owners are willing to find professionals with a moderate mid-level react developer salary within and beyond their home regions
                </p>
              </div>

              <p className='pt-5 text-secondary'>Enroll in this course to find out.</p>
            </div>
            <div className='col-md-4' >
              <div className='bg-light rounded shadow p-3 mt-4 ' id='index' data-aos-anchor-placement="top-bottom" data-aos="fade-up">
                <div className='price px-2'>
                  <div className='d-flex justify-content-between'>
                    <p className='fw-bold'><i class="fa-solid fa-money-bill -bold"></i>Price</p>
                    <p>#450,000</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='fw-bold'><i class="fa-solid fa-hourglass"></i>Installement</p>
                    <p>₦100,000  x2 months</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='fw-bold'><i class="fa-solid fa-timeline"></i>Duration</p>
                    <p>6 months</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='fw-bold'><i class="fa-solid fa-user-doctor"></i>Job opportunity</p>
                    <p>Yes</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='fw-bold'><i class="fa-solid fa-school"></i>Enrolled</p>
                    <p>15 Students</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='fw-bold'><i class="fa-solid fa-language"></i>Language</p>
                    <p>English</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='fw-bold'><i class="fa-solid fa-language"></i>Kickoff</p>
                    <p>June 2022</p>
                  </div>

                </div>
                <p className='text-center py-4'><i class="fa-solid fa-share-nodes"></i>Share this course</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Frontend