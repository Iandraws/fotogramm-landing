import { Box, Typography } from '@mui/material';
import React from 'react';
import TryIt from './TryIt';
import translate from '../helpers/translate'; // Import translate function
import wording from '../constants/wording'; // Import wording constants

const sections = [
  {
    title: translate(wording.ourVisionTitle),
    description: translate(wording.ourVisionDescription),
    image: '/assets/Schield_RBG.png',
  },
  /*{
    title: translate(wording.customerManagementTitle),
    description: translate(wording.customerManagementDescription),
    image: '/assets/funk/CRM_icon4.png',
  },
  {
    title: translate(wording.calendarAndRemindersTitle),
    description: translate(wording.calendarAndRemindersDescription),
    image: '/assets/funk/Calender.png',
  },*/

  {
    title: translate(wording.analyticsDashboardTitle),
    description: translate(wording.analyticsDashboardDescription),
    image: '/assets/Dashboard_Fotogram1.png',
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
    style: { maxWidth: '380px' },
  },
  {
    title: translate(wording.brandingAndWatermarkTitle),
    description: translate(wording.brandingAndWatermarkDescription),
    image: '/assets/funk/Individual_Branding.png',
  },
  /*{
    title: translate(wording.flexiblePricingTitle),
    description: translate(wording.flexiblePricingDescription),
    image: '/assets/Packages_Fotogram.png',
  },*/
  {
    title: translate(wording.digitalShopTitle),
    description: translate(wording.digitalShopDescription),
    image: '/assets/funk/Digital_Shop_Brand.mp4',
    style: { height: '600px' },
  },
  {
    title: translate(wording.digitalAlbumsTitle),
    description: translate(wording.digitalAlbumsDescription),
    image: '/assets/Digital_Album2.png',
    style: { transform: 'scale(1.6)' ,
      
    },
  },
  {
    title: translate(wording.contractManagementTitle),
    description: translate(wording.contractManagementDescription),
    image: '/assets/Contract3.png',
  },
  /*{
    title: translate(wording.digitalBusinessCardTitle),
    description: translate(wording.digitalBusinessCardDescription),
    image: '/assets/funk/votingImage.mp4',
  },*/
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
            marginBottom: { xs: '120px', md: '150px' },
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
              <img
                src={section.image}
                alt={section.title}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '10px',
                  ...section.style,
                }}
              />
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
