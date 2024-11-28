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
        padding: '24px 0px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f0f0f0',
        borderTop: '2px solid #e0e0e0',
        width: '100%',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          width: '100%',
          justifyContent: { xs: 'center', md: 'space-around' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '16px',
            mb: 2,
          }}
        >
          <Link
            href={'/faq'}
            sx={{ textDecoration: 'none', color: '#6c757d', textAlign: 'left' }}
          >
            {translate(wording.faq)}
          </Link>
          <Link
            href={'/get-in-touch'}
            sx={{ textDecoration: 'none', color: '#6c757d', textAlign: 'left' }}
          >
            {translate(wording.contact)}
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '16px',
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              mb: 2,
            }}
          >
            <IconButton
              href="https://www.facebook.com/share/hnDPdikuQtG1oopQ/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              size="large"
              sx={{ color: '#3b5998', fontSize: '32px' }}
            >
              <Facebook fontSize="32px" />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/fotogram_de/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              sx={{ color: '#E1306C', fontSize: '32px' }}
            >
              <Instagram fontSize="32px" />
            </IconButton>

            {/* <IconButton
          href="https://www.youtube.com/channel/UCCP9CubPqHVdHNpwsqQh3EA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          sx={{ color: '#FF0000', fontSize: '32px' }}
        >
          <YouTube fontSize="32px" />
        </IconButton> */}
          </Box>

          <Typography
            variant="body2"
            sx={{
              fontSize: '14px',
              color: '#6c757d',
              marginTop: { xs: '24px', md: '0' },
            }}
          >
            &copy; {currentYear} Fotogram Technology
            <br />
            All rights reserved
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '16px',
            mb: 2,
          }}
        >
          <Link
            href={'/' + lang + '/privacy-policy'}
            sx={{ textDecoration: 'none', color: '#6c757d', textAlign: 'left' }}
          >
            {translate(wording.privacyPolicy)}
          </Link>
          <Link
            href={'/' + lang + '/terms-and-conditions'}
            sx={{ textDecoration: 'none', color: '#6c757d', textAlign: 'left' }}
          >
            {translate(wording.agb)}
          </Link>
          <Link
            href={'/' + lang + '/imprint'}
            sx={{ textDecoration: 'none', color: '#6c757d', textAlign: 'left' }}
          >
            {translate(wording.imprint)}
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginLeft: '-24px',
          marginTop: '24px',
          transform: { xs: 'scale(0.8)', md: 'scale(1)' },
        }}
      >
        <a
          href="https://apps.apple.com/il/app/fotogram-app/id1660636453"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            alt="Download on the Play Store"
            src="/assets/download-on-the-app-store.webp"
            component="img"
            width="120px"
            height="40px"
            loading="lazy"
          ></Box>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.fotogram.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            alt="Download on the App Store"
            src="/assets/download-on-the-play-store.webp"
            component="img"
            width="132px"
            height="40px"
            loading="lazy"
          ></Box>
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
