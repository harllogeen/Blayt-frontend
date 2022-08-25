import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    //Handle Inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    //Handle Login
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = user;
        try {
            const res = await fetch('/login', {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })
            if (res.status === 400 || !res) {
                window.alert("Invalid Credentials")
            } else {
                window.alert("Login Successfully");
                navigate('/dashboard')
                window.location.reload();

                //Token is generated when we logged in.
                //Now we need to create Schema fr messages

            }
        } catch (error) {
            console.log(error)
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
        <div>
            <div className="container shadow my-5">
                <div className="row mt-4">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form mt-5" id='pad'>
                        <h1 className='display-4 fw-bold'>Welcome Back</h1>
                        <p className='lead'>Enter your Credentials to Login</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to='/register' className="btn btn-outline-light rounded-pill pb-2 w-50" id='padding'>Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className='displat-6 fw-bolder mb-5'>LOGIN</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name='email' value={user.email} onChange={handleChange}
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    name='password' value={user.password} onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={checkboxHandler} />
                                <label className="form-check-label" htmlFor="exampleCheck1">I Agree Terms and Conditions</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 rounded-pill " disabled={!agree} onClick={btnHandler}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;