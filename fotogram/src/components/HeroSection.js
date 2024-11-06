// src/components/HeroSection.js
import React from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check'; // For checkmarks in the list
import AutoCarousel from './AutoCarousel';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle routing
import PowerfulFeaturesSection from './PowerfulFeaturesSection';

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the /signup route when the button is clicked
  };

  return (
    <>
      {/* Main Hero Section */}
      <Box
        variant="contained"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger screens
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '90vh', // Full viewport height for the hero section
          backgroundColor: '#fff',
          paddingTop: { xs: '20px', md: '40px' },
          paddingBottom: { xs: '20px', md: '40px' },
          paddingLeft: { xs: '20px', md: '40px' },
          paddingRight: { xs: '20px', md: '0px', lg: '160px', xl: '200px' },
        }}
      >
        {/* Left side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { xs: '10px', md: '40px' }, // Reduced padding for smaller screens
            textAlign: { xs: 'center', md: 'left' }, // Center text on mobile, left on desktop
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }, // Adjusted font size for mobile
              mb: 3,
            }}
          >
            The easiest way to share photo & video shoots
          </Typography>

          {/* Feature List */}
          <List>
            <ListItem key="feature-1">
              <ListItemIcon>
                <CheckIcon sx={{ color: '#6aaad4' }} />
              </ListItemIcon>
              <ListItemText primary="Create preview & download online photo galleries for clients in seconds" />
            </ListItem>
            <ListItem key="feature-2">
              <ListItemIcon>
                <CheckIcon sx={{ color: '#6aaad4' }} />
              </ListItemIcon>
              <ListItemText primary="Let them select their favorites and annotate super easily" />
            </ListItem>
            <ListItem key="feature-3">
              <ListItemIcon>
                <CheckIcon sx={{ color: '#6aaad4' }} />
              </ListItemIcon>
              <ListItemText primary="Save tons of time importing selections back to LR, C1 etc." />
            </ListItem>
          </List>

          {/* Call to Action Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#6aaad4', // Your primary button color
              color: '#fff',
              fontWeight: 'bold',
              padding: '10px 30px',
              textTransform: 'none',
              borderRadius: '20px',
              mt: 2,
              '&:hover': {
                backgroundColor: '#5b99c3', // Slightly darker on hover
              },
            }}
            onClick={handleSignUp}
          >
            try it- it's free
          </Button>
        </Box>

        {/* Right side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '20px', md: '0' }, // Margin for mobile screens
          }}
        >
          <img
            src="/assets/1.webp" // Replace this with the actual image path
            alt="Hero placeholder"
            style={{
              width: '100%',
              maxWidth: '700px', // Adjusted the image size for smaller screens
              borderRadius: '20px',
            }}
          />
        </Box>
      </Box>

      {/* Second Section: Your favorite online photo gallery software */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          paddingTop: { xs: '24px', md: '40px' },
          paddingBottom: { xs: '24px', md: '40px' },
          paddingLeft: { xs: '24px', md: '24px' },
          paddingRight: { xs: '24px', md: '40px', lg: '160px', xl: '200px' },
          backgroundColor: '#5c524c',
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
            Your favorite online photo gallery software
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              mb: 2,
            }}
          >
            Over <strong>150,000 creatives</strong> use fotogram to let their
            clients download, select, vote, comment, proof, and much more. More
            than <strong>1 billion images and videos</strong> sent!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              mb: 4,
            }}
          >
            fotogram is the perfect image sharing and collaboration software for{' '}
            <strong>photographers</strong>, <strong>designers</strong>, and{' '}
            <strong>small teams</strong> or companies!
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#6aaad4',
              color: '#000',
              fontWeight: 'bold',
              padding: '10px 30px',
              textTransform: 'none',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#6aaad4',
              },
            }}
            onClick={handleSignUp}
          >
            try it it's free
          </Button>
        </Box>

        {/* Left side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '20px', md: '0' },
            overflow: 'hidden',
          }}
        >
          <img
            src="/assets/3.PNG"
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
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger screens
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: { xs: '20px', md: '40px' },
          paddingBottom: { xs: '20px', md: '40px' },
          paddingLeft: { xs: '20px', md: '48px' },
          paddingRight: { xs: '20px', md: '56px', lg: '160px', xl: '200px' },
          backgroundColor: '#5c524c', // Background color matching the style
        }}
      >
        {/* Left side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '20px', md: '0' }, // Margin for mobile screens
            overflow: 'hidden',
          }}
        >
          <img
            src="/assets/7.jpeg" // Replace this with your actual image path
            alt="Built by creatives for creatives"
            style={{
              width: '100%',
              maxWidth: '600px', // Adjust the image size as needed
              borderRadius: '10px', // Maintain the rounded corners
            }}
          />
        </Box>

        {/* Right side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { xs: '20px', md: '40px' }, // Padding on the left
            textAlign: { xs: 'center', md: 'left' }, // Center text on mobile, left on desktop
            color: '#fff', // White text for contrast
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            Built by creatives for creatives
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              mb: 2,
            }}
          >
            fotogram is the brainchild of two Pros: a{' '}
            <strong>photographer</strong> and a <strong>designer</strong>. We{' '}
            <strong>know</strong> what you need and just build it. It’s that
            simple.
          </Typography>

          {/* Call to Action Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#6aaad4', // Button color
              color: '#000',
              fontWeight: 'bold',
              padding: '10px 30px',
              textTransform: 'none',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#6aaad4',
              },
            }}
            onClick={handleSignUp}
          >
            try it- it's free
          </Button>
        </Box>
      </Box>
      <AutoCarousel />
    </>
  );
};

export default HeroSection;
