// src/components/SignUpFormPage.js
import React from 'react';
import { Box, Typography, TextField, Button, Radio, FormControlLabel, RadioGroup, Checkbox, FormGroup, Link } from '@mui/material';

const SignUpFormPage = () => {
  const formStyle = {
    backgroundColor: '#fff', // White background for the form
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Light shadow for a subtle effect
    minWidth: '320px',
    maxWidth: '600px', // Similar width as in the example
    margin: '50px auto',
  };

  return (
    <Box sx={formStyle}>
      {/* Main heading */}
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}>
        Just get started!
      </Typography>

      {/* Subtext */}
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 3, color: '#555' }}>
        Our one-step sign-up only takes a few seconds and is completely free.
      </Typography>

      {/* First and Last Name Fields */}
      <Box sx={{ display: 'flex', gap: '10px', mb: 2 }}>
        <TextField
          fullWidth
          label="First name"
          variant="outlined"
          sx={{ backgroundColor: '#f5f5f5' }} // Light background for the input
        />
        <TextField
          fullWidth
          label="Last name"
          variant="outlined"
          sx={{ backgroundColor: '#f5f5f5' }}
        />
      </Box>

      {/* Email Address */}
      <TextField
        fullWidth
        label="Email address"
        variant="outlined"
        margin="normal"
        sx={{ backgroundColor: '#f5f5f5', mb: 2 }}
      />

      {/* Radio Buttons for Role */}
      <RadioGroup
        row
        aria-label="role"
        defaultValue="self-employed"
        name="role"
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
      <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '5px', padding: '10px', mb: 2 }}>
        <Typography sx={{ color: '#555' }}>https://</Typography>
        <TextField
          fullWidth
          placeholder="Your custom address"
          variant="outlined"
          margin="none"
          sx={{ backgroundColor: '#f5f5f5', ml: 1 }}
        />
        <Typography sx={{ color: '#555', ml: 1 }}>.fotogram.app</Typography>
      </Box>

      {/* Terms and Conditions Checkbox */}
      <FormGroup sx={{ mb: 2 }}>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography sx={{ color: '#555' }}>
              I agree to the <Link href="#" underline="hover">terms and conditions</Link> and <Link href="#" underline="hover">privacy policy</Link> of Fotogram.
            </Typography>
          }
        />
      </FormGroup>

      {/* Submit Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: '#6aaad4', // Yellow button color
          color: '#fff',
          fontWeight: 'bold',
          padding: '12px',
          textTransform: 'none',
          borderRadius: '10px',
          fontSize: '1.1rem',
          '&:hover': {
            backgroundColor: '#6aaad4', // Darker yellow on hover
          },
        }}
      >
        Sign up for the free plan now
      </Button>

      {/* Coupon Code Link */}
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
        <Link href="#" underline="hover">Do you have a coupon code?</Link>
      </Typography>
    </Box>
  );
};

export default SignUpFormPage;
