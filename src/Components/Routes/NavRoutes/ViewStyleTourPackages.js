import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ViewStyleTourPackages() {
    const [place, setPlace] = useState([])
    const path = useParams().styles
    useEffect(() => {
        try {
            axios.get(`http://localhost:4343/style-tour-packages/${path}`)
                .then(res => {
                    setPlace(res.data)
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
                        <div className='tourPlace' key={index}>
                            <h1>{item.title}</h1> <hr /><br />
                            <p>{item.desc}</p>

                        </div>
                    )
                })
            }
        </div>
    )
}
