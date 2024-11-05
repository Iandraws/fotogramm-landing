// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Typography variant="body2">&copy; {currentYear} fotogram</Typography>
    </Box>
  );
};

export default Footer;
