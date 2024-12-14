import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import React, { useState } from 'react';
import wording from '../constants/wording';
import translate from '../helpers/translate';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(emailValue));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    if (emailError || !name || !message) {
      setIsError(true);
      setSuccessMessage('');
      return;
    }

    try {
      setIsLoading(true);
      setIsError(false);
      setSuccessMessage('');

      const response = await fetch('https://demo.parklolo.com/api/message', {
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
        setSuccessMessage(translate(wording.contactUsSuccess));
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setIsLoading(false);
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
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
          boxShadow: { md: '0 4px 12px rgba(0, 0, 0, 0.1)' },
          padding: { xs: '8px', md: '40px' },
          margin: { md: '24px' },
        }}
      >
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
            sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}
          >
            {translate(wording.contactUs)}
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
              <Typography>{translate(wording.contactUsError)}</Typography>
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
                label={translate(wording.name)}
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
                label={translate(wording.email)}
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError ? translate(wording.emailError) : ''}
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
                label={translate(wording.telefonNumber)}
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
                label={translate(wording.message)}
                multiline
                rows={4}
                placeholder={translate(wording.contactUsMessagePlaceholder)}
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
                  fontWeight: 'bold',
                  padding: '12px 24px',
                  textTransform: 'none',
                  borderRadius: '24px',
                  fontSize: '16px',
                  backgroundColor: '#0073e6',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                  marginTop: '16px',

                  ':hover': { backgroundColor: '#005bb5' },
                }}
              >
                {isLoading && (
                  <CircularProgress
                    size={24}
                    sx={{ color: 'white' }}
                  />
                )}
                {translate(wording.sendMessage)}
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            flex: 1,
            textAlign: 'left',
            color: '#555',
            padding: { xs: '16px', md: '40px' },
          }}
        >
          <Typography
            variant="body1"
            sx={{ mb: 2, fontWeight: 'bold' }}
          >
            E-Mail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            support@fotogram.app
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, fontWeight: 'bold' }}
          >
            WhatsApp: &nbsp;&nbsp;&nbsp; +49 (0) 157 3428 3827
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, fontWeight: 'bold' }}
          >
            Support: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +49 (0) 40 4666
            5552
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
