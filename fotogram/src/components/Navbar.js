import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Toolbar,
} from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TryIt from './TryIt';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
        paddingTop: { xs: '0px', md: '0px' },
        paddingBottom: { xs: '0px', md: '0px' },
        paddingLeft: { xs: '8px', md: '16px' },
        paddingRight: { xs: '8px', md: '16px' },
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
          sx={{ display: 'flex', alignItems: 'center' }}
        >
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
          {[
            { label: 'Why Fotogram', path: 'why-fotogram' },
            { label: 'Pricing', path: 'pricing' },
            { label: 'Our Story', path: 'our-story' },
            { label: 'Support FAQs', path: 'faq' },
          ].map((route) => (
            <MuiLink
              key={route.path}
              component={NavLink}
              to={route.path}
              color="inherit"
              underline="none"
              sx={{
                fontSize: '1rem',
                fontWeight: '500',
                color: '#333',
                '&:hover': {
                  color: '#6aaad4',
                  transition: 'color 0.3s ease',
                },
                display: 'flex',
                alignItems: 'center',
                '&.active': { color: '#1976d2' },
              }}
            >
              {route.label}
            </MuiLink>
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: '16px' }}>
          <TryIt />
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#f8f9fa',
            padding: '24px 0',
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
            {[
              { label: 'Why Fotogram', path: 'why-fotogram' },
              { label: 'Pricing', path: 'pricing' },
              { label: 'Our Story', path: 'our-story' },
              { label: 'Support FAQs', path: 'faq' },
            ].map((route) => (
              <ListItem
                component={NavLink}
                to={route.path}
                onClick={handleDrawerToggle}
                key={route.path}
                sx={{
                  justifyContent: 'center',
                  color: '#333',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                    color: '#000',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s ease',
                  },
                }}
              >
                <ListItemText
                  primary={route.label}
                  sx={{ textAlign: 'center' }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
