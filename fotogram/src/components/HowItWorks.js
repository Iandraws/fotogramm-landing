import { Box, Typography } from '@mui/material';
import React from 'react';
import TryIt from './TryIt';
import translate from '../helpers/translate'; // Import translate function
import wording from '../constants/wording';   // Import wording constants

const sections = [
  {
    title: translate(wording.ourVisionTitle),
    description: translate(wording.ourVisionDescription),
    image: '',
  },
  {
    title: translate(wording.customerManagementTitle),
    description: translate(wording.customerManagementDescription),
    image: '/assets/funk/shareGalleryImage.mp4',
  },
  {
    title: translate(wording.calendarAndRemindersTitle),
    description: translate(wording.calendarAndRemindersDescription),
    image: '/assets/funk/shareGalleryImage.mp4',
  },
  {
    title: translate(wording.liveImageStreamingTitle),
    description: translate(wording.liveImageStreamingDescription),
    image: '/assets/funk/shareGalleryImage.mp4',
  },
  {
    title: translate(wording.aiFaceRecognitionTitle),
    description: translate(wording.aiFaceRecognitionDescription),
    image: '/assets/funk/shareGalleryImage.mp4',
  },
  {
    title: translate(wording.brandingAndWatermarkTitle),
    description: translate(wording.brandingAndWatermarkDescription),
    image: '/assets/funk/simplicityImage.jpg',
  },
  {
    title: translate(wording.flexiblePricingTitle),
    description: translate(wording.flexiblePricingDescription),
    image: '/assets/funk/presentationModeImage.png',
  },
  {
    title: translate(wording.digitalShopTitle),
    description: translate(wording.digitalShopDescription),
    image: '/assets/funk/editModeImage.jpg',
  },
  {
    title: translate(wording.digitalAlbumsTitle),
    description: translate(wording.digitalAlbumsDescription),
    image: '/assets/funk/votingImage.mp4',
  },
  {
    title: translate(wording.contractManagementTitle),
    description: translate(wording.contractManagementDescription),
    image: '/assets/funk/colorMarkersImage.mp4',
  },
  {
    title: translate(wording.digitalBusinessCardTitle),
    description: translate(wording.digitalBusinessCardDescription),
    image: '/assets/funk/votingImage.mp4',
  },
  {
    title: translate(wording.analyticsDashboardTitle),
    description: translate(wording.analyticsDashboardDescription),
    image: '/assets/funk/votingImage.mp4',
  },
];

const FunktionPage = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>
        {translate(wording.whyFotogram)}
      </Typography>

      {sections.map((section, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '60px', textAlign: 'center', gap: '20px' }}>
          <Box sx={{ maxWidth: '600px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              {section.title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              {section.description}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '100%' }}>
            {section.image.endsWith('.mp4') ? (
              <video src={section.image} autoPlay muted loop playsInline style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }} />
            ) : (
              <img src={section.image} alt={section.title} style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }} />
            )}
          </Box>
        </Box>
      ))}

      {/* Final Call-to-Action Section */}
      <Box sx={{ backgroundColor: '#f0f0f0', padding: '60px 20px', marginTop: '60px', textAlign: 'center' }}>
        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            {translate(wording.tryItButton)}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '30px', color: '#555' }}>
            {translate(wording.ctaDescription)}
          </Typography>

          <TryIt buttonText={translate(wording.tryItButton)} />
        </Box>
      </Box>
    </Box>
  );
};

export default FunktionPage;
