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
        setSuccessMessage('Formular erfolgreich abgeschickt'); 
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
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '1000px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: { xs: '8px', md: '40px' },
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
          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}
          >
            Kontaktieren Sie uns
          </Typography>
          {successMessage && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'green',
                mb: 2,
              }}
            >
              <CheckCircleIcon sx={{ mr: 1 }} />
              <Typography>{successMessage}</Typography>
            </Box>
          )}
          {isError && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'red',
                mb: 2,
              }}
            >
              <ErrorIcon sx={{ mr: 1 }} />
              <Typography>Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.</Typography>
            </Box>
          )}
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label="Geschäftliche E-Mail"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={
                  emailError ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein' : ''
                }
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label="Telefon"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label="Nachricht "
                multiline
                rows={4}
                placeholder="Bitte geben Sie hier Ihre Nachricht ein"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  padding: '8px',
                  fontWeight: 'bold',
                  borderRadius: '24px',
                  '&:hover': {
                    backgroundColor: '#115293',
                  },
                }}
              >
                Nachricht senden
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
            padding: { xs: '16px', md: '40px' },
          }}
        >
          <Typography
            variant="body1"
            sx={{ mb: 2, fontWeight: 'bold' }}
          >
            📧 support@fotogram.app
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 2 }}
          >
            Fotogram Technology <br />
            VAT registered business No. 203588199 <br />
            1004 Street Building No. 18 <br />
            POB: 50255 <br />
            1616102 Nazareth <br />
            Israel
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 2 }}
          >
            Fotogram Technology <br />
            CEO Eilon Mario Netzer <br />
            Bachstr. 145 <br />
            22083 Hamburg <br /> 
            Deutschland
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
