import React from 'react';
import { Box, Typography } from '@mui/material';
import translate from '../helpers/translate';
import wording from '../constants/wording';

const PowerfulFeaturesSection = () => {
  return (
    <>
      {/* Powerful Features Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingTop: { xs: '40px', md: '200px' },
          paddingBottom: { xs: '40px', md: '80px' },
          paddingLeft: { xs: '32px', md: '80px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '32px', md: '40px', lg: '100px', xl: '200px' },
        }}
      >
        {/* Left side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingRight: { xs: '0', md: '40px' },
            textAlign: { xs: 'left', md: 'left' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '28px', md: '40px' },
              mb: 5,
            }}
          >
            {translate(wording.realTimeImageSharing)}
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            {translate(wording.shareMoment)}
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '16px', md: '16px' } }}
          >
            {translate(wording.realTimeImageDescription)}
          </Typography>
        </Box>

        {/* Right side: Image */}
        <Box
          component="img"
          src="/assets/4.png"
          alt="Powerful features"
          sx={{
            width: '100%',
            maxWidth: { xs: '232px', md: '500px' },
            padding: { xs: '24px', md: '40px' },
          }}
        ></Box>
      </Box>

      {/* Beautiful Presentation Mode Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: { xs: '16px', md: '80px' },
          paddingBottom: { xs: '40px', md: '80px' },
          paddingLeft: { xs: '32px', md: '48px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '32px', md: '56px', lg: '100px', xl: '200px' },
          backgroundColor: '#fff',
        }}
      >
        {/* Left side: Image */}
        <Box
          component="img"
          src="/assets/FaceRecognition2.png"
          alt="Fotogram logo"
          sx={{
            padding: '16px',
            width: '100%',
            maxWidth: { xs: '164px', md: '320px', lg: '400px' },
            paddingLeft: { xs: '0', md: '48px' },
            borderRadius: '10px',
          }}
        />

        {/* Right side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { xs: '0', md: '140px' },
            textAlign: { xs: 'left', md: 'left' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '28px', md: '40px' },
              mb: 5,
            }}
          >
            {translate(wording.aiFaceRecognition)}
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '16px', md: '16px' } }}
          >
            {translate(wording.aiFaceRecognitionDescription)}
          </Typography>
        </Box>
      </Box>

      {/* Massive Time Saver Section */}
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: { xs: '40px', md: '80px' },
          paddingBottom: { xs: '40px', md: '200px' },
          paddingLeft: { xs: '32px', md: '80px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '32px', md: '80px', lg: '100px', xl: '200px' },
          backgroundColor: '#fff',
        }}
      >
        {/* Left side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingRight: { xs: '16px', md: '40px' },
            textAlign: { xs: 'left', md: 'left' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '28px', md: '40px' },
              mb: 5,
            }}
          >
            {translate(wording.watermarkFeature)}
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '16px', md: '16px' }, mb: 2 }}
          >
            {translate(wording.watermarkFeatureDescription)}
          </Typography>
        </Box>

        {/* Right side: Image */}
        <Box
          component="img"
          src="/assets/logo.png"
          alt="Massive time saver"
          sx={{
            padding: '16px',
            width: '100%',
            maxWidth: { xs: '208px', md: '500px' },
          }}
        ></Box>
      </Box>
    </>
  );
};

export default PowerfulFeaturesSection;
