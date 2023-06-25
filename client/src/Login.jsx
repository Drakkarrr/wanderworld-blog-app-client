import React from 'react'

const Login = () => {
  return (
    <>
      <form className='login' action="">
      <h2>Login account</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className='form'>Login</button>
      </form>
    </>
  )
}

export default Login