import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg" },
    { url: "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg" },
    { url: "https://images.pexels.com/photos/2433467/pexels-photo-2433467.jpeg" },
    { url: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg" },
    { url: "https://images.pexels.com/photos/9400988/pexels-photo-9400988.jpeg" },
    { url: "https://images.pexels.com/photos/2566553/pexels-photo-2566553.jpeg" },
    { url: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg" },
];

export default function ImageSlider2() {
    return (
        <SimpleImageSlider
            width={"100%"} height={400} images={images}
            showBullets={true}
            slideDuration={0.5}
            autoPlay
        />
    )
}
