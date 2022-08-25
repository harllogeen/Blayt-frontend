import React from 'react'


const Frontend = () => {
  return (
    <div>
      <h1>Frontend</h1>
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

export default Frontend