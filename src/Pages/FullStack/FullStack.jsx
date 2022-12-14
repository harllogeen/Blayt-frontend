import React, {useEffect} from 'react'
import "./FullStack.css"
import AOS from "aos";
import "aos/dist/aos.css";

const FullStack = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <div className='back container'>

      <div className='container my-5'>
        <p>Home / MERN Fullstack Development</p>
        <h1 className='text-center my-5'>MERN Development</h1>

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
                <p className='text-secondary'>
                  MERN is a free and open-source JavaScript software stack for building dynamic web sites and web applications. Because all components of the MERN stack support programs that are written in JavaScript, MERN applications can be written in one language for both server-side and client-side execution environments In This Course You Will Learn
                </p>
              </div>
              <ul class="list-group pt-2 ">
                <li class="list-group-item text-secondary"><i class="fa-solid fa-check "></i>What is MERN Stack</li>
                <li class="list-group-item text-secondary"><i class="fa-solid fa-check "></i>Advantages Of Mern Stack</li>
                <li class="list-group-item text-secondary"><i class="fa-solid fa-check "></i>Node Js</li>
                <li class="list-group-item text-secondary "><i class="fa-solid fa-check "></i>Implementing Routes in Node JS</li>
                <li class="list-group-item text-secondary"><i class="fa-solid fa-check "></i>Express JS</li>
                <li class="list-group-item text-secondary"><i class="fa-solid fa-check "></i>Express Routing</li>
                <li class="list-group-item text-secondary"><i class="fa-solid fa-check "></i>NPM Node Package Manager</li>
                <li class="list-group-item text-secondary"><i class="fa-solid fa-check "></i>Mongo DB</li>
                <li class="list-group-item text-secondary"><i class="fa-solid fa-check "></i>MongoDB Commands Like Create, Read, Update, Delete</li>
                <li class="list-group-item text-secondary"><i class="fa-solid fa-check "></i>Connecting Node JS With Mongo DB</li>
                <li class="list-group-item text-secondary"><i class="fa-solid fa-check "></i>How To Create a new React Application</li>
                <li class="list-group-item text-secondary"><i class="fa-solid fa-check "></i>And more...</li>

              </ul>
              <p className='pt-5 text-secondary'>Enroll in this course to find out.</p>
            </div>
            <div className='col-md-4' >
              <div className='bg-light rounded shadow p-3 mt-4 ' id='index' data-aos-anchor-placement="top-bottom" data-aos="zoom-out">
                <div className='price px-2'>
                  <div className='d-flex justify-content-between'>
                    <p className='fw-bold'><i class="fa-solid fa-money-bill -bold"></i>Price</p>
                    <p>#450,000</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='fw-bold'><i class="fa-solid fa-hourglass"></i>Installement</p>
                    <p>???120,000 4 months</p>
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

export default FullStack