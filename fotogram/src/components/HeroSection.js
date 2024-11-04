// src/components/HeroSection.js
import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check'; // For checkmarks in the list
import AutoCarousel from './AutoCarousel';

const HeroSection = () => {
  return (
    <>
      {/* Main Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger screens
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '90vh', // Full viewport height for the hero section
          padding: { xs: '20px', md: '40px' }, // Adjusted padding for mobile
          backgroundColor: '#fff', // White background for the section
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
              mb: 3 
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
          >
            Sign up - it's free
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
              maxWidth: '500px', // Adjusted the image size for smaller screens
              borderRadius: '10px',
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
          padding: { xs: '20px', md: '40px' }, 
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
              mb: 2 
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
            Over <strong>150,000 creatives</strong> use fotogram to let their clients download, select, vote, comment, proof, and much more. More than <strong>1 billion images and videos</strong> sent!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              mb: 4,
            }}
          >
            fotogram is the perfect image sharing and collaboration software for <strong>photographers</strong>, <strong>designers</strong>, and <strong>small teams</strong> or companies!
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
          >
            Sign up - it's free
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

      {/* Powerful Features Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' }, 
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: '50px 20px', md: '200px 40px' }, // Adjusted for better mobile spacing
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
            sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' }, mb: 3 }}
          >
            Powerful features – easy to use
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Pain free collaboration mode
          </Typography>

          <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
            Your clients can easily select their favorite shots by using our intuitive color markings, likes & voting, file comments, and other collaboration features. By only activating the features you need, it always keeps simple.
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
            backgroundColor: '#fff',
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
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger screens
          justifyContent: 'space-between',
          
          alignItems: 'center',
          padding: '40px',
          backgroundColor: '#fff', // White background
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
          }}
        >
          <img
            src="/assets/5.PNG" // Replace this with your actual image path
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
            paddingLeft: { xs: '20px', md: '40px' }, // Padding on the left
            textAlign: { xs: 'center', md: 'left' }, // Center text on mobile, left on desktop
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' }, mb: 3 }}
          >
            Beautiful presentation mode
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Finally present your work the way it deserves! Customize photo galleries to your needs and your clients can easily switch to the powerful edit mode when needed.
          </Typography>
        </Box>
        
        
      </Box>
      {/* Massive Time Saver Section */}
<Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger screens
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#fff', // White background
  }}
>
  {/* Left side: Text */}
  <Box
    sx={{
      flex: 1,
      paddingRight: { xs: '20px', md: '40px' }, // Padding on the right
      textAlign: { xs: 'center', md: 'left' }, // Center text on mobile, left on desktop
    }}
  >
    <Typography
      variant="h4"
      sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' }, mb: 3 }}
    >
      Massive time saver
    </Typography>

    <Typography
      variant="body1"
      sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 2 }}
    >
      Find your client's favorites <strong>in seconds!</strong> Just filter them in Lightroom, C1, or on your hard drive. <strong>No more searching</strong> for individual filenames, no more annoying emails and endless calls over image selections.
    </Typography>
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
      src="/assets/6.PNG" // Replace this with your actual image path
      alt="Massive time saver"
      style={{
        width: '100%',
        maxWidth: '500px',
        borderRadius: '10px',
      }}
    />
  </Box>
</Box>
{/* Built by Creatives Section */}
<Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger screens
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px',
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
      sx={{ fontWeight: 'bold', fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 2 }}
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
      fotogram is the brainchild of two Pros: a <strong>photographer</strong> and a <strong>designer</strong>. We <strong>know</strong> what you need and just build it. It’s that simple.
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
    >
      Sign up - it's free
    </Button>
  </Box>
</Box>
<AutoCarousel />



    </>
  );
};

export default HeroSection;
