import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import AutoCarousel from './AutoCarousel';
import PowerfulFeaturesSection from './PowerfulFeaturesSection';
import TryIt from './TryIt';
import TalkToSupport from './TalkToSupport';
import translate from '../helpers/translate';
import wording from '../constants/wording';

const HeroSection = () => {
  return (
    <>
      <Box
        variant="contained"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingTop: { xs: '24px', md: '40px' },
          paddingBottom: { xs: '16px', md: '120px' },
          paddingLeft: { xs: '32px', md: '40px', lg: '160px', xl: '200px' },
          paddingRight: { xs: '32px', md: '0px', lg: '160px', xl: '200px' },
        }}
      >
        {/* Left side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { xs: '0px', md: '40px' },
            textAlign: { xs: 'left', md: 'left' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '26px', md: '40px' },
              mb: 3,
            }}
          >
            {translate(wording.heroTitle)}
          </Typography>

          {/* Feature List */}
          <List>
            <ListItem
              key="feature-1"
              sx={{ paddingLeft: 0 }}
            >
              <ListItemIcon>
                <CheckIcon sx={{ color: '#1976d2' }} />
              </ListItemIcon>
              <ListItemText primary={translate(wording.automateWorkflow)} />
            </ListItem>
            <ListItem
              key="feature-2"
              sx={{ paddingLeft: 0 }}
            >
              <ListItemIcon>
                <CheckIcon sx={{ color: '#1976d2' }} />
              </ListItemIcon>
              <ListItemText
                primary={translate(wording.realTimeImageTransmission)}
              />
            </ListItem>
            <ListItem
              key="feature-3"
              sx={{ paddingLeft: 0 }}
            >
              <ListItemIcon>
                <CheckIcon sx={{ color: '#1976d2' }} />
              </ListItemIcon>
              <ListItemText primary={translate(wording.brandWithWatermark)} />
            </ListItem>
          </List>

          <Box
            sx={{
              marginTop: { xs: '32px', md: '56px' },
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              '& > *': {
                flex: 'unset',
              },
              '@media (max-width:500px)': {
                '& > *': {
                  flex: '1 1 100%',
                },
              },
            }}
          >
            <TryIt />
            <TalkToSupport />
          </Box>
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
            src="/assets/HeroStart1.png"
            alt="Hero placeholder"
            style={{
              width: '100%',
              maxWidth: '700px',
              borderRadius: '24px',
            }}
          />
        </Box>
      </Box>

      {/* Second Section: What Fotogram Offers */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          paddingTop: { xs: '56px', md: '120px' },
          paddingBottom: { xs: '56px', md: '120px' },
          paddingLeft: { xs: '32px', md: '32px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '32px', md: '48px', lg: '100px', xl: '200px' },
          backgroundColor: 'rgb(27, 27, 30);',
        }}
      >
        {/* Right side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { xs: '10px', md: '40px' },
            color: '#fff',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            {translate(wording.whatFotogramOffers)}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '16px', sm: '16px', md: '16px' },
              mb: 2,
            }}
          >
            {translate(wording.allInOneCustomerManagement)}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '16px', sm: '16px', md: '16px' },
              mb: 2,
            }}
          >
            {translate(wording.quickImageDelivery)}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '16px', sm: '16px', md: '16px' },
              mb: 2,
            }}
          >
            {translate(wording.streamlinedContractProcessing)}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '16px', sm: '16px', md: '16px' },
              mb: 4,
            }}
          >
            {translate(wording.digitalShop)}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'start' },
            }}
          >
            <TryIt />
          </Box>
        </Box>

        {/* Left side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '16px', md: '0' },
            overflow: 'hidden',
          }}
        >
          <img
            src="/assets/dashboard.png"
            alt="Placeholder"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Box>

      <PowerfulFeaturesSection />

      {/* Built by Creatives Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: { xs: '56px', md: '120px' },
          paddingBottom: { xs: '56px', md: '120px' },
          paddingLeft: { xs: '32px', md: '48px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '32px', md: '56px', lg: '100px', xl: '200px' },
          backgroundColor: 'rgb(27, 27, 30);',
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
            overflow: 'hidden',
          }}
        >
          <img
            src="/assets/7.jpeg"
            alt="Entwickelt von Profis für Profis"
            style={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: '10px',
            }}
          />
        </Box>

        {/* Right side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { md: '40px' },
            textAlign: { xs: 'left', md: 'left' },
            color: '#fff',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginTop: { xs: '24px', md: '0' },
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            {translate(wording.builtByCreatives)}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '16px', md: '16px' },
              mb: 2,
            }}
          >
            {translate(wording.fotogramMission)}
          </Typography>

          <Box
            sx={{
              marginTop: { xs: '32px', md: '0' },
            }}
          >
            <TryIt />
          </Box>
        </Box>
      </Box>

      <AutoCarousel />
    </>
  );
};

export default HeroSection;
