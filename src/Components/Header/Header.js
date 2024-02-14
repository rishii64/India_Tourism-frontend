import React from 'react'
import logo from '../Images/logo.webp'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

export default function Header(props) {
  const navigate = useNavigate()
  const auth = localStorage.getItem('Token:')
  const { user } = useAuth0();

  const handleLogOut=()=>{
    alert('User Logged Out')
    localStorage.clear()
    navigate('/')
  }

  return (
    <div>
      <header>
        <img className='logo' onClick={() => navigate('/')} src={logo} alt='India Tourism' />
        <div className="headerRight">
          Email: info@theindiatourism.com
          <div className='info_ph'>
            <span>
              <i className="fa-solid fa-phone-volume callIcon" /> +91-9549279999
            </span>
            {
              auth ? <p onClick={handleLogOut}>{localStorage.getItem('userName')[0].toUpperCase()}</p> : <button className='btnProfile' onClick={() => navigate('/user/login')}><i className="fa-regular fa-user" />
              {auth && <p>{user.name}</p>}
              </button>
            }
          </div>
        </div>
      </header>

    </div>
  )
}
