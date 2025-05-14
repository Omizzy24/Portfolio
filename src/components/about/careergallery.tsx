'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import './about.scss'; // Ensure this CSS file is created for styling
// import './careergallery.css'; // Optional: create this CSS file

const careerPhotos = [
  //  { src: '/images/omar-speaking.jpg', alt: 'Speaking at a tech conference' },
   // { src: '/images/omar-workshop.jpg', alt: 'Running a ML workshop' },
    { src: '/Users/omaral-shammary/Desktop/Portfolio_repos/Portfolio WIP - Choice 2 /Minifolio/public/omar-hiking.jpg', alt: 'Hiking through nature – my personal reset' },
   // { src: '/images/omar-team.jpg', alt: 'Team brainstorming session' },
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 },
        },
    ],
};

const CareerGallery: React.FC = () => {
    return (
        <div className="photo-section">
            <h3 className="section-header">A Look Through My Lens 📷</h3>
            <Slider {...sliderSettings}>
                {careerPhotos.map((photo, i) => (
                    <div key={i} className="photo-slide">
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            width={500}
                            height={300}
                            className="career-photo"
                        />
                        <p className="photo-caption">{photo.alt}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CareerGallery;

