import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import wording from '../constants/wording';
import translate from '../helpers/translate';
import parse from 'html-react-parser';

const JoinHub = () => {
  const lang =
    localStorage.getItem('lang') ||
    (navigator.language.startsWith('de') ? 'de' : 'en');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const formStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: { xs: 'none', md: '0px 4px 12px rgba(0, 0, 0, 0.1)' },
    maxWidth: '600px',
    margin: '50px auto',
  };

  const validateUsername = (value) => {
    const usernamePattern = /^[a-zA-Z0-9.]+$/; // Allows letters, numbers, and dots only
    return usernamePattern.test(value);
  };

  const validatePassword = (value) => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return passwordPattern.test(value);
  };

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError(!validateUsername(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(!validatePassword(value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (usernameError || emailError || passwordError) {
      return;
    }

    const requestBody = {
      email,
      username,
      displayName: `${firstName} ${lastName}`,
      password,
    };

    try {
      setIsSuccess(false);
      setIsError(false);
      const response = await axios.post(
        'https://hub.parklolo.com/api/register',
        requestBody
      );
      if (response.status === 200) {
        setIsError(false);
        setIsSuccess(true);

        setFirstName('');
        setLastName('');
        setUsername('');
        setEmail('');
        setPassword('');
        setAgreedToTerms(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      <Box
        sx={formStyle}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: '#333' }}
        >
          {translate(wording.join5000)}
        </Typography>

        <Typography
          variant="body1"
          sx={{ textAlign: 'center', mb: 3, color: '#666', lineHeight: 1.5 }}
        >
          {parse(translate(wording.joinExperience))}
        </Typography>

        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TextField
            fullWidth
            label={translate(wording.firstName)}
            variant="outlined"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ backgroundColor: '#f5f5f5' }}
          />
          <TextField
            fullWidth
            label={translate(wording.lastName)}
            variant="outlined"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
            sx={{ backgroundColor: '#f5f5f5' }}
          />
        </Box>

        <TextField
          fullWidth
          label={translate(wording.username)}
          variant="outlined"
          value={username}
          required
          onChange={handleUsernameChange}
          error={usernameError}
          helperText={usernameError ? translate(wording.usernameError) : ''}
          margin="normal"
          sx={{ backgroundColor: '#f5f5f5' }}
        />

        <TextField
          fullWidth
          label={translate(wording.email)}
          variant="outlined"
          value={email}
          required
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? translate(wording.emailError) : ''}
          margin="normal"
          sx={{ backgroundColor: '#f5f5f5' }}
        />

        <TextField
          fullWidth
          label={translate(wording.password)}
          variant="outlined"
          value={password}
          required
          onChange={handlePasswordChange}
          error={passwordError}
          helperText={passwordError ? translate(wording.passwordError) : ''}
          margin="normal"
          sx={{ backgroundColor: '#f5f5f5', mb: 2 }}
        />

        <FormGroup sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
            }
            label={
              lang === 'en' ? (
                <Typography sx={{ color: '#555' }}>
                  I agree to the{' '}
                  <Link
                    href="#"
                    underline="hover"
                  >
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="#"
                    underline="hover"
                  >
                    Privacy Policy
                  </Link>{' '}
                  of Fotogram.
                </Typography>
              ) : (
                <Typography sx={{ color: '#555' }}>
                  Ich stimme den{' '}
                  <Link
                    href="#"
                    underline="hover"
                  >
                    Allgemeinen Geschäftsbedingungen
                  </Link>{' '}
                  und{' '}
                  <Link
                    href="#"
                    underline="hover"
                  >
                    Datenschutzbestimmungen
                  </Link>{' '}
                  von Fotogram zu.
                </Typography>
              )
            }
          />
        </FormGroup>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            fontWeight: 'bold',
            padding: '12px 24px',
            textTransform: 'none',
            borderRadius: '24px',
            fontSize: '16px',
            backgroundColor: '#0073e6',
            ':hover': { backgroundColor: '#005bb5' },
          }}
          disabled={!agreedToTerms}
        >
          {translate(wording.privateSignup)}
        </Button>

        {isSuccess && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 3,
              justifyContent: 'center',
            }}
          >
            <CheckCircleIcon sx={{ color: 'green', fontSize: '2rem', mr: 1 }} />
            <Typography sx={{ color: 'green', fontWeight: 'bold' }}>
              {translate(wording.privateWelcome)}
            </Typography>
          </Box>
        )}

        {isError && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 3,
              justifyContent: 'center',
            }}
          >
            <ErrorIcon sx={{ color: 'red', fontSize: '2rem', mr: 1 }} />
            <Typography sx={{ color: 'red', fontWeight: 'bold' }}>
              {translate(wording.errorOccured)}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default JoinHub;
