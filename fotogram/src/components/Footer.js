// src/components/Footer.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '24px',
        backgroundColor: '#f0f0f0',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', mb: 2 }}>
        <IconButton
          href="https://www.facebook.com/profile.php?id=100084358785835"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          sx={{ color: '#3b5998' }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/fotogram.tech/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          sx={{ color: '#E1306C' }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://www.youtube.com/channel/UCCP9CubPqHVdHNpwsqQh3EA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          sx={{ color: '#FF0000' }}
        >
          <YouTube />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ fontSize: '14px', color: '#6c757d' }}>
        &copy; {currentYear} fotogram. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
