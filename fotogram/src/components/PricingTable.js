import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Badge,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wording from '../constants/wording';
import translate from '../helpers/translate';

const plans = [
  {
    isBusiness: true,
    title: wording.basis,
    package: 'basic',
    monthlyPrice: 0,
    yearlyPrice: (0 * 12 * 0.85).toFixed(2),
    description: wording.basicDesc,
    features: [
      wording.limitedEvents,
      wording.limitedClients,
      wording.Storage5GB,
      wording.TeamMembers1,
      wording.crm,
      wording.imageTagging,
      wording.downloadSelectedImages,
      wording.clientRequests,
      wording.digitalBusinessCard,
      wording.autoLogoOnImages,
      wording.calendarIntegration,
      wording.liveEvent,
      wording.aiFaceRecognition,
      wording.liveVideoStreaming,
      wording.digitalAlbum,
      wording.digitalContract,
    ],
    unavailableFeatures: [
      wording.customDomain,
      wording.CustomBrand,
      wording.iosAndroidBrandedApp,
      wording.downloadAllImages,
      wording.videosAndReels,
      wording.shop,
    ],

    buttonText: wording.freeTrial,
  },
  {
    isBusiness: true,
    package: 'advanced',
    title: wording.advanced,
    monthlyPrice: 14.99,
    yearlyPrice: (14.99 * 12 * 0.85).toFixed(2),
    description: wording.advancedDesc,
    features: [
      wording.unlimitedEvents,
      wording.unlimitedClients,
      wording.Storage500GB,
      wording.TeamMembers1,
      wording.crm,
      wording.imageTagging,
      wording.downloadSelectedImages,
      wording.clientRequests,
      wording.digitalBusinessCard,
      wording.autoLogoOnImages,
      wording.calendarIntegration,
      wording.liveEvent,
      wording.aiFaceRecognition,
      wording.liveVideoStreaming,
      wording.digitalAlbum,
      wording.digitalContract,
    ],
    unavailableFeatures: [
      wording.customDomain,
      wording.CustomBrand,
      wording.iosAndroidBrandedApp,
      wording.downloadAllImages,
      wording.videosAndReels,
      wording.shop,
    ],
    buttonText: wording.freeTrial,
    popular: true,
  },
  {
    isBusiness: true,
    package: 'premium',
    title: wording.premium,
    monthlyPrice: 59.99,
    yearlyPrice: (59.99 * 12 * 0.85).toFixed(2),
    description: wording.premiumDesc,
    features: [
      wording.unlimitedEvents,
      wording.unlimitedClients,
      wording.Storage1TB,
      wording.TeamMembers3,
      wording.crm,
      wording.imageTagging,
      wording.downloadSelectedImages,
      wording.clientRequests,
      wording.digitalBusinessCard,
      wording.autoLogoOnImages,
      wording.calendarIntegration,
      wording.liveEvent,
      wording.aiFaceRecognition,
      wording.liveVideoStreaming,
      wording.digitalAlbum,
      wording.digitalContract,
      wording.customDomain,
      wording.CustomBrand,
      wording.iosAndroidBrandedApp,
      wording.downloadAllImages,
      wording.videosAndReels,
      wording.shop,
    ],
    unavailableFeatures: [],
    buttonText: wording.freeTrial,
  },
  {
    package: 'private',
    isBusiness: false,
    title: wording.PrivateUse,
    monthlyPrice: 4.99,
    yearlyPrice: (4.99 * 12 * 0.85).toFixed(2),
    description: wording.privateUseDesc,
    features: [
      wording.unlimitedEvents,
      wording.Storage20GB,
      wording.privateMember,
      wording.imageTagging,
      wording.downloadSelectedImages,
      wording.liveEvent,
      wording.aiFaceRecognition,
      wording.digitalAlbum,
    ],
    unavailableFeatures: [],

    buttonText: wording.freeTrial,
  },
  {
    customized: true,
    isBusiness: true,
    title: wording.customized,
    price: '-',
    description: wording.tailoredPlan,
    features: [wording.contactForCustomPlan],
    unavailableFeatures: [],
    buttonText: wording.contactUs,
  },
];

const PricingTable = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false);
  const [isBusiness, setIsBusiness] = useState(true); // Neuen State für "Geschäftlich/Privat"

  const handlePlanSelection = (plan) => {
    if (plan.customized) {
      navigate('/get-in-touch');
      return;
    }

    if (plan.isBusiness === false) {
      navigate(`/hub-register`);
      return;
    }

    navigate(`/signup?plan=${plan.package}`);
    return;
  };

  return (
    <Box
      sx={{
        paddingTop: { xs: '40px', md: '40px' },
        paddingBottom: { xs: '40px', md: '40px' },
        paddingLeft: { xs: '40px', md: '16px' },
        paddingRight: { xs: '40px', md: '16px' },
        backgroundColor: '#fff',
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}
      >
        {translate(wording.plans)}
      </Typography>

      {/* Neue Toggle für "Geschäftlich/Privat" */}
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          marginBottom: '20px',
        }}
      >
        <ToggleButtonGroup
          exclusive
          value={isBusiness}
          strec
          aria-label="text alignment"
        >
          <ToggleButton
            value="left"
            aria-label="left aligned"
            sx={{
              width: '150px',
              color: !isBusiness ? '#1976d2' : '#757575',
              fontWeight: 'bold',
            }}
            onClick={() => setIsBusiness(false)}
          >
            Privat
          </ToggleButton>
          <ToggleButton
            value="center"
            aria-label="centered"
            sx={{
              width: '150px',
              color: isBusiness ? '#1976d2' : '#757575',
              fontWeight: 'bold',
            }}
            onClick={() => setIsBusiness(true)}
          >
            Geschäftlich
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {/* Toggle für Monatlich/Jährlich */}
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          marginBottom: '20px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            minWidth: { xs: '123px', md: 'fit-content' },

            color: isYearly ? '#757575' : '#1976d2',
            fontWeight: 'bold',
          }}
        >
          Monatlich bezahlen und <br /> flexibel bleiben
        </Typography>
        <Switch
          checked={isYearly}
          onChange={() => setIsYearly(!isYearly)}
        />
        <Typography
          variant="body1"
          sx={{ color: isYearly ? '#1976d2' : '#757575', fontWeight: 'bold' }}
        >
          Jährlich bezahlen und <br /> 15% sparen
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '32px',
        }}
      >
        {plans
          .filter((plan) => plan.isBusiness === isBusiness)
          .map((plan, index) => (
            <Box
              key={index}
              sx={{
                height: 'fit-content',
                width: { xs: '100%' },
                maxWidth: { xs: '100%', md: '280px' },
                minWidth: { md: '280px' },
                padding: '24px 12px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                borderRadius: '10px',
                boxShadow: plan.popular
                  ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                  : '0 2px 10px rgba(0, 0, 0, 0.1)',
                border: plan.popular ? '2px solid #1976d2' : 'none',
                position: 'relative',
              }}
            >
              {plan.popular && !plan.customized && (
                <Badge
                  overlap="circular"
                  badgeContent={
                    <FavoriteIcon sx={{ color: '#fff', fontSize: '20px' }} />
                  }
                  sx={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    '& .MuiBadge-badge': {
                      backgroundColor: '#1976d2',
                      borderRadius: '50%',
                      height: '36px',
                      width: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  }}
                />
              )}
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                {translate(plan.title)}
              </Typography>

              {!plan.customized && (
                <>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: '#1976d2' }}
                  >
                    {isYearly
                      ? `${(plan.yearlyPrice / 12).toFixed(2)}€ / Monat`
                      : `${plan.monthlyPrice}€ / Monat`}
                  </Typography>
                  {isYearly && (
                    <Typography
                      variant="body2"
                      sx={{ color: '#757575', marginBottom: '10px' }}
                    >
                      {`${plan.yearlyPrice}€ / Jahr`}
                    </Typography>
                  )}
                  <Typography
                    variant="body2"
                    sx={{ color: '#757575', marginBottom: '10px' }}
                  >
                    zzgl. MwSt.
                  </Typography>
                </>
              )}

              <Typography
                variant="body2"
                sx={{ marginBottom: '20px' }}
              >
                {translate(plan.description)}
              </Typography>

              <Divider />

              <List>
                {plan.features.map((feature, index) => (
                  <ListItem
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                    }}
                  >
                    {!plan.customized && <CheckIcon sx={{ color: 'green' }} />}
                    {translate(feature)}
                  </ListItem>
                ))}
                {plan.unavailableFeatures.map((unavailableFeature, index) => (
                  <ListItem
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                    }}
                  >
                    <CloseIcon sx={{ color: 'red' }} />
                    {translate(unavailableFeature)}
                  </ListItem>
                ))}
              </List>

              <Button
                variant="contained"
                onClick={() => handlePlanSelection(plan)}
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: '8px 32px',
                  textTransform: 'none',
                  borderRadius: '24px',
                  marginTop: '20px',
                  '&:hover': {
                    backgroundColor: '#1976d2',
                  },
                }}
              >
                {translate(plan.buttonText)}
              </Button>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default PricingTable;
