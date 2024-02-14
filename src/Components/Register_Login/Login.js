import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('Token:')
    if (token) {
      navigate('/')
    }
  }, [navigate])

  const handleLogin = () => {
    try {
      axios.post(`http://localhost:4343/user/login`, { email, password })
        .then((res) => {
          if (res.data.msg === "User not registered") {
            alert(res.data.msg)
            navigate('/user/register')
          }
          else if (res.data.msg === 'Password is incorrect') {
            alert('incorrect password')
          }
          else {
            alert('User logged in successfully')
            localStorage.setItem('Token:', res.data.token)
            navigate('/')
          }
        })
    }
    catch (err) {
      console.error('Login failed with error', err)
    }
  }

  return (
    <div className='register-Login'>
      <div className='loginPage'>
        {/* <ToastContainer /> */}
        <section>
          <h1>Login Page</h1>
        </section>
        <span>
          <label>E-mail: </label>
          <input type='text' placeholder='enter e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />  <br /><br />
        </span>
        <span>
          <label>Password: </label>
          <input type='password' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />  <br /><br />
        </span>
        <button className='btnLogin' onClick={handleLogin}>Login</button>
        <p onClick={() => navigate('/user/register')}>New Here? Create an account</p>
      </div>
    </div>
  )
}
