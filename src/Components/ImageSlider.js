import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?size=626&ext=jpg&ga=GA1.1.390521900.1707301617&semt=sph.jpg" },
    { url: "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?size=626&ext=jpg&ga=GA1.1.390521900.1707301617&semt=sph.jpg" },
    { url: "https://img.freepik.com/free-photo/nature-beauty-revealed-coastline-turquoise-waters-generative-ai_188544-12614.jpg?size=626&ext=jpg&ga=GA1.1.390521900.1707301617&semt=sph.jpg" },
    { url: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?size=626&ext=jpg&ga=GA1.1.390521900.1707301617&semt=sph.jpg" },
    { url: "https://img.freepik.com/free-photo/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter_335224-427.jpg?size=626&ext=jpg&ga=GA1.1.390521900.1707301617&semt=sph.jpg" },
    { url: "https://img.freepik.com/free-photo/landscape-railay-beach-sunrise-krabi-thailand_335224-1398.jpg?size=626&ext=jpg&ga=GA1.1.390521900.1707301617&semt=sph.jpg" },
    { url: "https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg?size=626&ext=jpg&ga=GA1.1.390521900.1707301617&semt=sph.jpg" },
];

export default function ImageSlider() {
    return (
        // <div className='imageSlider'>
            <SimpleImageSlider
                width={"100%"} height={400} images={images} 
                showBullets={true} showNavs={true}
                slideDuration={0.5} autoPlay />
        // </div>
    )
}
