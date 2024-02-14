import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PlacesToVisit() {
  const [states, setStates] = useState([])
  useEffect(() => {
    try {
      axios.get('https://india-tourism-backend.onrender.com/placesToVisit')
        .then(res => {
          setStates(res.data)
        })
    }
    catch (err) {
      console.error('Error:', err);
    }
  }, [])
  // console.log(states);
  return (
    <>
      <img className='placesToVisitImg' src='https://www.theindiatourism.com/images/places-to-visit-india.jpg' alt='' />
      <div className="placesToVisit">
        <h1>Top Tourist Destination India</h1>  <hr /> <br />
        <p><b>Top Tourist Destination India</b> is the home to numerous attractions, amenities, activities and beauties. It is not hard to believe that a land as diverse as India has a long list of travel destinations within its border. Starting from the valleys of <b>Kashmir</b> to the tri-colored sea of <b>Kanchipuram</b>, you will find numerous tourist attractions, which would suit your taste. If you were visiting India in winter, <b>Rajasthan</b>, <b>Agra</b>, <b>Maharashtra</b>, <b>Tamil Nadu</b>, <b>Kerala</b>, <b>Chandigarh</b>, <b>Karnataka</b>, Goa and other places would be in the top choice. If you choose to visit India in the monsoon, <b>Uttarakhand</b>, <b>Munnar</b>, <b>Mussorie</b>, <b>Cherrapunji</b> and Coorg are some of the places to choose. </p>
      </div>

      <div className="visitStates">
        {
          states.map((item, index) => {
            return (
              <div className='states' key={index}>
                <h4 className='stateTitle'>{item.title}</h4>
                <img src={item.poster} alt='' />
                <div className="div">
                  {
                    item.placeList.map((item, index) => {
                      return (
                        <ul key={index}>
                          <li>{item}</li>
                        </ul>
                      )
                    })
                  }
                </div>
                <p>View All</p>
              </div>
            )
          })
        }
      </div>

    </>
  )
}
