import React, { useState } from 'react'

const Contact = () => {

    const [msg, setMsg] = useState({
        name: "",
        email: "",
        message: ""
    });

    //Handle Inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMsg({ ...msg, [name]: value });
    }

    //Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        //object Destructuring
        //Store Object Data into Variable
        const { name, email, message } = msg;
        try {
            //it is submitted on port 3000 by default
            //which is frontend but we need to
            //submit it on backend which is on port 3001
            //so we need proxy.
            const res = await fetch('/message', {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, message
                })
            })
            console.log(res.status)
            if (res.status === 400 || !res) {
                window.alert("Message Not Sent. Try Again")
            } else {
                window.alert("Message Sent Successfully");
                setMsg({
                    name: "",
                    email: "",
                    message: ""
                })
            }
        } catch (error) {

        }
    }


    return (
        <div className='mycontact'>
            <section id='contact'>
                <div className='container my-5 py-5 '>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='fs-7 text-center mb-0' id='font-size'>
                                Contact Us
                            </h3>
                            <h1 className='display-6 text-center mb-4'>Have Some <b>Question?</b></h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <img src='/assets/front5.jpg' alt='contact' className='w-100' />
                        </div>
                        <div className='col-md-6'>
                            <form onSubmit = {handleSubmit} method="POST" className='form-contact'>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input type="text  " className="form-control" id="" placeholder="Enter your Name"
                                        name='name' value={msg.name} onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" class="form-label">Your Email</label>
                                    <input type="text  " class="form-control" id="" placeholder="Enter your Email"
                                        name='email' value={msg.email} onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                        name='message' value={msg.message} onChange={handleChange} >
                                    </textarea>
                                </div>
                                <button type='submit' className='btn btn-outline-primary rounded-pill px-4'>Send Message<i className='fa fa-paper-plane ms-2' /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact