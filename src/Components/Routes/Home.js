import React, { useEffect, useState } from 'react'
import ImageSlider from '../Slider/ImageSlider'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export default function Home() {
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const path = useParams().places
  const navigate = useNavigate()

  useEffect(() => {
    try {
      axios.get('https://india-tourism-backend.onrender.com')
        .then(res => {
          setData(res.data);
        })
      axios.get('https://india-tourism-backend.onrender.com/homeStyleTourPackages')
        .then(res => {
          setData2(res.data)
        })
    }
    catch (err) {
      console.error('Error:', err)
    }
  }, [path]);

  return (
    <>
      <ImageSlider />
      <div className="homeTourHead">
        <h1>The India Tourism - Guided & Customized Private Tour to India</h1> <hr /> <br />
        <p>
          <b>India Tourism</b> is an unequivocally welcoming nation, that bestows reverence and love for its visitors. A nation which follows only one belief blindly <b>“Atithi Devo Bhava”</b> which means “Guest is equivalent to God”. There is so much to discover, a land with varied civilizations, deep-rooted ideologies, uncountable faiths, that is also related to particular historical stories. <b>India Tourism</b> provides an outstanding rich heritage, tasty cuisines from numerous parts of the world, a multitude of enticing sightseeing spots, and much more while visiting this beautiful country. An avid traveler will simply find his place here.<br />
          <br />
          <b>Culture - India Tourism</b><br />
          India is the country that quickly and last experiences on their mind get into one's heart. Perhaps there is no other nation with such a rich mixture of races, vivid colors, language, food, a land overloaded with vibr/ancy and intense inconsistencies. His country is the birthplace of Hinduism, Buddhism, Jainism and Sikhism; People in any area can be spotted adopting their own special cultural and religious traditions. Yoga is undeniably the biggest destination for spiritual visitors, and Rishikesh, situated in Northern India, is commonly regarded as the country's Yoga hub. Your trip to India will definitely send you goosebumps and a memory like a rollercoaster ride.<br />
          <br />
          <b>Architecture of India - India Tourism</b><br />
          India has <b>32 UNESCO World Heritage-listed sites</b> around the country, making it an epitome of historical wonders, if we speak about the architectural beauty of India has an extensive array of attractive forts, palaces, temples and its ruins and shrines as well. India itself is an international tourist bundle, they only need to select a destination according to their desires and prepare their itinerary. If you have a deep urge to discover a wonderland on this planet, then pack our bags and come to India, a land that is truly blessed with an abundance of natural wonder.<br />
          <br />
          <b>Explore India - India Tourism</b><br />
          Well, every part of the world has a different tale to tell, with enchanting elegance and majestic culture, Northern India is truly blessed, one can get absolutely soaked in valleys and waterfalls and lush greenery of Himalayan ranges. The western part of the world has a striking beauty of architectural wonder, and what people enjoy about this place is the contemporary lifestyle. And we're talking about the regions of the Sunderbans or the eastern part of India, well, no one can argue that this area is blessed with the scenic beauty of high hills, ondulating rivers and waterfalls. Finally, the southern area is blessed with planting and foliage loads, an exotic destination in the entire world, a combination of enticing beach sites, Tourists continue to see hills and waterfalls again and again! There are plenty of great reasons to visit India Tourism, so we have already offered a mini-tour.<br />
          <br />
          <b>Why Travel to India? - India Tourism</b><br />
          Plan a trip once, and you will come to know that this nation embellishes exotic and energetic metropolitan conventions with both serene and plain village life. Welcoming you to "The Soul of Incredible India" with open arms and intriguing taglines such as, <b>"God's Own Country",</b> this country has its own special ways of making people fall in love with her!<br />
          Foreign tourists who fly to India, You are certainly in for a surprise, particularly for the first time. Things can seem a little messy, overwhelming, and out of reach before you start to become attuned to the way of life in this diverse country. You will better plan for the trip ahead by becoming acquainted with the terrain, climate, history, languages and other important pieces of knowledge. Here are a few specifics that would be helpful.
        </p>
      </div>

      <div className="homeTourPackages">
        <h2>Find your Ideal Tour Packages</h2>  <hr /> <br />
        <p>Travel in India like nothing you've ever eperienced, from the magnificience Taj Mahal to the highlights of Kerela, Goa and India, this is a great trip for first-time visitors as it encompasses all of the major tourist destinations.</p>
        <div className='idealTourPackage'>
          {
            data.map((item, index) => {
              return <div className='tourPackage' onClick={() => navigate(`/tour-packages/${item.title}`)} key={index}>
                <img src={item.images.thumbnail} alt='' />
                <p>{item.title}</p>
              </div>
            })
          }
        </div>
      </div>

      <div className='homeHolidayDestination'>
        <h2>Find your Perfect Holiady Destination</h2> <hr /> <br />
        <p>Check out this India most iconic heritage, natural beauty, colourful, cultural and spiritual Attractions India. Beaches, backwaters, vast stretches of deserts, snow-laden peaks and Indian wildlife sanctuaries make the country one of the best winter destinations.  </p>
        <div className="holidayDestinations">
          <div className="destinations">
            <img src='https://www.theindiatourism.com/images/Kerala.webp' alt='' />
            <h4>Kerala</h4>
            <p>Houseboat</p>
          </div>
          <div className="destinations">
            <img src='https://www.theindiatourism.com/images/taj-mahal-tour.webp' alt='' />
            <h4>Agra</h4>
            <p>Taj Mahal</p>
          </div>
          <div className="destinations">
            <img src='https://www.theindiatourism.com/images/varanasi-tour.webp' alt='' />
            <h4>Varanasi</h4>
            <p>Ganga Arti</p>
          </div>
          <div className="destinations">
            <img src='https://www.theindiatourism.com/images/Khajuraho-tours.webp' alt='' />
            <h4>Khajuraho</h4>
            <p>Monuments</p>
          </div>
          <div className="destinations">
            <img src='https://www.theindiatourism.com/images/Jaipur-tour.webp' alt='' />
            <h4>Jaipur</h4>
            <p>Elephant Ride</p>
          </div>
          <div className="destinations">
            <img src='https://www.theindiatourism.com/images/mumbai-tour.webp' alt='' />
            <h4>Mumbai</h4>
            <p>Bollywood</p>
          </div>
        </div>
      </div>

      <div className="styleTourPackages">
        <h2>Choose your Style of Tour Packages</h2> <hr /> <br />
        <p>Our collection of tour are themed by a style to help you get the most out of your wonderful holiday in India whether you're looking for a small group tour, private tailor made holiday to see India, These packages are meant to cater every of your interest, and that too without hampering your comfort in the travel. The intriguing land of India has so much to explore. </p>
        <div className='sectionTourpackages'>
          {
            data2.map((item, index) => {
              return (
                <div className='sectionTourTypes' onClick={() => navigate(`/style-tour-packages/${item.title}`)} key={index}>
                  <img src={item.thumbnail} alt='' />
                  <p>{item.title}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
