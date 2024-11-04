// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Link as MuiLink, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // For dropdown arrows

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#fff', // White background
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)', // Subtle border at bottom
        padding: '0 20px', // Add padding for better spacing
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/fotogram logo blue.webp" // Ensure the logo path is correct
            alt="Fotogram logo"
            style={{
              width: '100%', // Increase the width of the logo for better visibility
              height: '100%', // Increase the height
              marginRight: '15px', // Add some more margin to space it from the text
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', color: '#6aaad4', fontSize: '1.5rem' }}
          >
            
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {/* Use Link from react-router-dom for routing */}
          <MuiLink
            component={Link}
            to="/why-fotogram"  // Example future route
            color="inherit"
            underline="none"
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#333',
              '&:hover': { color: '#6aaad4' }, // Hover color for links
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Why Fotogram <ArrowDropDownIcon fontSize="small" />
          </MuiLink>

          <MuiLink
            component={Link}
            to="/pricing"  // Navigate to the pricing route
            color="inherit"
            underline="none"
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#333',
              '&:hover': { color: '#6aaad4' },
            }}
          >
            Pricing
          </MuiLink>

          <MuiLink
            component={Link}
            to="/help"  // Example future route
            color="inherit"
            underline="none"
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#333',
              '&:hover': { color: '#6aaad4' },
            }}
          >
            Help
          </MuiLink>

          <MuiLink
            component={Link}
            to="/learn"  // Example future route
            color="inherit"
            underline="none"
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#333',
              '&:hover': { color: '#6aaad4' },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Learn <ArrowDropDownIcon fontSize="small" />
          </MuiLink>

          <MuiLink
            component={Link}
            to="/login"  // Example future route
            color="inherit"
            underline="none"
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#333',
              '&:hover': { color: '#6aaad4' },
            }}
          >
            Login
          </MuiLink>

          {/* Optional Language Icon (if needed) */}
          <IconButton sx={{ color: '#333' }}>
            <img
              src="https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png" // Replace with your preferred flag image
              alt="German flag"
              style={{ width: '24px', height: '16px' }}
            />
          </IconButton>

          {/* Call to Action Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#6aaad4', // Button background color
              color: '#000',
              fontWeight: 'bold',
              borderRadius: '20px',
              textTransform: 'none',
              padding: '8px 20px',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#6aaad4',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow on hover
              },
            }}
          >
            Sign up – it's free
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
