import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
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
import translate from '../helpers/translate';
import wording from './../constants/wording';
import TryIt from './TryIt';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem('lang') || 'de'
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === 'de' ? 'en' : 'de';
    localStorage.setItem('lang', newLanguage);
    setLanguage(newLanguage);
    window.location.reload(); // Refresh to apply translations
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#fff',
        boxShadow: 'none',
        paddingTop: { xs: '24px', md: '16px' },
        paddingBottom: { xs: '16px', md: '0px' },
        paddingLeft: { xs: '16px', md: '16px', lg: '32px' },
        paddingRight: { xs: '32px', md: '24px' },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: '12px',
          paddingLeft: { xs: '0', md: '16px' },
          paddingRight: { xs: '8px', md: '24px' },
        }}
      >
        {/* Logo Section */}
        <MuiLink
          component={NavLink}
          to="/"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box
            component="img"
            src="/assets/logo.png"
            alt="Fotogram logo"
            sx={{
              width: { xs: '116px', md: '116px' },
              height: 'auto',
              paddingTop: { lg: '17px' },
            }}
          />
        </MuiLink>

        {/* Desktop Navigation Links (hidden on mobile) */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            height: '100%',
            gap: '20px',
          }}
        >
          {[
            { label: wording.home, path: '' },
            {
              label: wording.whyFotogram,
              path: 'why-fotogram',
            },
            {
              label: wording.pricing,
              path: 'pricing',
            },
            {
              label: wording.ourStory,
              path: 'our-story',
            },
            {
              label: wording.faq,
              path: 'faq',
            },
          ].map((route) => (
            <MuiLink
              key={route.path}
              component={NavLink}
              to={route.path}
              color="inherit"
              underline="none"
              sx={{
                fontSize: '16px',
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
              {translate(route.label)}
            </MuiLink>
          ))}
        </Box>
        {/* Language Toggle Button and Try It Button */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <Button
            onClick={handleLanguageToggle}
            style={{ width: '24px', minWidth: '24px' }}
            sx={{ padding: '0' }}
          >
            {language === 'en' ? 'DE' : 'EN'}
          </Button>
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <TryIt />
          </Box>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          aria-label="menu"
          size="large"
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: 'flex', md: 'none' },
            padding: 0,
            color: 'rgb(27, 27, 30)',
          }}
        >
          <MenuIcon fontSize="large" />
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
            padding: '24px 0 24px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ alignSelf: 'flex-end', marginRight: '12px', color: '#333' }}
          >
            <CloseIcon />
          </IconButton>
          <List sx={{ width: '100%', textAlign: 'center' }}>
            {[
              { label: wording.home, path: '' },
              {
                label: wording.whyFotogram,
                path: 'why-fotogram',
              },
              {
                label: wording.pricing,
                path: 'pricing',
              },
              {
                label: wording.ourStory,
                path: 'our-story',
              },
              {
                label: wording.faq,
                path: 'faq',
              },
              {
                label: wording.contactUs,
                path: 'get-in-touch',
              },
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
                  primary={translate(route.label)}
                  sx={{ textAlign: 'center' }}
                />
              </ListItem>
            ))}
          </List>

          <Box
            sx={{
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={handleLanguageToggle}
              style={{ width: '24px', minWidth: '24px' }}
              sx={{ padding: '0' }}
            >
              {language === 'en' ? 'DE' : 'EN'}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
