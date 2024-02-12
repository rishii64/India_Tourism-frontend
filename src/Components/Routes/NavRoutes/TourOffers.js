import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function TourOffers() {
  const [offers, setOffers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    try {
      axios.get('http://localhost:4343/toursOffers')
        .then(res => {
          setOffers(res.data)
        })
    }
    catch (err) {
      console.error("Error:", err)
    }
  }, [])
  
  return (
    <div>
      <img className='indiaTourismImg' src='https://www.theindiatourism.com/images/the-india-tourism.jpg' alt='' />

      <div className="toursOffers">
        <h1>India Special Offer Tour Packages</h1> <hr /> <br />
        <p><b>India Special Offer Tour</b> contains the particularly special experience of India. Such as <b>Luxury Tours,</b> Pilgrimage tours for all the religion people, <b>Festival tours</b> of India etc. <b>Do Dham, char Dham,</b> Hemkund Saheb, Ponta Saheb, Yamnotri, Gangotri, Kedarnath, Badrinath, Mosque &amp; Dargah tours under Piligrimage tour. Festivals of North East, <b>Ladakh,</b> Rajasthan etc are very popular among the tourist. We also orgainise tour for some particular interest like short trekking in the Himalayan region, <b>camel safari</b> in Rajasthan, <b>Honeymoon tours,</b> trout fishing in the still lakes of Himalayan valleys, house boat holidays in <b>Kerala</b> or <b>Kashmir,</b> White water rafting on Ganges and other rivers and so on. Create memoirs that last a lifetime by exploring the much admired places of India. We tender affordable and attractive <b>India Tour Packages</b> to suit the needs of every tourist. Choosing any of these <b>holiday packages</b> will provide you with wholesome experiences that you will love to treasure with your friends in joyful time.</p>

        <div className="tourOffersCategory">
          {
            offers.map((item, index) => {
              return (
                <div className='tourOffersOptions' onClick={() => navigate(`/tour-offers/${item.title}`)} key={index}>
                  <img src={item.images.thumbnail} alt='' />
                  <p>{item.title}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
