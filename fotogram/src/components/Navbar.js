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
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#fff',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        padding: '0 20px',
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
        <MuiLink component={NavLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/logo.png"
            alt="Fotogram logo"
            style={{
              width: '100px',
              height: 'auto',
            }}
          />
        </MuiLink>

        {/* Desktop Navigation Links (hidden on mobile) */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: '20px',
            alignItems: 'center',
          }}
        >
          {['Why Fotogram', 'Pricing', 'Help', 'Who We Are'].map((text, index) => (
            <MuiLink
              key={index}
              component={NavLink}
              to={`/${text.replace(/\s+/g, '-').toLowerCase()}`}
              color="inherit"
              underline="none"
              sx={{
                fontSize: '1rem',
                fontWeight: '500',
                color: '#333',
                '&:hover': { color: '#6aaad4', transition: 'color 0.3s ease' },
                display: 'flex',
                alignItems: 'center',
                '&.active': { color: '#71B3E5' },
              }}
            >
              {text}
            </MuiLink>
          ))}
        </Box>

        {/* Call to Action Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#6aaad4',
            color: '#000',
            fontWeight: 'bold',
            borderRadius: '20px',
            textTransform: 'none',
            padding: '8px 20px',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#6aaad4',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            },
          }}
          onClick={handleSignUp}
        >
          Try it – it's free
        </Button>

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="top" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#f8f9fa', // Light gray background similar to the screenshot
            padding: '20px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ alignSelf: 'flex-end', marginRight: '10px', color: '#333' }}
          >
            <CloseIcon />
          </IconButton>
          <List sx={{ width: '100%', textAlign: 'center' }}>
          {['Why Fotogram', 'Pricing', 'Help', 'Who We Are'].map((text, index) => (
              <ListItem
                button
                component={NavLink}
                to={`/${text.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={handleDrawerToggle}
                key={index}
                sx={{
                  justifyContent: 'center',
                  color: '#333',
                  '&:hover': {
                    backgroundColor: '#e0e0e0', // Darker gray for hover effect
                    color: '#000', // Text color on hover
                    borderRadius: '8px',
                    transition: 'background-color 0.3s ease',
                  },
                }}
              >
                <ListItemText primary={text} sx={{ textAlign: 'center' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
