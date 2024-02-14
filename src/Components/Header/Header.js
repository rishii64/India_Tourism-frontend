import React from 'react'
import logo from '../Images/logo.webp'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
// import { NavLink } from 'react-router-dom'

export default function Header(props) {
  const navigate = useNavigate()
  const auth = localStorage.getItem('Token:')
  // console.log(auth);
  const { user } = useAuth0();

  const handleLogOut=()=>{
    alert('User Logged Out')
    localStorage.clear('Token:')
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
              auth ? <button onClick={handleLogOut}>LogOut</button> : <button className='btnProfile' onClick={() => navigate('/user/login')}><i className="fa-regular fa-user" />
              {auth && <p>{user.name}</p>}
              </button>
            }
            {/* <button className='btnProfile' onClick={() => navigate('/user/login')}><i className="fa-regular fa-user" /></button> */}

          </div>
        </div>
      </header>

    </div>
  )
}
