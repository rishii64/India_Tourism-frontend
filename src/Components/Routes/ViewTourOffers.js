import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ViewTourOffers() {
  const [offers, setOffers] = useState([])
  const path = useParams().offers

  useEffect(() => {
    try {
      axios.get(`https://india-tourism-backend.onrender.com/tour-offers/${path}`)
        .then(res => {
          setOffers(res.data)
          // console.log(res.data);
        })
    }
    catch (err) {
      console.error('Error:', err)
    }
  }, [path])
  // console.log(offers);
  return (
    <>
      <img className='tourOfferImg' src={offers.images?.poster} alt='' />
      <div className='viewTourOffers'>
        {
          offers.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.title}</h1> <hr /> <br />
                <p>{item.desc}</p>
              </div>
            )
          })
        }
        <div className='viewTourcategory'>
          {
            offers[0]?.relatedPlace?.map((item, index) => {
              return (
                <div className='viewTourOptions' key={index}>
                  <img src={item.placeImage} alt='' />
                  <h4>{item.placeName}</h4>
                  <p>{item.duration}</p>
                </div>
              )
            })
          }
        </div>

      </div>
    </>
  )
}
