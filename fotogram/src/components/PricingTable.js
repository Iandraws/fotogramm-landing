import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
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
import Tooltip from '@mui/material/Tooltip';
import parse from 'html-react-parser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wording from '../constants/wording';
import translate from '../helpers/translate';

const plans = [
  {
    isBusiness: true,
    title: wording.lite,
    package: 'lite',
    monthlyPrice: (0).toFixed(2),
    yearlyPrice: (0 * 12 * 0.8).toFixed(2),
    oldMonthlyPrice: null,
    description: wording.liteDesc,
    prefix: wording.liteIncludes,
    features: [
      wording.limitedEvents,
      wording.limitedClients,
      wording.storage10GB,
      wording.teamMembers1,
      wording.comprehensiveDashboard,
      wording.crm,
      wording.imageTagging,
      wording.downloadSelectedImages,
      wording.clientRequests,
      wording.digitalBusinessCard,
      wording.calendarIntegration,
      wording.liveEvent,
      wording.aiFaceRecognition,
      wording.screenshot,
      wording.liveVideoStreaming,
      wording.digitalAlbum,
      wording.digitalContract,
    ],
    unavailableFeatures: [
      // wording.customDomain,
      // wording.customBrand,
      // wording.downloadAllImages,
      // wording.videosAndReels,
      // wording.shop,
    ],
    buttonText: wording.freeTrial,
    hints: {
      [wording.autoLogoOnImages.en]: wording.autoLogoHint,
    },
  },
  {
    isBusiness: true,
    package: 'pro',
    title: wording.pro,
    monthlyPrice: 19.99,
    yearlyPrice: (19.99 * 12 * 0.8).toFixed(2),
    // oldMonthlyPrice: 24.99,
    oldMonthlyPrice: null,
    description: wording.proDesc,
    features: [
      wording.unlimitedEvents,
      wording.unlimitedClients,
      wording.storage500GB,
      wording.downloadAllImages,
      wording.autoLogoOnImages,
      wording.ftp,
      wording.iptc,
      wording.registerform,
      wording.iosAndroidBrandedApp,
      wording.videosAndReels,
    ],
    prefix: wording.allFromLite,
    unavailableFeatures: [
      // wording.customDomain,
      // wording.customBrand,
      // wording.downloadAllImages,
      // wording.videosAndReels,
      // wording.shop,
    ],
    buttonText: wording.freeTrial,
    hints: {
      [wording.storage500GB.en]: wording.storage500GBHint,
      [wording.autoLogoOnImages.en]: wording.autoLogoHint,
    },
  },
  {
    isBusiness: true,
    package: 'business',
    title: wording.business,
    monthlyPrice: 99.99,
    yearlyPrice: (99.99 * 12 * 0.8).toFixed(2),
    // oldMonthlyPrice: 89.99,
    oldMonthlyPrice: null,

    description: wording.businessDesc,
    prefix: wording.allFromPro,
    features: [
      wording.storage2TB,
      wording.teamMembers3,
      wording.customDomain,
      wording.customBrand,
      wording.smarttag,
      wording.shop,
    ],
    unavailableFeatures: [],
    buttonText: wording.freeTrial,
    hints: {
      [wording.storage2TB.en]: wording.storage500GBHint,
      [wording.teamMembers3.en]: wording.teamMembers3Hint,
      [wording.videosAndReels.en]: wording.videosAndReelsHint,
    },
  },
  {
    package: 'private',
    isBusiness: false,
    title: wording.privateUse,
    monthlyPrice: 4.99,
    yearlyPrice: (4.99 * 12 * 0.8).toFixed(2),
    description: wording.privateUseDesc,
    features: [
      wording.comprehensiveDashboard,
      wording.unlimitedEvents,
      wording.storage20GB,
      wording.privateMember,
      wording.imageTagging,
      wording.downloadSelectedImages,
      wording.liveEvent,
      wording.aiFaceRecognition,
      wording.digitalAlbum,
    ],
    unavailableFeatures: [],
    buttonText: wording.freeTrial,
    hints: {},
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
    hints: {},
  },
];

const PricingTable = ({
  showContent = true,
  selected = 'advanced',
  showButtons = true,
  business = true,
  yearly = true,
  showCustom = true,
  choosePrivate = false,
  onSelect,
}) => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(yearly);
  const [isBusiness, setIsBusiness] = useState(business);
  const [selectedPackage, setSelectedPackage] = useState(selected);

  const handlePlanSelection = (plan) => {
    if (plan.customized) {
      navigate('/get-in-touch');
      return;
    }

    if (plan.isBusiness === false) {
      navigate(`/join-hub`);
      return;
    }

    navigate(`/signup?plan=${plan.package}&yearly=${isYearly}`);
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
        sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '48px' }}
      >
        {translate(wording.plans)}
      </Typography>

      {choosePrivate && (
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
              {' '}
              {translate(wording.private)}
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
              {' '}
              {translate(wording.business)}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      )}

      {/* Toggle für Monatlich/Jährlich */}
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          marginBottom: '48px',
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
          {parse(translate(wording.monthlyPayment))}
        </Typography>
        <Switch checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
        <Typography
          variant="body1"
          sx={{ color: isYearly ? '#1976d2' : '#757575', fontWeight: 'bold' }}
        >
          {' '}
          {parse(translate(wording.yearlyPayment))}
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
          .filter(
            (plan) =>
              plan.isBusiness === isBusiness &&
              (showCustom === false ? !plan.customized : true)
          )
          .map((plan, index) => (
            <Box
              onClick={() => {
                setSelectedPackage(plan.package);
                onSelect && onSelect(plan);
              }}
              key={index}
              sx={{
                ':hover': { cursor: 'pointer' },
                height: 'fit-content',
                width: { xs: '100%' },
                maxWidth: { xs: '100%', md: '300px' },
                minWidth: { md: '300px' },
                padding: '24px 12px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                borderRadius: '10px',
                boxShadow:
                  plan.package === selectedPackage
                    ? 'inset 0px 0px 6px 3px #1976d2'
                    : '0 2px 10px rgba(0, 0, 0, 0.1)',
                position: 'relative',
              }}
            >
              {plan.package === selectedPackage && !plan.customized && (
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

              {
                <>
                  <Typography
                    variant="h6"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      visibility: plan.customized ? 'hidden' : 'visible',
                      fontWeight: 'bold',
                      color: '#1976d2',
                    }}
                  >
                    {plan.oldMonthlyPrice != null && (
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: '20px',
                          color: '#cc0c39',
                          textDecoration: 'line-through',
                        }}
                      >
                        {(plan.oldMonthlyPrice ?? 1).toFixed(2)} €
                      </Typography>
                    )}
                    {isYearly
                      ? `${(plan.yearlyPrice / 12).toFixed(2)} €`
                      : `${plan.monthlyPrice} €`}
                    {' / '} {translate(wording.month)}
                  </Typography>
                  {isYearly && (
                    <Typography
                      variant="body2"
                      sx={{
                        visibility: plan.customized ? 'hidden' : 'visible',
                        color: '#757575',
                        marginBottom: '10px',
                      }}
                    >
                      {`${plan.yearlyPrice} € /`} {translate(wording.year)}
                    </Typography>
                  )}
                  <Typography
                    variant="body2"
                    sx={{
                      visibility: plan.customized ? 'hidden' : 'visible',
                      color: '#757575',
                      marginBottom: '10px',
                    }}
                  >
                    {translate(wording.vat)}
                  </Typography>
                </>
              }

              <Typography variant="body2" sx={{ marginBottom: '48px' }}>
                {translate(plan.description)}
              </Typography>
              {showContent && <Divider />}
              {showContent && plan.prefix && (
                <Typography
                  variant="body2"
                  sx={{
                    visibility: plan.customized ? 'hidden' : 'visible',
                    color: '#757575',
                    marginTop: '24px',
                    marginBottom: '8px',
                    paddingLeft: '16px',
                    textAlign: 'left',
                  }}
                >
                  {parse(translate(plan.prefix))}
                </Typography>
              )}
              {showContent && (
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
                      {!plan.customized && (
                        <CheckIcon sx={{ color: 'green' }} />
                      )}
                      {translate(feature)}
                      {plan.hints[feature.en] && (
                        <Tooltip
                          title={translate(plan.hints[feature.en])}
                          arrow
                          placement="top"
                        >
                          <InfoIcon
                            sx={{
                              marginLeft: 'auto',
                              color: '#1565c0',
                              cursor: 'pointer',
                            }}
                          />
                        </Tooltip>
                      )}
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
                      {plan.hints[unavailableFeature.en] && (
                        <Tooltip
                          title={translate(plan.hints[unavailableFeature.en])}
                          arrow
                          placement="top"
                        >
                          <InfoIcon
                            sx={{
                              marginLeft: 'auto',
                              color: '#1565c0',
                              cursor: 'pointer',
                            }}
                          />
                        </Tooltip>
                      )}
                    </ListItem>
                  ))}
                </List>
              )}

              {showButtons && (
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
              )}
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default PricingTable;
