// src/components/Footer.js
import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import translate from '../helpers/translate';
import wording from '../constants/wording';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lang =
    localStorage.getItem('lang') ||
    (navigator.language.startsWith('de') ? 'de' : 'en');

  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '24px',
        backgroundColor: '#f0f0f0',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Box
        sx={{ display: 'flex', justifyContent: 'center', gap: '16px', mb: 2 }}
      >
        <Link
          href={'/' + lang + '/imprint'}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          {translate(wording.imprint)}
        </Link>
        <Link
          href={'/' + lang + '/privacy-policy'}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          {translate(wording.privacyPolicy)}
        </Link>
        <Link
          href={'/' + lang + '/terms-and-conditions'}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          {translate(wording.agb)}
        </Link>
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', gap: '16px', mb: 2 }}
      >
        <IconButton
          href="https://www.facebook.com/share/hnDPdikuQtG1oopQ/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          sx={{ color: '#3b5998' }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/fotogram.de/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          sx={{ color: '#E1306C' }}
        >
          <Instagram />
        </IconButton>
        {/* <IconButton
          href="https://www.youtube.com/channel/UCCP9CubPqHVdHNpwsqQh3EA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          sx={{ color: '#FF0000' }}
        >
          <YouTube />
        </IconButton> */}
      </Box>
      <Typography
        variant="body2"
        sx={{ fontSize: '14px', color: '#6c757d' }}
      >
        &copy; {currentYear} fotogram. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
