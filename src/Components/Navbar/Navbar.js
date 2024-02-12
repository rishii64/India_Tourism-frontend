import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  let toggle = () => {
    let nav_menu = document.querySelector('.navbar')
    nav_menu.classList.toggle('hide')
    nav_menu.classList.remove('active')
  }

  return (
    <>
      <button className='hamBurger' onClick={toggle}>Nav</button>
      <nav className='navbar hide active'>
        <NavLink onClick={toggle} to='/'>HOME</NavLink>
        <NavLink onClick={toggle} to='/india_tourism'>INDIA TOURISM</NavLink>
        <NavLink onClick={toggle} to='/tour_packages'>TOUR PACKAGES</NavLink>
        <NavLink onClick={toggle} to='/places_to_visit'>PLACES TO VISIT</NavLink>
        <NavLink onClick={toggle} to='/tour_offers'>TOUR OFFERS</NavLink>
        <NavLink onClick={toggle} to='/contact_us'>CONTACT US</NavLink>
      </nav>

    </>
  )
}