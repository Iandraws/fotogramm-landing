import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Link as MuiLink,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // For dropdown arrows
import MenuIcon from '@mui/icons-material/Menu'; // Icon for burger menu
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle routing

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [mobileOpen, setMobileOpen] = useState(false); // State for managing drawer

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the /signup route when the button is clicked
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); // Toggle the drawer open and close
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
              src="/assets/logo.png" // Ensure the logo path is correct
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

        {/* Desktop Navigation Links (hidden on mobile) */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' }, // Hidden on small screens
            gap: '20px',
            alignItems: 'center',
          }}
        >
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
              '&.active': { color: '#71B3E5' }, // Active link color #71B3E5
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
              '&.active': { color: '#71B3E5' }, // Active link color #71B3E5
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
              '&.active': { color: '#71B3E5' }, // Active link color #71B3E5
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
              '&.active': { color: '#71B3E5' }, // Active link color #71B3E5
            }}
          >
            Learn <ArrowDropDownIcon fontSize="small" />
          </MuiLink>
        </Box>

        {/* Call to Action Button (Always Visible) */}
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

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          style={{ display: 'flex' }}
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }} // Only visible on mobile
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }} // Only for small screens
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: '#4a8bb3', // Set background color to darker shade
            height: '100%', // Ensure the drawer covers the full height
          }}
        >
          <List>
            <ListItem
              button
              component={NavLink}
              to="/why-fotogram"
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  backgroundColor: '#417199', // Darken background on hover
                  color: '#000', // Make text black on hover
                  borderRadius: '12px', // Make the hover background more prominent
                  padding: '15px', // Increase padding to make it more square-like
                  transition: 'background-color 0.3s ease', // Smooth transition effect
                },
              }}
            >
              <ListItemText
                primary="Why Fotogram"
                sx={{ color: '#fff' }}
              />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/pricing"
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  backgroundColor: '#417199', // Darken background on hover
                  color: '#000', // Make text black on hover
                  borderRadius: '12px', // Make the hover background more prominent
                  padding: '15px', // Increase padding to make it more square-like
                  transition: 'background-color 0.3s ease', // Smooth transition effect
                },
              }}
            >
              <ListItemText
                primary="Pricing"
                sx={{ color: '#fff' }}
              />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/help"
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  backgroundColor: '#417199', // Darken background on hover
                  color: '#000', // Make text black on hover
                  borderRadius: '12px', // Make the hover background more prominent
                  padding: '15px', // Increase padding to make it more square-like
                  transition: 'background-color 0.3s ease', // Smooth transition effect
                },
              }}
            >
              <ListItemText
                primary="Help"
                sx={{ color: '#fff' }}
              />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/learn"
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  backgroundColor: '#417199', // Darken background on hover
                  color: '#000', // Make text black on hover                  borderRadius: '18px', // Make the hover background more prominent
                  padding: '15px', // Increase padding to make it more square-like
                  transition: 'background-color 0.3s ease', // Smooth transition effect
                },
              }}
            >
              <ListItemText
                primary="Learn"
                sx={{ color: '#fff' }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
