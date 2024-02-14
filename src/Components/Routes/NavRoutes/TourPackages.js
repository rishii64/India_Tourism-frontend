import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function TourPackages() {
  const [themes, setThemes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Token:")) {
      try {
        axios.get('http://localhost:4343/tourPackagesThemes')
          .then(res => {
            setThemes(res.data)
          })
      }
      catch (err) {
        console.error('Err:', err);
      }
    } else {
      navigate("/user/login")
    }
  }, [navigate]);

  return (
    <>
      <img className='tourPackagesImg' src='https://www.theindiatourism.com/images/india-tourism.jpg' alt='' />
      <div className='tourPackages'>
        <h1>India Packages by Themes</h1> <hr /> <br />
        <p><b>India Tours</b> is one of the most beautiful countries in the world, and to explore it fully <b>holiday packages</b> in India such as these can be availed. To better understand and experience India’s geographical and cultural diversity, there is a wide range of <b>India tour packages</b> for travelers to pick from. Varying from destination to destination, these domestic tour packages in India take you for a relaxing vacation to beautiful hill-stations, quaint towns, cosmopolitan metros, and amazing beach cities. Choose to relax for a few days, or enjoy adventure packed tours of India, the choice is yours. Exploring India is an easy task if you can choose the right tour packages in India. You can choose a tour according to the different <b>themes, destinations,</b> durations or interests. You will get some incredible variations and it will be an amazing vacation for you, without a doubt! Be it a relaxed holiday in one of the <b>hill stations,</b> an adventurous one in a beach destination, a calming one in the backwaters or a thrilling one in a <b>wildlife sanctuary,</b> you will find it all. You can behold the best of ethnic history in the havelis of Rajasthan or get the best of your spiritual inclination at the various temples in the Southern India. The snow-capped mountains in the Himalayan range is sure to give you the chills and the huge coastline of numerous, picturesque beaches will simply take your breath away! Browse through our specially-crafted list of <b>India holiday packages</b> below to find your preferred trip. Think of India and we cater to your interests or we can help you <b>customize your trip. </b></p>

        <div className="packagesThemes">
          {
            themes?.map((item, index) => {
              return (
                <div className='packageItems' key={index}>
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
