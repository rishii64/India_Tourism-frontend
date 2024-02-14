import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('Token:')
    if (token) {
      navigate('/');
    }
  }, [navigate])

  const handleRegister = () => {
    const tempData = { name, email, password }
    try {
      axios.post(`https://india-tourism-backend.onrender.com/user/register`, tempData)
        .then((res) => {
          if (res.data.msg === 'This email is already in use !!') {
            toast.error('This email is already in use !!')
            setTimeout(() => {
              navigate('/user/login')
            }, 2000);
          }
          else {
            toast.success('Registered !!')
            setTimeout(() => {
              localStorage.setItem('Token:', res.data.token)
              navigate('/')
            }, 2000);
          }
        })
    }
    catch (err) {
      console.error('Registration failed with error', err)
    }
  }

  const style = {
    color: "orangered",
    fontWeight: "bold",
    fontSize: "20px"
  }

  return (
    <div className='register-Login'>
      <Toaster position="top-center" reverseOrder={false} />
      <form className='signUp'>
        <h2 className='header'>Create your new Account</h2> <br />

        <div className='form-item'>
          <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" required /> <br />
          <label>Name</label> <br />
        </div>

        <div className='form-item'>
          <input type="text" name='mail' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" required />  <br />
          <label>E-mail</label> <br />
        </div>

        <div className='form-item'>
          <input type="password" name='pass' value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" required />  <br />
          <label>Password</label> <br />
        </div>
        <button className='btnRegister' onClick={handleRegister}>SIGN UP</button> <br />
        <p style={style} onClick={() => navigate('/user/login')}>Existing User? Login</p>
      </form>
    </div>
  )
}
