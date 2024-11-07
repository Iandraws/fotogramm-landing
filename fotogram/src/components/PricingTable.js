// src/components/PricingTable.js
import React from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Divider,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { useNavigate } from 'react-router-dom';

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
    buttonText: 'Start 30 days For Free',
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
    buttonText: 'Start 30 days For Free',
    popular: true,
  },
  {
    title: 'PREMIUM',
    price: '€849',
    description:
      'For professional photographers and businesses who want to stand out.',
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
      'Branded App for iOS and Android',
      'Download All Images',
      'Videos and Reels',
      'Shop',
    ],
    unavailableFeatures: [],
    buttonText: 'Start 30 days For Free',
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
  const navigate = useNavigate();

  const handleSignUp = (planTitle) => {
    navigate(`/signup?plan=${planTitle.toLowerCase()}`);
  };

  const handleContact = () => {
    navigate('/ContactUs');
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
              width: { xs: '100%' },
              maxWidth: { xs: '100%', md: '220px' },
              minWidth: { md: '220px' },
              padding: '24px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              borderRadius: '10px',
              boxShadow: plan.popular
                ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                : '0 2px 10px rgba(0, 0, 0, 0.1)',
              border: plan.popular ? '2px solid #1976d2' : 'none',
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
              {plan.features.map((feature) => (
                <ListItem key={feature} style={{display: 'flex', alignItems:'center', gap: '8px'}}>
                  <CheckIcon sx={{ color: 'green' }} />
                  {feature}
                </ListItem>
              ))}
              {plan.unavailableFeatures.map((unavailableFeature) => (
                <ListItem key={unavailableFeature} style={{display: 'flex', alignItems:'center', gap: '8px'}}>
                  <CloseIcon sx={{ color: 'red' }} />
                  {unavailableFeature}
                </ListItem>
              ))}
            </List>

            <Button
              variant="contained"
              onClick={() =>
                plan.title === 'CUSTOM'
                  ? handleContact()
                  : handleSignUp(plan.title)
              }
              sx={{
                backgroundColor: '#6aaad4',
                color: '#fff',
                fontWeight: 'bold',
                padding: '8px 32px',
                textTransform: 'none',
                borderRadius: '24px',
                marginTop: '20px',
                '&:hover': {
                  backgroundColor: '#5b99c3',
                },
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
