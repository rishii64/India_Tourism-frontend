import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ViewtourPackages() {
    const [place, setPlace] = useState([])
    const path = useParams().places
    useEffect(() => {
        try {
            axios.get(`http://localhost:4343/tour-packages/${path}`)
                .then(res => {
                    setPlace(res.data)
                    // console.log(res.data)
                })
        }
        catch (err) {
            console.error('Error:', err)
        }
    }, [path])

    return (
        <div>
            {
                place.map((item, index) => {
                    return (
                        <div className='tourPlace'  key={index}>
                            <h1>{item.title}</h1> <hr/><br/>
                            <p>{item.desc}</p>
                        </div>
                    )
                })
            }

            <div className='tourOptions'>
                {
                    place[0]?.relatedPlace.map((item, index) => {
                        return (
                            <div className='tourCategory' key={index}>
                                <img src={item.placeImage} alt='' />
                                <p>{item.placeName}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
