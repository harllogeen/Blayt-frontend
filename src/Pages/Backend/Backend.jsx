import React, { useEffect } from 'react'
import "../FullStack/FullStack.css"
import AOS from "aos";
import "aos/dist/aos.css";



const Backend = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <div className='back container'>

      <div className='container my-5'>
        <p>Home / Backend Stack NodeJs</p>
        <h1 className='text-center my-5'>Backend Stack NodeJs</h1>

        <div>
          <div className='row '>
            <div className='col-md-8'>
              <div className='d-flex gap-4 text-secondary'>
                <h4>Overview</h4>
                <h4>Instructor</h4>
                <h4>Review</h4>


              </div>
              <hr className='w-90'></hr>
              <div>
                <h2 className='mt-4'>Course Description</h2>
                <p className='text-secondary pt-4'>
                  JavaScript has been the most popular programming language for the
                  last 6 years. The powerful Node.js runtime environment has been
                  ranked the technology most commonly used by professional
                  developers. Node.js is an event-driven JavaScript runtime.
                  Node has myriad potential uses for JavaScript development
                  including being a great environment for building efficient
                  network applications.
                </p>
                <p className='text-secondary'>
                  This course is a great introduction to the concepts of server-side
                  web development. You’ll learn the different parts that make up the back-end
                  of a website or web application, and you’ll gain familiarity with the
                  Node.js runtime environment. After this course, you’ll be set up to explore
                  popular Node frameworks like Express.js to build powerful applications.
                </p>
                <p className='text-secondary'>
                  Asking for a Senior nodejs developer salary. It’s one of the most in-demand
                  frameworks at the moment — that’s why business owners are willing to find
                  professionals with a moderate
                  mid-level nodejs developer salary within and beyond their home regions
                </p>
              </div>

              <p className='pt-5 text-secondary'>Enroll in this course to find out.</p>
            </div>
            <div className='col-md-4'>
              <div className='bg-light rounded shadow p-3 mt-4 sticky-top' id='index' data-aos-anchor-placement="top-bottom" data-aos="fade-up">
                <div className='price px-2'>
                  <div className='d-flex justify-content-between'>
                    <p className='fw-bold'><i class="fa-solid fa-money-bill -bold"></i>Price</p>
                    <p>#450,000</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='fw-bold'><i class="fa-solid fa-hourglass"></i>Installement</p>
                    <p>₦150,000  x2 months</p>
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
                    <p>April/May 2022</p>
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

export default Backend