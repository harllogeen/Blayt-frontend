
import './Dashboard.css'
import React, { useState } from 'react';


const Dashboard = () => {

  

  const [apply, setApply] = useState({
    firstname: "",
    lastname: "",
    email: "",
    confirmemail: "",
    password: "",
    age: "",
    track: "",
    about: "",
    message: "",

  });
  //handleInputs
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setApply({ ...apply, [name]: value })
  }
  //Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    //object Destructuring
    //Store Object Data into Variable
    const { firstname,
      lastname,
      email,
      confirmemail,
      password,
      age,
      track,
      about,
      message } = apply;
    try {
      //it is submitted on port 3000 by default
      //which is frontend but we need to
      //submit it on backend which is on port 3001
      //so we need proxy.
      const res = await fetch('/dashboard', {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify({
          firstname, lastname, email, confirmemail, password, age, track, about, message
        })
      })
      console.log(res.status)
      
      if (res.status === 400 || !res) {
        window.alert("Application Not Sent. Try Again")
      } else {
        window.alert("Application Sent Successfully");
        setApply({
          firstname: "",
          lastname: "",
          email: "",
          confirmemail: "",
          password: "",
          age: "",
          track: "",
          about: "",
          message: ""
        })
      }
    } catch (error) {

    }
  }

  //checkbox
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  // When the button is clicked
  const btnHandler = () => {

  };
  
  return (
    <div id='container'>
      <div className='background mb-5 mt-5 '>
        <h1 className='container text-white text-center pt-5' id='applyblay'>Apply to BLAYT Campus</h1>

        <br></br>
        <p className='container lead text-start fs-4 mb-5 text-white   ' id='leadash'>The admission process can take as little as 1.5 - 2 weeks from application to decision.
          Admissions are done on a rolling basis, so the earlier you apply, the better.

          Submit this application to be considered for a full-time software engineering program.

          Note that you will be required to pay the sum of NGN250,000 for your tuition if accepted.

          Spots are limited. Apply below today to secure your place.</p>
      </div>

      <form onSubmit={handleSubmit} method="POST" className='container'>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label fw-bold" onChange={checkboxHandler}>First Name</label>
          <input type="text" className="form-control w-75 " placeholder="Enter First Name"
            name='firstname' value={apply.firstname} onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Last Name</label>
          <input type="text" className="form-control w-75" placeholder="Enter Last Name"
            name='lastname' value={apply.lastname} onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Email</label>
          <input type="text" class="form-control w-75" placeholder="Email" aria-label=""
            name='email' value={apply.email} onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Confirm Email</label>
          <input type="text" className="form-control w-75" placeholder="Confirm Email" aria-label=""
            name='confirmemail' value={apply.confirmemail} onChange={handleChange}
          />
        </div>

        <div className="mb-3 mt-2">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fw-bold">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control w-75" id="inputPassword3"
              name='password' value={apply.password} onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 mt-2">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fw-bold">Age</label>
          <div className="col-sm-10">
            <input id="number" type="number" className='form-control w-75'
              name='age' value={apply.age} onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md">
          <div className=" mb-3 mt-5">
            <label htmlFor="inputPassword3" className="col col-form-label fw-bold">Select Stack</label>
            <select className="form-select w-75" id="floatingSelectGrid" aria-label="Floating label select example"
              name='track' value={apply.track} onChange={handleChange} >
              <option selected > Select your stack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="FullStack">FullStack</option>
              <option value="UI/UX">UI/UX</option>

            </select>

          </div>
        </div>
        <div className="col-md">
          <div className=" mb-3 mt-5">
            <label htmlFor="inputPassword3" className="col col-form-label fw-bold">How did you hear about us?</label>
            <select className="form-select w-75" id="floatingSelectGrid" aria-label="Floating label select example"
              name='about' value={apply.about} onChange={handleChange} >

              <option selected>Select Options Below</option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="Whatsapp">Whatsapp</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Others">Others</option>
            </select>

          </div>
        </div>
        <div className="mb-3 mt-5">
          <label htmlFor="formGroupExampleInput" className="form-label fw-bold">
            What is the main reason you want to apply to BLAYT Campus?
          </label>
          <textarea className="form-control w-75" placeholder="Leave a comment here" id="floatingTextarea2"
            name='message' value={apply.message} onChange={handleChange} ></textarea>
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={checkboxHandler} />
          <label className="form-check-label" htmlFor="exampleCheck1">
            By submitting this form, I accept that my data may be used for a quote request
            and the commercial relationship that may result from it. I agree to Code Campus International's <span className='span'>Privacy Policy</span> and <span className='span'>Terms of Service.</span>
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-5 mb-5" disabled={!agree} onClick={btnHandler}>Submit</button>
      </form>
    </div>



  )
}

export default Dashboard