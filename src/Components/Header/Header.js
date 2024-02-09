import React from 'react'
import logo from '../Images/logo.webp'
import {useNavigate} from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <div>
      <header>
        <img className='logo' onClick={()=> navigate('/')} src={logo} alt='India Tourism' />
        <div className="headerRight">
          Email: info@theindiatourism.com
          <div className='info_ph'><i className="fa-solid fa-phone-volume callIcon" /> +91-9549279999</div>
        </div>
      </header>
    </div>
  )
}
