// src/components/AutoCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';

const testimonials = [
  {
    name: 'Bryan Adams',
    role: 'photographer/singer',
    text: "Fotogram manages to take the simple idea of sharing images to a new level, I can't believe someone didn't think of this sooner.",
    image: '/assets/users/11.png', // Replace with actual image path
  },
  {
    name: 'Claudia Gödke',
    role: 'food photographer',
    text: "My clients love the intuitive way to select their favorites and participate remotely on my photo shoots. It's a game changer!",
    image: '/assets/users/22.png',
  },
  {
    name: 'David Daub',
    role: 'ad photographer',
    text: 'Intuitive, super fast uploads and downloads and my clients love the easy handling. Did anyone say game-changer, yet?',
    image: '/assets/users/33.png',
  },
];

const AutoCarousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 700, // Smoother animation speed
    slidesToShow: 3, // Number of cards to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Slower autoplay for better readability
    pauseOnHover: true, // Pause the carousel when hovering over the slide
    responsive: [
      {
        breakpoint: 1024, // For tablet/laptop screens
        settings: {
          slidesToShow: 2, // Show fewer cards on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        paddingTop: { xs: '40px', md: '200px' },
        paddingBottom: { xs: '40px', md: '200px' },
        paddingLeft: { xs: '16px', md: '80px', lg: '100px', xl: '200px' },
        paddingRight: { xs: '16px', md: '80px', lg: '100px', xl: '200px' },
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', marginBottom: '30px' }}
      >
        Loved by over 150K photographers around the world:
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              padding: { xs: '0px', md: '24px' },
              textAlign: 'center',
              borderRadius: '24px',
              backgroundColor: '#fefefe',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              minHeight: '350px',
            }}
          >
            {/* Image Container */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                marginBottom: '15px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  width: '100px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </Box>

            {/* Testimonial Content */}
            <Typography
              variant="body1"
              sx={{
                fontStyle: 'italic',
                marginTop: '10px',
                marginBottom: '10px',
                fontSize: '1rem',
                lineHeight: 1.6,
              }}
            >
              "{testimonial.text}"
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                marginTop: '10px',
                fontSize: '1.1rem',
              }}
            >
              {testimonial.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#777',
                fontSize: '0.9rem',
              }}
            >
              {testimonial.role}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AutoCarousel;
