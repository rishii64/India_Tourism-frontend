import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ViewIndiaTourism() {
    const [tourism, setTourism] = useState([])
    const path = useParams().states
    useEffect(() => {
        axios.get(`http://localhost:4343/india-tourism/${path}`)
            .then(res => {
                setTourism(res.data)
            })
    }, [path])
    return (
        <>
            <img className='viewTourismImg' src='https://www.theindiatourism.com/images/india-tourism.jpg' alt='' />
            {
                tourism.map((item, index) => {
                    return (
                        <div className='viewTourismState' key={index}>
                            <h1>{item.title}</h1>   <hr /><br />
                            <p>{item.desc}</p>

                            <br />
                            <h1>{item.placeHead}</h1> <hr /><br />
                            <div className='viewTourismPlaces'>
                                {
                                    tourism[0]?.relatedPlace.map((item, index) => {
                                        return (
                                            <div className='viewTourismCategory' key={index}>
                                                <img src={item.placeImage} alt='' />
                                                <p>{item.placeName}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
