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
          paddingTop: { xs: '16px', md: '200px' },
          paddingBottom: { xs: '16px', md: '80px' },
          paddingLeft: { xs: '16px', md: '80px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '16px', md: '40px', lg: '100px', xl: '200px' },
        }}
      >
        {/* Left side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingRight: { xs: '16px', md: '40px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 3,
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
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            {translate(wording.realTimeImageDescription)}
          </Typography>
        </Box>

        {/* Right side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: '16px', md: '40px' },
          }}
        >
          <img
            src="/assets/4.png"
            alt="Powerful features"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Box>

      {/* Beautiful Presentation Mode Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: { xs: '16px', md: '80px' },
          paddingBottom: { xs: '16px', md: '80px' },
          paddingLeft: { xs: '16px', md: '48px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '16px', md: '56px', lg: '100px', xl: '200px' },
          backgroundColor: '#fff',
        }}
      >
        {/* Left side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '16px', md: '0' },
          }}
        >
          <img
            src="/assets/5.png"
            alt="Beautiful presentation mode"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '10px',
            }}
          />
        </Box>

        {/* Right side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { xs: '16px', md: '40px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 3,
            }}
          >
            {translate(wording.aiFaceRecognition)}
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            {translate(wording.aiFaceRecognitionDescription)}
          </Typography>
        </Box>
      </Box>

      {/* Massive Time Saver Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: { xs: '40px', md: '80px' },
          paddingBottom: { xs: '40px', md: '200px' },
          paddingLeft: { xs: '16px', md: '80px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '16px', md: '80px', lg: '100px', xl: '200px' },
          backgroundColor: '#fff',
        }}
      >
        {/* Left side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingRight: { xs: '16px', md: '40px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 3,
            }}
          >
            {translate(wording.watermarkFeature)}
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 2 }}
          >
            {translate(wording.watermarkFeatureDescription)}
          </Typography>
        </Box>

        {/* Right side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '16px', md: '0' },
          }}
        >
          <img
            src="/assets/6.png"
            alt="Massive time saver"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default PowerfulFeaturesSection;
