import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

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
            toast.error("user is not registered !")
            setTimeout(() => {
              navigate('/user/register')
            }, 2000);
          }
          else if (res.data.msg === 'Password is incorrect') {
            toast.error('Incorrect password !')
          }
          else {
            toast.success('successfully logged in !')
            localStorage.setItem('Token:', res.data.token);
            localStorage.setItem('userName', res.data.userData.name);
            setTimeout(() => {
              navigate('/')
            }, 2000);
          }
        })
    }
    catch (err) {
      console.error('Login failed with error', err)
    }
  }

  return (
    <div className='register-Login'>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='loginPage'>
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
