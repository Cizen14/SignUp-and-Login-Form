import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css'
import './Loginvalidation';
import Validation from './Loginvalidation';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''

  })
  const [errors, setErrors]= useState({})

  const handleInput = (event) =>{
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(Validation(values));
  }
  return (
    <section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" >
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form action='' onSubmit={handleSubmit}>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3"></i>
                    <span class="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" >Sign into your account</h5>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example17">Email address</label>
                    <input type="email" name='email' id="form2Example17"onChange={handleInput} class="form-control form-control-lg" />
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                    
                   
                  </div>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example27">Password</label>
                    <input type="password" name='password' id="form2Example27" onChange={handleInput} class="form-control form-control-lg" />
                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                    
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2">Don't have an account? <Link to= '/signup' className='reg'
                      >Register here</Link></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login
