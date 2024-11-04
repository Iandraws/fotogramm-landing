// src/components/AutoCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';

const testimonials = [
  {
    name: "Bryan Adams",
    role: "photographer/singer",
    text: "Picdrop manages to take the simple idea of sharing images to a new level, I can't believe someone didn't think of this sooner.",
    image: "/assets/users/11.PNG", // Replace with actual image path
  },
  {
    name: "Claudia Gödke",
    role: "food photographer",
    text: "My clients love the intuitive way to select their favorites and participate remotely on my photo shoots. It’s a game changer!",
    image: "/assets/users/22.PNG",
  },
  {
    name: "David Daub",
    role: "ad photographer",
    text: "Intuitive, super fast uploads and downloads and my clients love the easy handling. Did anyone say game-changer, yet?",
    image: "/assets/users/33.PNG",
  },
];

const AutoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // You can adjust how many cards to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ padding: '40px', backgroundColor: '#fff' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Loved by over 150K photographers around the world:
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '300px', // Set a fixed height for proper alignment
            }}
          >
            {/* Image Container */}
            <Box
              sx={{
                width: '100px',
                height: '100px',
                marginBottom: '15px',
                borderRadius: '50%',
                overflow: 'hidden', // Ensures the image stays inside the circular container
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional for a slight shadow effect
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                    marginRight:'20px',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures the image fills the container without distortion
                }}
              />
            </Box>

            {/* Testimonial Content */}
            <Typography variant="body1" sx={{ fontStyle: 'italic', marginTop: '10px', marginBottom: '10px' }}>
              "{testimonial.text}"
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
              {testimonial.name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#777' }}>
              {testimonial.role}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AutoCarousel;
