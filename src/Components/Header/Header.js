import React from 'react'
import logo from '../Images/logo.webp'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function Header() {
  const navigate = useNavigate()
  const auth = localStorage.getItem('Token:')
  const user = localStorage.getItem('userName')

  const handleLogOut = () => {
    toast.success('User Logged Out !!')
    setTimeout(() => {
      localStorage.clear()
      navigate('/user/login')
    }, 2000)
  }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <header>
        <img className='logo' onClick={() => navigate('/')} src={logo} alt='India Tourism' />
        <div className="headerRight">
          Email: info@theindiatourism.com
          <div className='info_ph'>
            <span>
              <i className="fa-solid fa-phone-volume callIcon" /> +91-9549279999
            </span>
            {
              auth ?
                <div className='userInfo'>
                  <p title='user' className='user'>{user[0].toUpperCase()}</p>
                  <i title='Logout' className="fa-solid fa-arrow-right-to-bracket logout" onClick={handleLogOut} />
                </div>
                : <button title='Login' className='btnProfile' onClick={() => navigate('/user/login')}><i className="fa-regular fa-user" /></button>
            }
          </div>
        </div>
      </header>
    </div>
  )
}
