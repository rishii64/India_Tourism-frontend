import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'

import { Routes, Route } from 'react-router-dom'
import Register from './Register_Login/Register'
import Login from './Register_Login/Login'
import Home from './Routes/NavRoutes/Home'
import IndiaTourism from './Routes/NavRoutes/IndiaTourism'
import TourPackages from './Routes/NavRoutes/TourPackages'
import PlacesToVisit from './Routes/NavRoutes/PlacesToVisit'
import TourOffers from './Routes/NavRoutes/TourOffers'
import ContactUs from './Routes/NavRoutes/ContactUs'
import Sitemap from './Routes/FooterRoutes/Sitemap'
import SitemapXML from './Routes/FooterRoutes/SitemapXML'
import PaymentProcedure from './Routes/FooterRoutes/PaymentProcedure'
import TermsNConditons from './Routes/FooterRoutes/TermsNConditons'
import LinkExchange from './Routes/FooterRoutes/LinkExchange'
import Blog from './Routes/FooterRoutes/Blog'
import RajasthanTour from './Routes/FooterRoutes/RajasthanTour'
import Footer from './Footer/Footer'

import ViewtourPackages from './Routes/NavRoutes/ViewtourPackages'
import ViewStyleTourPackages from './Routes/NavRoutes/ViewStyleTourPackages'
import ViewTourOffers from './Routes/NavRoutes/ViewTourOffers'


export default function HomeComp() {

  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/user/register' element={<Register />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/tour-packages/:places' element={<ViewtourPackages />} />
        <Route path='/style-tour-packages/:styles' element={<ViewStyleTourPackages />} />
        <Route path='/india_tourism' element={<IndiaTourism />} />
        <Route path='/tour_packages' element={<TourPackages />} />
        <Route path='/places_to_visit' element={<PlacesToVisit />} />
        <Route path='/tour_offers' element={<TourOffers />} />
        <Route path='/tour-offers/:offers' element={<ViewTourOffers />} />
        <Route path='/contact_us' element={<ContactUs />} />

        <Route path='/sitemap' element={<Sitemap />} />
        <Route path='/sitemap_xml' element={<SitemapXML />} />
        <Route path='/payment_procedure' element={<PaymentProcedure />} />
        <Route path='/terms_n_conditions' element={<TermsNConditons />} />
        <Route path='/link_exchange' element={<LinkExchange />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/rajasthan_tour' element={<RajasthanTour />} />
      </Routes>
      <Footer />
    </div>
  )
}
