import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Link,
  Paper,
  TextField,
  Typography,
  Chip,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import translate from '../helpers/translate';
import wording from '../constants/wording';

const VoucherSignUpForm = () => {
  const lang =
    localStorage.getItem('lang') ||
    (navigator.language.startsWith('de') ? 'de' : 'en');

  const { promoter, code } = useParams();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customSubdomain, setCustomSubdomain] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: { xs: 'none', md: '0px 8px 32px rgba(0, 0, 0, 0.12)' },
    maxWidth: '650px',
    margin: '50px auto',
    border: '2px solid #f0f7ff',
  };

  const voucherBannerStyle = {
    background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
    color: 'white',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    marginBottom: '30px',
    position: 'relative',
    overflow: 'hidden',
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(emailValue));
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'invalid_voucher_code':
        return translate(wording.errorInvalidVoucherCode);
      case 'company_exists_already':
        return translate(wording.errorCompanyExistsAlready);
      default:
        return translate(wording.errorVoucherGeneric);
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (emailError || isLoading) {
      return;
    }

    const requestBody = {
      company: customSubdomain,
      email: email,
      displayName: `${firstName} ${lastName}`,
      users: true,
      media: true,
      plan: 'pro', // Default to pro for voucher users
      language: lang,
      phoneNumber: phoneNumber,
      promoter: promoter,
      voucherCode: code,
    };

    try {
      setIsLoading(true);
      setIsSuccess(false);
      setIsError(false);
      setErrorMessage('');
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
        setIsLoading(false);
      } else {
        setIsError(true);
        setErrorMessage(getErrorMessage());
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);

      // Handle specific error codes from API response
      if (error.response && error.response.data && error.response.data.error) {
        const errorCode = error.response.data.error;
        setErrorMessage(getErrorMessage(errorCode));
      } else {
        setErrorMessage(getErrorMessage());
      }
    }
  };

  return (
    <Box
      sx={{
        py: 4,
      }}
    >
      <Box sx={formStyle} component="form" onSubmit={handleSubmit}>
        {/* Voucher Banner */}
        <Paper sx={voucherBannerStyle} elevation={0}>
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              right: -20,
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 100,
              height: 100,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.05)',
            }}
          />
          <LocalOfferIcon sx={{ fontSize: '3rem', mb: 1 }} />
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
            {translate(wording.voucherBundleTitle)}
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            {`${translate(wording.voucherExclusiveAccess)} ${
              promoter.charAt(0).toUpperCase() + promoter.slice(1)
            }`}
          </Typography>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}
          >
            <Chip
              label={`${translate(wording.voucherPromoterLabel)}:  ${
                promoter.charAt(0).toUpperCase() + promoter.slice(1)
              }`}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontWeight: 'bold',
              }}
            />
            <Chip
              label={`${translate(wording.voucherCodeLabel)}: ${code}`}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontWeight: 'bold',
              }}
            />
          </Box>
        </Paper>

        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          {translate(wording.voucherActivateTitle)}
        </Typography>

        <Typography
          variant="body1"
          sx={{ textAlign: 'center', mb: 3, color: '#718096' }}
        >
          {translate(wording.voucherActivateDescription)}
        </Typography>

        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TextField
            fullWidth
            label={translate(wording.firstName)}
            variant="outlined"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
            sx={{
              backgroundColor: '#f7fafc',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
          />
          <TextField
            fullWidth
            label={translate(wording.lastName)}
            variant="outlined"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
            sx={{
              backgroundColor: '#f7fafc',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
          />
        </Box>

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
          sx={{
            backgroundColor: '#f7fafc',
            mb: 0,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />

        <TextField
          fullWidth
          label={translate(wording.phoneNumber)}
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder={translate(wording.phoneNumberPlaceholder)}
          helperText={translate(wording.phoneNumberHint)}
          margin="normal"
          sx={{
            backgroundColor: '#f7fafc',
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7fafc',
            borderRadius: '8px',
            padding: '16px',
            mb: 2,
            border: '1px solid rgba(0, 0, 0, 0.23)',
          }}
        >
          <Typography sx={{ color: '#4a5568', fontWeight: 'medium' }}>
            https://
          </Typography>
          <TextField
            fullWidth
            placeholder="subdomain"
            variant="outlined"
            required
            value={customSubdomain}
            onChange={(e) => setCustomSubdomain(e.target.value)}
            margin="none"
            sx={{
              backgroundColor: '#f7fafc',
              ml: 1,
              '& .MuiInputBase-input': {
                padding: '4px',
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: '4px',
              },
            }}
          />
          <Typography sx={{ color: '#4a5568', ml: 1, fontWeight: 'medium' }}>
            .fotogram.app
          </Typography>
        </Box>

        <FormGroup sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                sx={{
                  color: '#1976d2',
                  '&.Mui-checked': {
                    color: '#1976d2',
                  },
                }}
              />
            }
            label={
              lang === 'en' ? (
                <Typography sx={{ color: '#4a5568' }}>
                  I agree to the{' '}
                  <Link
                    href={'/' + lang + '/terms-and-conditions'}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ color: '#1976d2', fontWeight: 'medium' }}
                  >
                    {translate(wording.agb)}
                  </Link>{' '}
                  and{' '}
                  <Link
                    href={'/' + lang + '/privacy-policy'}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ color: '#1976d2', fontWeight: 'medium' }}
                  >
                    {translate(wording.privacyPolicy)}
                  </Link>{' '}
                  of Fotogram.
                </Typography>
              ) : (
                <Typography sx={{ color: '#4a5568' }}>
                  Ich stimme den{' '}
                  <Link
                    href={'/' + lang + '/terms-and-conditions'}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ color: '#1976d2', fontWeight: 'medium' }}
                  >
                    {translate(wording.agb)}
                  </Link>{' '}
                  und{' '}
                  <Link
                    href={'/' + lang + '/privacy-policy'}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ color: '#1976d2', fontWeight: 'medium' }}
                  >
                    {translate(wording.privacyPolicy)}
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
          disabled={!agreedToTerms}
          variant="contained"
          sx={{
            fontWeight: 'bold',
            padding: '15px 24px',
            textTransform: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            boxShadow: '0 4px 15px rgba(25, 118, 210, 0.4)',
            '&.Mui-disabled': {
              color: 'white',
              opacity: 0.6,
            },
            ':hover': {
              background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
              boxShadow: '0 6px 20px rgba(25, 118, 210, 0.6)',
            },
          }}
        >
          {isLoading && <CircularProgress size={24} sx={{ color: 'white' }} />}
          <LocalOfferIcon sx={{ fontSize: '1.2rem' }} />
          {translate(wording.voucherActivateButton)}
        </Button>

        {isSuccess && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 3,
              justifyContent: 'center',
              padding: '16px',
              backgroundColor: '#f0fff4',
              borderRadius: '8px',
              border: '1px solid #9ae6b4',
            }}
          >
            <CheckCircleIcon
              sx={{ color: '#38a169', fontSize: '2rem', mr: 1 }}
            />
            <Typography sx={{ color: '#38a169', fontWeight: 'bold' }}>
              {translate(wording.voucherSuccessMessage)}
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
              padding: '16px',
              backgroundColor: '#fed7d7',
              borderRadius: '8px',
              border: '1px solid #feb2b2',
            }}
          >
            <ErrorIcon sx={{ color: '#e53e3e', fontSize: '2rem', mr: 1 }} />
            <Typography sx={{ color: '#e53e3e', fontWeight: 'bold' }}>
              {errorMessage || translate(wording.errorVoucherGeneric)}
            </Typography>
          </Box>
        )}

        {/* Benefits Section */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e2e8f0' }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'left',
              mb: 2,
              fontWeight: 'bold',
              color: '#2d3748',
            }}
          >
            {translate(wording.voucherBundleIncludes)}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
            }}
          >
            {/* Left Column */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography
                variant="body2"
                sx={{ color: '#4a5568', display: 'flex', alignItems: 'center' }}
              >
                <CheckCircleIcon
                  sx={{ color: '#38a169', fontSize: '1rem', mr: 1 }}
                />
                {translate(wording.voucherUnlimitedEvents)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#4a5568', display: 'flex', alignItems: 'center' }}
              >
                <CheckCircleIcon
                  sx={{ color: '#38a169', fontSize: '1rem', mr: 1 }}
                />
                {translate(wording.voucherUnlimitedClients)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#4a5568', display: 'flex', alignItems: 'center' }}
              >
                <CheckCircleIcon
                  sx={{ color: '#38a169', fontSize: '1rem', mr: 1 }}
                />
                {translate(wording.voucher500GBStorage)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#4a5568', display: 'flex', alignItems: 'center' }}
              >
                <CheckCircleIcon
                  sx={{ color: '#38a169', fontSize: '1rem', mr: 1 }}
                />
                {translate(wording.voucherDownloadAllImages)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#4a5568', display: 'flex', alignItems: 'center' }}
              >
                <CheckCircleIcon
                  sx={{ color: '#38a169', fontSize: '1rem', mr: 1 }}
                />
                {translate(wording.autoLogoOnImages)}
              </Typography>
            </Box>

            {/* Right Column */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography
                variant="body2"
                sx={{ color: '#4a5568', display: 'flex', alignItems: 'center' }}
              >
                <CheckCircleIcon
                  sx={{ color: '#38a169', fontSize: '1rem', mr: 1 }}
                />
                {translate(wording.ftp)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#4a5568', display: 'flex', alignItems: 'center' }}
              >
                <CheckCircleIcon
                  sx={{ color: '#38a169', fontSize: '1rem', mr: 1 }}
                />
                {translate(wording.iptc)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#4a5568', display: 'flex', alignItems: 'center' }}
              >
                <CheckCircleIcon
                  sx={{ color: '#38a169', fontSize: '1rem', mr: 1 }}
                />
                {translate(wording.aiFaceRecognition)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#4a5568', display: 'flex', alignItems: 'center' }}
              >
                <CheckCircleIcon
                  sx={{ color: '#38a169', fontSize: '1rem', mr: 1 }}
                />
                {translate(wording.iosAndroidBrandedApp)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#4a5568', display: 'flex', alignItems: 'center' }}
              >
                <CheckCircleIcon
                  sx={{ color: '#38a169', fontSize: '1rem', mr: 1 }}
                />
                {translate(wording.videosAndReels)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VoucherSignUpForm;
