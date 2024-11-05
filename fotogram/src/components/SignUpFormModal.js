import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const SignUpFormPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('self-employed');
  const [customSubdomain, setCustomSubdomain] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const formStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    minWidth: '320px',
    maxWidth: '600px',
    margin: '50px auto',
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Construct the POST request body
    const requestBody = {
      company: customSubdomain, // Using custom domain
      email: email,
      displayName: `${firstName} ${lastName}`,
      users: true,
      media: true,
    };

    try {
      setIsSuccess(false);
      setIsError(false);
      const response = await axios.post(
        'https://demo.parklolo.com/api/register-company',
        requestBody
      );
      if (response.status === 200) {
        setIsError(false);
        setIsSuccess(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setCustomSubdomain('');
        setAgreedToTerms(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <Box
      sx={formStyle}
      component="form"
      onSubmit={handleSubmit}
    >
      {/* Main heading */}
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}
      >
        Just get started!
      </Typography>

      {/* Subtext */}
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', mb: 3, color: '#555' }}
      >
        Our one-step sign-up only takes a few seconds and is completely free.
      </Typography>

      {/* Form fields */}
      <Box sx={{ display: 'flex', gap: '10px', mb: 2 }}>
        <TextField
          fullWidth
          label="First name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          sx={{ backgroundColor: '#f5f5f5' }} // Light background for the input
        />
        <TextField
          fullWidth
          label="Last name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          sx={{ backgroundColor: '#f5f5f5' }}
        />
      </Box>

      {/* Email Address */}
      <TextField
        fullWidth
        label="Email address"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        sx={{ backgroundColor: '#f5f5f5', mb: 2 }}
      />

      {/* Radio Buttons for Role */}
      <RadioGroup
        row
        aria-label="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        sx={{ justifyContent: 'center', mb: 2 }}
      >
        <FormControlLabel
          value="self-employed"
          control={<Radio />}
          label="I am self-employed"
        />
        <FormControlLabel
          value="company"
          control={<Radio />}
          label="I am part of a company or team"
        />
      </RadioGroup>

      {/* Custom Domain Field */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          borderRadius: '5px',
          padding: '10px',
          mb: 2,
        }}
      >
        <Typography sx={{ color: '#555' }}>https://</Typography>
        <TextField
          fullWidth
          placeholder="Your custom address"
          variant="outlined"
          value={customSubdomain}
          onChange={(e) => setCustomSubdomain(e.target.value)}
          margin="none"
          sx={{ backgroundColor: '#f5f5f5', ml: 1 }}
        />
        <Typography sx={{ color: '#555', ml: 1 }}>.fotogram.app</Typography>
      </Box>

      {/* Terms and Conditions Checkbox */}
      <FormGroup sx={{ mb: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
          }
          label={
            <Typography sx={{ color: '#555' }}>
              I agree to the{' '}
              <Link
                href="#"
                underline="hover"
              >
                terms and conditions
              </Link>{' '}
              and{' '}
              <Link
                href="#"
                underline="hover"
              >
                privacy policy
              </Link>{' '}
              of Fotogram.
            </Typography>
          }
        />
      </FormGroup>

      {/* Submit Button */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: '#6aaad4', // Button color
          color: '#fff',
          fontWeight: 'bold',
          padding: '12px',
          textTransform: 'none',
          borderRadius: '10px',
          fontSize: '1.1rem',
          '&:hover': {
            backgroundColor: '#6aaad4', // Same color on hover
          },
        }}
        disabled={!agreedToTerms} // Disable button until terms are agreed to
      >
        Sign up for the free plan now
      </Button>

      {/* Success Message with Green Checkmark */}
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
            You have successfully created your account.
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
            An error occurred while creating your account. Please contact us at
            support@fotogram.app.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SignUpFormPage;
