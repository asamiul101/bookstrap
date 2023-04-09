import React from 'react';

function signup() {
  return (
    <section class='vh-100 bg-image'>
      <div class='d-flex justify-content-center h-100'>
        <div class='cardSignup '>
          <div class='card-body p-5'>
            <h2
              class='text-uppercase text-center mb-5'
              style={{ color: 'white' }}
            >
              Create an account
            </h2>

            <form>
              <div class='form-outline mb-4'>
                <input
                  type='text'
                  placeholder='Your name'
                  id='name'
                  class='form-control form-control-lg'
                />
              </div>

              <div class='form-outline mb-4'>
                <input
                  type='email'
                  placeholder='Your email'
                  id='email'
                  class='form-control form-control-lg'
                />
              </div>

              <div class='form-outline mb-4'>
                <input
                  type='password'
                  placeholder='Your password'
                  id='password'
                  class='form-control form-control-lg'
                />
              </div>

              <div class='form-outline mb-4'>
                <input
                  type='password'
                  placeholder='Repeat your password'
                  id='confirmedPassword'
                  class='form-control form-control-lg'
                />
              </div>
              <div class='row align-items-center remember'>
                <input type='checkbox' />I agree all statements in Terms of
                service
              </div>

              <div class='d-flex justify-content-center'>
                <button type='button' class='button-20'>
                  Register
                </button>
              </div>

              <p
                class='text-center text-muted mt-5 mb-0'
                style={{ color: 'black' }}
              >
                Have already an account?
                <a href='/login' class='fw-bold text-body'>
                  <u style={{ color: 'white', paddingLeft: '30px' }}>
                    Login here
                  </u>
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default signup;
