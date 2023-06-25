import React from 'react'

const Register = () => {
  return (
    <>
      <form className='register' action="">
        <h2>Register an account</h2>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className='form'>Register</button>
      </form>
    </>
  )
}

export default Register