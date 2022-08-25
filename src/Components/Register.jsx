import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
// import {  } from 'react-router'

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    //Handle Inputs
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    //Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        //object Destructuring
        //Store Object Data into Variable
        const { username, email, password } = user;
        try {
            //it is submitted on port 3000 by default
            //which is frontend but we need to
            //submit it on backend which is on port 3001
            //so we need proxy.
            const res = await fetch('/register', {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, email, password
                })
            })

            if (res.status === 400 || !res) {
                window.alert("Already Used Details")
            } else {
                window.alert("Registered Successfully");
                navigate('/login')
            }
        } catch (error) {

        }
    };
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
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end mt-4">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2 mt-5" id='pad'>
                        <h1 className='display-4 fw-bold'>Hello, Friends</h1>
                        <p className='lead'>Enter your Details to Register</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to='/login' className="btn btn-outline-light rounded-pill pb-2 w-50" id='padding'>Login</NavLink>
                    </div>
                    <div className="col-md-6 p-5">

                        <form onSubmit={handleSubmit} method="POST">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Usename</label>
                                <input type="text" className="form-control" id="name"
                                    name='username' value={user.username} onChange={handleInput}
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputPassword1"
                                    name='email' value={user.email} onChange={handleInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    name='password' value={user.password} onChange={handleInput}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={checkboxHandler} />
                                <label className="form-check-label" htmlFor="exampleCheck1">I Agree Terms and Conditions</label>
                            </div>
                            <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill" disabled={!agree} onClick={btnHandler}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register