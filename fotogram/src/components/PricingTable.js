// src/components/PricingTable.js
import React from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const plans = [
  {
    title: 'BASIC',
    price: '€499',
    description:
      'Perfect for photographers looking to expand at the start of their journey.',
    features: [
      'Unlimited Events',
      'Unlimited Clients',
      'CRM (Client Management)',
      'Unlimited Gallery',
      'Image Tagging',
      'Download Selected Images',
      'Client Requests',
      'Digital Business Card',
      'Automatic Logo on Images',
    ],
    unavailableFeatures: [
      'Calendar Integration',
      'Live Event',
      'AI Face Recognition',
      'Live Video Streaming',
      'Digital Album',
      'Digital Contract',
      'Own Domain',
      'Branded App for iOS and Android',
      'Download All Images',
      'Videos and Reels',
      'Shop',
    ],
    buttonText: 'Subscribe Now',
  },
  {
    title: 'ADVANCED',
    price: '€549',
    description:
      'For photographers upgrading their quality and organizing larger projects.',
    features: [
      'Unlimited Events',
      'Unlimited Clients',
      'CRM (Client Management)',
      'Unlimited Gallery',
      'Image Tagging',
      'Download Selected Images',
      'Client Requests',
      'Digital Business Card',
      'Automatic Logo on Images',
      'Calendar Integration',
      'Live Event',
      'AI Face Recognition',
      'Live Video Streaming',
      'Digital Album',
      'Digital Contract',
      'Own Domain',
    ],
    unavailableFeatures: [
      'Branded App for iOS and Android',
      'Download All Images',
      'Videos and Reels',
      'Shop',
    ],
    buttonText: 'Subscribe Now',
    popular: true, // Add a tag for the most popular plan
  },
  {
    title: 'PREMIUM',
    price: '€849',
    description:
      'For professional photographers and businesses who want to stand out.',
    features: [
      'Up to 3 Events',
      'Up to 3 Clients',
      'CRM (Client Management)',
      'Unlimited Gallery',
      'Image Tagging',
      'Download Selected Images',
      'Client Requests',
      'Digital Business Card',
      'Automatic Logo on Images',
      'Calendar Integration',
      'Live Event',
      'AI Face Recognition',
      'Live Video Streaming',
      'Digital Album',
      'Digital Contract',
      'Own Domain',
      'Branded App for iOS and Android',
      'Download All Images',
      'Videos and Reels',
      'Shop',
    ],
    unavailableFeatures: [],
    buttonText: 'Subscribe Now',
  },
  {
    title: 'CUSTOM',
    price: '-',
    description: 'A customized plan tailored to your needs.',
    features: ['Contact us for a customized plan that fits your needs!'],
    unavailableFeatures: [],
    buttonText: 'Contact Us',
  },
];

const PricingTable = () => {
  return (
    <Box
      sx={{
        paddingTop: { xs: '40px', md: '40px' },
        paddingBottom: { xs: '40px', md: '40px' },
        paddingLeft: { xs: '40px', md: '200px' },
        paddingRight: { xs: '40px', md: '200px' },
        backgroundColor: '#fff',
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}
      >
        Pricing Plans
      </Typography>

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
              width: { xs: '100%', md: '22%' },
              maxWidth: { xs: '100%', md: '300px' },

              padding: '24px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              borderRadius: '10px',
              boxShadow: plan.popular
                ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                : '0 2px 10px rgba(0, 0, 0, 0.1)',
              border: plan.popular ? '2px solid #6aaad4' : 'none',
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', marginBottom: '10px' }}
            >
              {plan.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#6aaad4',
              }}
            >
              {plan.price}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: '20px' }}
            >
              {plan.description}
            </Typography>

            <Divider />

            <List>
              {plan.features.map((feature, featureIndex) => (
                <ListItem key={featureIndex}>
                  <ListItemText primary={`✅ ${feature}`} />
                </ListItem>
              ))}
              {plan.unavailableFeatures.map(
                (unavailableFeature, unavailableFeatureIndex) => (
                  <ListItem key={unavailableFeatureIndex}>
                    <ListItemText primary={`❌ ${unavailableFeature}`} />
                  </ListItem>
                )
              )}
            </List>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#6aaad4',
                color: '#fff',
                fontWeight: 'bold',
                padding: '10px 30px',
                textTransform: 'none',
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: '#5b99c3',
                },
                marginTop: '20px',
              }}
            >
              {plan.buttonText}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PricingTable;
