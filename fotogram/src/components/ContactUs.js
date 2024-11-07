// src/components/ContactUs.js
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Basic email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(emailValue));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError || !name || !message) {
      setIsError(true);
      setSuccessMessage('');
      return;
    }

    // Reset success and error messages
    setIsError(false);
    setSuccessMessage('');

    try {
      const response = await fetch('https://demo.fotogram.app/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
          phone,
          senderDisplayName: name,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Form submitted successfully');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
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
          {successMessage && (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'green', mb: 2 }}>
              <CheckCircleIcon sx={{ mr: 1 }} />
              <Typography>{successMessage}</Typography>
            </Box>
          )}
          {isError && (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'red', mb: 2 }}>
              <ErrorIcon sx={{ mr: 1 }} />
              <Typography>An error occurred. Please try again.</Typography>
            </Box>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }} // Gray background
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Business Email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError ? 'Please enter a valid email address' : ''}
                required
                sx={{ backgroundColor: '#f5f5f5' }} // Gray background
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                sx={{ backgroundColor: '#f5f5f5' }} // Gray background
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                placeholder="Please type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }} // Gray background
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
            📧 support@fotogram.app
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
