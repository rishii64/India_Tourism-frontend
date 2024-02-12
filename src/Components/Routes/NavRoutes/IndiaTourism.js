import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function IndiaTourism() {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:4343/indiaTourism')
    .then(res=>{
      setData(res.data)
    })
  },[])
  return (
    <>
      <img className='indiaTourismImg' src='https://www.theindiatourism.com/images/the-india-tourism.jpg' alt='' />
      <div className='indiaTourism'>
        <h1>Tourism of India</h1> <hr/><br/>
        <p>India Tourism, <b>Himachal Pradesh, Kerala, Goa, Madhya Pradesh, Gujarat, Maharashtra</b> along with a few others are some of the best <b>places to visit</b> in India. With a variety of attractions, these places urge you to travel to your heart's content. And, whatever you are going to explore, will surely leave a long-lasting impression on you.
          <b>Beaches, backwaters</b>, vast stretches of <b>deserts</b>, snow-laden peaks and Indian <b>wildlife sanctuaries</b> make the country one of the best winter destinations. Tourism India during the winter season are perfect ways of bidding farewell to the previous year and welcoming the new one excitingly.
          When the sun starts shining brightly, people throng the picturesque hill stations with snow-laden peaks. A perfect escape from the scorching heat and soaring temperature can be found only in India.</p>
        
        <div className="tourismPlaces">
          {
            data.map((item,index)=>{
              return (
                <div className='tourismStates' onClick={()=> navigate(`/india-tourism/${item.title}`)} key={index}>
                  <img src={item.images} alt='' />
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
