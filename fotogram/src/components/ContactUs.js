// src/components/ContactUs.js
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
} from '@mui/material';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Basic email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(emailValue)); // Set error if email is invalid
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError) {
      // Submit form if there are no errors
      alert('Form submitted successfully');
    } else {
      alert('Please correct the errors in the form');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '40px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          maxWidth: '1000px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: { xs: '20px', md: '40px' },
        }}
      >
        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1,
            maxWidth: '500px',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
            Contact Us
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Name" required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Business Email"
                value={email}
                onChange={handleEmailChange}
                error={emailError} // Shows red border if emailError is true
                helperText={emailError ? 'Please enter a valid email address' : ''} // Shows error message
                required
              />
            </Grid>
        
            <Grid item xs={12} >
              <TextField fullWidth label="Phone (optional)" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                placeholder="Please type your message here"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  padding: '10px',
                  fontWeight: 'bold',
                  borderRadius: '24px',
                  '&:hover': {
                    backgroundColor: '#115293',
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Contact Information */}
        <Box
          sx={{
            flex: 1,
            textAlign: 'center',
            color: '#555',
            padding: { xs: '20px', md: '40px' },
          }}
        >
          <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
            📧 support@fotogram.tech
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Fotogram Private Limited <br />
            Caddie Commercial Tower, 5th Floor <br />
            Aerocity, New Delhi, India
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Fotogram Inc <br />
            200 Continental Drive, Suite 401 <br />
            Newark, DE, 19713, USA
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
