import { Box, Typography } from '@mui/material';
import React from 'react';
import TryIt from './TryIt';
import translate from '../helpers/translate';
import wording from '../constants/wording';

const sections = [
  {
    title: translate(wording.ourVisionTitle),
    description: translate(wording.ourVisionDescription),
    image: '/assets/Shield2.png',
    style: { maxWidth: { xs: '220px', md: '500px' } },
  },
  {
    title: translate(wording.analyticsDashboardTitle),
    description: translate(wording.analyticsDashboardDescription),
    image: '/assets/Dashboard Web.png',
    style: { maxWidth: { xs: '320px', md: '410px' } },
  },

  {
    title: translate(wording.liveImageStreamingTitle),
    description: translate(wording.liveImageStreamingDescription),
    image: '/assets/funk/LiveEventGif.mp4',
    style: { maxWidth: '350px' },
  },
  {
    title: translate(wording.aiFaceRecognitionTitle),
    description: translate(wording.aiFaceRecognitionDescription),
    image: '/assets/FaceRecognition2.png',
    style: { maxWidth: { xs: '220px', md: '300px' } },
  },
  {
    title: translate(wording.brandingAndWatermarkTitle),
    description: translate(wording.brandingAndWatermarkDescription),
    image: '/assets/funk/Individual_Branding.png',
    style: { maxWidth: { xs: '350px', md: '500px' } },
  },
  {
    title: translate(wording.digitalShopTitle),
    description: translate(wording.digitalShopDescription),
    image: '/assets/funk/Digital_Shop_Brand.mp4',
    style: { height: '600px' },
  },
  {
    title: translate(wording.digitalAlbumsTitle),
    description: translate(wording.digitalAlbumsDescription),
    image: '/assets/Digital_Album.png',
    style: { maxWidth: { xs: '280px', md: '500px' } },
  },
  {
    title: translate(wording.contractManagementTitle),
    description: translate(wording.contractManagementDescription),
    image: '/assets/Digitale Vertrag Web.png',
    style: { maxWidth: { xs: '220px', md: '500px' } },
  },
];

const FunktionPage = () => {
  return (
    <Box
      sx={{
        padding: { xs: '32px', md: '80px' },
        textAlign: 'left',
      }}
    >
      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: { xs: '100px', md: '150px' },
            textAlign: 'left',
            gap: { xs: '48px', lg: '248px' },
          }}
        >
          <Box sx={{ maxWidth: '500px' }}>
            {index === 0 && (
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                  marginBottom: '40px',
                }}
              >
                {translate(wording.whyFotogram)}
              </Typography>
            )}
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', marginBottom: '10px' }}
            >
              {section.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#555' }}
            >
              {section.description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '500px',
              maxWidth: '100%',
            }}
          >
            {section.image.endsWith('.mp4') ? (
              <video
                src={section.image}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '10px',
                  ...section.style,
                }}
              />
            ) : (
              <Box
                component="img"
                src={section.image}
                alt={section.title}
                sx={{
                  width: '100%',
                  maxWidth: { xs: '280px', md: '500px' },
                  borderRadius: '10px',
                  ...section.style,
                }}
              ></Box>
            )}
          </Box>
        </Box>
      ))}

      <Box
        sx={{
          backgroundColor: 'rgb(27, 27, 30)',
          borderRadius: '8px',
          color: 'white',
          padding: '60px 20px',
          marginTop: '60px',
          textAlign: 'left',
        }}
      >
        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', marginBottom: '20px' }}
          >
            {translate(wording.tryIt)}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: '30px' }}
          >
            {translate(wording.ctaDescription)}
          </Typography>

          <TryIt />
        </Box>
      </Box>
    </Box>
  );
};

export default FunktionPage;
