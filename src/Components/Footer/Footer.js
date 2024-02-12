import React from 'react'
import { NavLink } from 'react-router-dom'
import banner from '../Images/India-tour-footer.webp'
import paypal from '../Images/paypal.webp'

export default function Footer() {
    return (
        <footer>
            <div className='links'>
                <NavLink to='/contact_us'>Contact Us</NavLink>
                <NavLink to='/sitemap'>Sitemap </NavLink>
                <NavLink to='/sitemap_xml'>Sitemap xml </NavLink>
                <NavLink to='/payment_procedure'>Payment Procedure </NavLink>
                <NavLink to='/terms_n_conditions'>Terms & Conditions </NavLink>
                <NavLink to='/link_exchange'>Link Exchange </NavLink>
                <NavLink to='/blog'>Blog </NavLink>
                <NavLink to='/rajasthan_tour'>Rajasthan Tour </NavLink>
            </div>
            <div className='sectionHead'>
                <div className="section_a">
                    <h2>The India Tourism</h2>
                    <span><i className="fa-solid fa-envelope mail" /> : info@theindiatourism.com</span>
                    <p>
                        <span>
                            <i className="fa-brands fa-square-facebook fa-xl fb" />
                            <i className="fa-brands fa-youtube fa-xl yt" />
                            <i className="fa-brands fa-square-twitter fa-xl twitter" />
                        </span>
                        <img src={paypal} alt='paypal' />
                    </p>
                </div>
                <div className="section_b">
                    <img className='banner' src={banner} alt='India-tour-footer' />
                    <span><i className="fa-regular fa-copyright fa-xs" /> The India Tourism</span>
                </div>
            </div>
        </footer>
    )
}
