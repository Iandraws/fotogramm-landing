// src/components/PowerfulFeaturesSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';

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
          paddingTop: { xs: '20px', md: '200px' },
          paddingBottom: { xs: '20px', md: '80px' },
          paddingLeft: { xs: '20px', md: '80px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '20px', md: '40px', lg: '100px', xl: '200px' },
        }}
      >
        {/* Left side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingRight: { xs: '20px', md: '40px' },
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
            Powerful features – easy to use
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            Pain-free collaboration mode
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Your clients can easily select their favorite shots by using our
            intuitive color markings, likes & voting, file comments, and other
            collaboration features. By only activating the features you need, it
            always keeps simple.
          </Typography>
        </Box>

        {/* Right side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: '20px', md: '40px' },
          }}
        >
          <img
            src="/assets/4.PNG"
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
          paddingTop: { xs: '20px', md: '80px' },
          paddingBottom: { xs: '20px', md: '80px' },
          paddingLeft: { xs: '20px', md: '48px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '20px', md: '56px', lg: '100px', xl: '200px' },
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
            marginTop: { xs: '20px', md: '0' },
          }}
        >
          <img
            src="/assets/5.PNG"
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
            paddingLeft: { xs: '20px', md: '40px' },
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
            Beautiful presentation mode
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Finally present your work the way it deserves! Customize photo
            galleries to your needs and your clients can easily switch to the
            powerful edit mode when needed.
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
          paddingTop: { xs: '20px', md: '80px' },
          paddingBottom: { xs: '20px', md: '200px' },
          paddingLeft: { xs: '20px', md: '80px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '20px', md: '80px', lg: '100px', xl: '200px' },
          backgroundColor: '#fff',
        }}
      >
        {/* Left side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingRight: { xs: '20px', md: '40px' },
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
            Massive time saver
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 2 }}
          >
            Find your client's favorites <strong>in seconds!</strong> Just
            filter them in Lightroom, C1, or on your hard drive.{' '}
            <strong>No more searching</strong> for individual filenames, no more
            annoying emails and endless calls over image selections.
          </Typography>
        </Box>

        {/* Right side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '20px', md: '0' },
          }}
        >
          <img
            src="/assets/6.PNG"
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
