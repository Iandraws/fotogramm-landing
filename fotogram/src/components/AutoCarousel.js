// src/components/AutoCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';

import wording from '../constants/wording';
import translate from '../helpers/translate';

const testimonials = [
  {
    name: 'Nabel Hakim Productions',
    role: wording.photographerDescription,
    text: wording.feedbackNH,
    image: '/assets/users/11.png', // Replace with actual image path
  },
  {
    name: 'Essam Sakran Productions',
    role: wording.photographerDescription,
    text: wording.feedbackEssam,
    image: '/assets/users/22.png',
  },
  {
    name: 'Aweeha Group',
    role: wording.photographerDescription,
    text: wording.feedbackAweeha,
    image: '/assets/users/33.png',
  },

  {
    name: 'AH Production',
    role: wording.photographerDescription,
    text: wording.feedbackAH,
    image: '/assets/users/33.png',
  },

  {
    name: 'Studio Rotana',
    role: wording.photographerDescription,
    text: wording.feedbackRotana,
    image: '/assets/users/33.png',
  },

  {
    name: 'BBB Group',
    role: wording.photographerPrintDescription,
    text: wording.feedbackBBB,
    image: '/assets/users/33.png',
  },

  {
    name: 'Hamdan Group',
    role: wording.photographerDescription,
    text: wording.feedbackHamdan,
    image: '/assets/users/33.png',
  },
  {
    name: 'Studio El Fan',
    role: wording.photographerDescription,
    text: wording.feedbackElfan,
    image: '/assets/users/33.png',
  },
  {
    name: 'Shady Far Photography',
    role: wording.photographerDescription,
    text: wording.feedbackShady,
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
        paddingTop: { xs: '56px', md: '200px' },
        paddingBottom: { xs: '56px', md: '200px' },
        paddingLeft: { xs: '32px', md: '80px', lg: '100px', xl: '200px' },
        paddingRight: { xs: '32px', md: '80px', lg: '100px', xl: '200px' },
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', marginBottom: '30px' }}
      >
        {translate(wording.testimonialsTitle)}

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
                fontSize: '16px',
                lineHeight: 1.6,
              }}
            >
              "{translate(testimonial.text)}"
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                marginTop: '10px',
                fontSize: '16px',
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
              {translate(testimonial.role)}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AutoCarousel;
