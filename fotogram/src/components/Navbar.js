import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // For dropdown arrows
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle routing

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the /signup route when the button is clicked
  };

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
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo Section */}
        <MuiLink
          component={NavLink}
          to="/"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/assets/fotogram logo blue.webp" // Ensure the logo path is correct
              alt="Fotogram logo"
              style={{
                minWidth: '100px',
                width: '100%', // Adjust the width of the logo
                height: '100%', // Adjust the height
                marginRight: '15px', // Add some margin to space it from the text
              }}
            />
          </Box>
        </MuiLink>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {/* Use NavLink from react-router-dom to allow active state */}
          <MuiLink
            component={NavLink}
            to="/why-fotogram"
            color="inherit"
            underline="none"
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#333',
              '&:hover': { color: '#6aaad4' }, // Hover color for links
              display: 'flex',
              alignItems: 'center',
              '&.active': { color: 'red' }, // Turn red when active (clicked)
            }}
          >
            Why Fotogram <ArrowDropDownIcon fontSize="small" />
          </MuiLink>

          <MuiLink
            component={NavLink}
            to="/pricing"
            color="inherit"
            underline="none"
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#333',
              '&:hover': { color: '#6aaad4' },
              '&.active': { color: 'red' }, // Active link turns red
            }}
          >
            Pricing
          </MuiLink>

          <MuiLink
            component={NavLink}
            to="/help"
            color="inherit"
            underline="none"
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#333',
              '&:hover': { color: '#6aaad4' },
              '&.active': { color: 'red' }, // Active link turns red
            }}
          >
            Help
          </MuiLink>

          <MuiLink
            component={NavLink}
            to="/learn"
            color="inherit"
            underline="none"
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#333',
              '&:hover': { color: '#6aaad4' },
              display: 'flex',
              alignItems: 'center',
              '&.active': { color: 'red' }, // Active link turns red
            }}
          >
            Learn <ArrowDropDownIcon fontSize="small" />
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
            onClick={handleSignUp}
          >
            try it – it's free
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
