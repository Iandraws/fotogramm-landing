import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Divider,
  Switch,
  Badge,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import wording from '../constants/wording';
import translate from '../helpers/translate';

const plans = [
  {
    title: wording.basis,
    monthlyPrice: 20,
    yearlyPrice: (20 * 12 * 0.84).toFixed(2),
    description: wording.basicDesc,
    features: [
      wording.unlimitedEvents,
      wording.unlimitedClients,
      wording.crm,
      wording.unlimitedGallery,
      wording.imageTagging,
      wording.downloadSelectedImages,
      wording.clientRequests,
      wording.digitalBusinessCard,
      wording.autoLogoOnImages,
    ],
    unavailableFeatures: [
      wording.calendarIntegration,
      wording.liveEvent,
      wording.aiFaceRecognition,
      wording.liveVideoStreaming,
      wording.digitalAlbum,
      wording.digitalContract,
      wording.customDomain,
      wording.iosAndroidBrandedApp,
      wording.downloadAllImages,
      wording.videosAndReels,
      wording.shop,
    ],

    buttonText: wording.freeTrial,
  },
  {
    title: wording.advanced,
    monthlyPrice: 50,
    yearlyPrice: (50 * 12 * 0.84).toFixed(2),
    description: wording.advancedDesc,
    features: [
      wording.unlimitedEvents,
      wording.unlimitedClients,
      wording.crm,
      wording.unlimitedGallery,
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
    ],
    unavailableFeatures: [
      wording.iosAndroidBrandedApp,
      wording.downloadAllImages,
      wording.videosAndReels,
      wording.shop,
    ],
    buttonText: wording.freeTrial,
    popular: true,
  },
  {
    title: wording.premium,
    monthlyPrice: 200,
    yearlyPrice: (200 * 12 * 0.84).toFixed(2),
    description: wording.premiumDesc,
    features: [
      wording.unlimitedEvents,
      wording.unlimitedClients,
      wording.crm,
      wording.unlimitedGallery,
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
      wording.iosAndroidBrandedApp,
      wording.downloadAllImages,
      wording.videosAndReels,
      wording.shop,
    ],
    unavailableFeatures: [],
    buttonText: wording.freeTrial,
  },
  {
    customized: true,
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

  const handleSignUp = (planTitle) => {
    navigate(`/signup?plan=${planTitle.toLowerCase()}`);
  };

  const handleContact = () => {
    navigate('/get-in-touch');
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
          sx={{ color: isYearly ? '#757575' : '#1976d2', fontWeight: 'bold' }}
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
          Jährlich bezahlen und <br /> 16% sparen
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
        {plans.map((plan, index) => (
          <Box
            key={index}
            sx={{
              height: 'fit-content',
              width: { xs: '100%' },
              maxWidth: { xs: '100%', md: '280px' },
              minWidth: { md: '280px' },
              padding: '24px 16px',
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
                    ? `${plan.yearlyPrice}€ / Jahr`
                    : `${plan.monthlyPrice}€ / Monat`}
                </Typography>
                {isYearly && (
                  <Typography
                    variant="body2"
                    sx={{ color: '#757575', marginBottom: '10px' }}
                  >
                    ({(plan.yearlyPrice / 12).toFixed(2)}€ / Monat)
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
                  style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                >
                  {!plan.customized && <CheckIcon sx={{ color: 'green' }} />}
                  {translate(feature)}
                </ListItem>
              ))}
              {plan.unavailableFeatures.map((unavailableFeature, index) => (
                <ListItem
                  key={index}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                >
                  <CloseIcon sx={{ color: 'red' }} />
                  {translate(unavailableFeature)}
                </ListItem>
              ))}
            </List>

            <Button
              variant="contained"
              onClick={() =>
                plan.customized ? handleContact() : handleSignUp(plan.title.en)
              }
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
