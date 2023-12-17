import React, {useState} from 'react'
import './signup.css';
import { Link } from 'react-router-dom';
import Validation from './Loginvalidation';


function SignUp() {
  const [values, setValues] = useState({
    name : '',
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
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form action='' onSubmit={handleSubmit} class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">Your Name</label>
                      <input type="text" id="form3Example1c" name='name' class="form-control" />
                      {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label"  for="form3Example3c">Your Email</label> 
                      <input type="email" name='email' id="form3Example3c" class="form-control" />
                      {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4c">Password</label>
                      <input type="password" name= 'password' id="form3Example4c" class="form-control" />
                      {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      <input type="password" name= 'password' id="form3Example4cd" class="form-control" />
                      {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                  </div>

                  

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="Submit" class="btn btn-primary btn-lg">Sign Up</button>
                  </div>
                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <p class="mb-5 pb-lg-2">Don't have an account? <Link to= '/' className='reg'
                      >Login</Link></p>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

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

export default SignUp
