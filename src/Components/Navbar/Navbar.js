import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/india_tourism'>INDIA TOURISM</NavLink>
        <NavLink to='/tour_packages'>TOUR PACKAGES</NavLink>
        <NavLink to='/places_to_visit'>PLACES TO VISIT</NavLink>
        <NavLink to='/tour_offers'>TOUR OFFERS</NavLink>
        <NavLink to='/contact_us'>CONTACT US</NavLink>
      </nav>

    </>
  )
}