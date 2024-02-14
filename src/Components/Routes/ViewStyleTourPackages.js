import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ViewStyleTourPackages() {
    const [place, setPlace] = useState([])
    const path = useParams().styles

    useEffect(() => {
        try {
            axios.get(`https://india-tourism-backend.onrender.com/style-tour-packages/${path}`)
                .then(res => {
                    setPlace(res.data)
                })
        }
        catch (err) {
            console.error('Error:', err)
        }
    }, [path])

    return (
        <>
            <img className='styleTourImg' src={place.poster} alt='' />
            <div className='tourPlace'>
                <h1>{place?.title}</h1> <hr /><br />
                <p>{place?.desc}</p>
                
                <div className="styleTourPackageCategory">
                    {
                        place.relatedPlace?.map((item, index) => {
                            return (
                                <div className='styleTourPackageOptions' key={index}>
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
