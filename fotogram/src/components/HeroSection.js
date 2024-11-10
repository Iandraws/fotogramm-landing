// src/components/HeroSection.js
import CheckIcon from '@mui/icons-material/Check';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import AutoCarousel from './AutoCarousel';
import PowerfulFeaturesSection from './PowerfulFeaturesSection';
import TryIt from './TryIt';
import TalkToSupport from './TalkToSupport';

const HeroSection = () => {
  return (
    <>
      <Box
        variant="contained"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingTop: { xs: '20px', md: '40px' },
          paddingBottom: { xs: '20px', md: '120px' },
          paddingLeft: { xs: '20px', md: '40px', lg: '160px', xl: '200px' },
          paddingRight: { xs: '20px', md: '0px', lg: '160px', xl: '200px' },
        }}
      >
        {/* Left side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { xs: '10px', md: '40px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              mb: 3,
            }}
          >
            Premium Plattform für Effizienz, Branding und Kundenerlebnis
          </Typography>

          {/* Feature List */}
          <List>
            <ListItem key="feature-1">
              <ListItemIcon>
                <CheckIcon sx={{ color: '#1976d2' }} />
              </ListItemIcon>
              <ListItemText primary="Automatisieren Sie Workflows und sparen Sie Zeit" />
            </ListItem>
            <ListItem key="feature-2">
              <ListItemIcon>
                <CheckIcon sx={{ color: '#1976d2' }} />
              </ListItemIcon>
              <ListItemText primary="Bieten Sie Echtzeit Bildübertragung und KI-Gesichtserkennung" />
            </ListItem>
            <ListItem key="feature-3">
              <ListItemIcon>
                <CheckIcon sx={{ color: '#1976d2' }} />
              </ListItemIcon>
              <ListItemText primary="Präsentieren Sie Ihre Marke mit personalisierten Wasserzeichen und Alben" />
            </ListItem>
          </List>

          <Box style={{ display: 'flex', gap: '16px' }}>
            <TryIt />

            <TalkToSupport />
          </Box>
        </Box>

        {/* Right side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '20px', md: '0' },
          }}
        >
          <img
            src="/assets/1.webp"
            alt="Hero placeholder"
            style={{
              width: '100%',
              maxWidth: '700px',
              borderRadius: '24px',
            }}
          />
        </Box>
      </Box>

      {/* Second Section: Was Fotogram Ihnen bietet */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          paddingTop: { xs: '24px', md: '120px' },
          paddingBottom: { xs: '24px', md: '120px' },
          paddingLeft: { xs: '20px', md: '24px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '20px', md: '40px', lg: '100px', xl: '200px' },
          backgroundColor: '#5c524c',
        }}
      >
        {/* Right side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { xs: '10px', md: '40px' },
            color: '#fff',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            Was Fotogram Ihnen bietet
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              mb: 2,
            }}
          >
            <strong>All-in-One Kundenmanagement:</strong> Verwalten Sie Kunden und Aufträge an einem zentralen Ort für nahtlose Kommunikation.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              mb: 2,
            }}
          >
            <strong>Schnelle Bildlieferung und Live-Erlebnisse:</strong> Teilen Sie Eventbilder in Echtzeit und lassen Sie Ihre Kunden sofort darauf zugreifen.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              mb: 2,
            }}
          >
            <strong>Vereinfachte Vertragsabwicklung:</strong> Erstellen, teilen und unterschreiben Sie Verträge digital – effizient und papierlos.
          </Typography>


          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              mb: 4,
            }}
          >
            <strong>Digitaler Shop für Zusatzverkäufe:</strong> Bieten Sie Druckservices und Produkte direkt über die Plattform an, mit integriertem Bezahlsystem.
          </Typography>

          <TryIt />
        </Box>

        {/* Left side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '20px', md: '0' },
            overflow: 'hidden',
          }}
        >
          <img
            src="/assets/dashboard.png"
            alt="Placeholder"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Box>

      <PowerfulFeaturesSection />

      {/* Built by Creatives Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: { xs: '20px', md: '120px' },
          paddingBottom: { xs: '20px', md: '120px' },
          paddingLeft: { xs: '20px', md: '48px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '20px', md: '56px', lg: '100px', xl: '200px' },
          backgroundColor: '#5c524c',
        }}
      >
        {/* Left side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '20px', md: '0' },
            overflow: 'hidden',
          }}
        >
          <img
            src="/assets/7.jpeg"
            alt="Entwickelt von Profis für Profis"
            style={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: '10px',
            }}
          />
        </Box>

        {/* Right side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { xs: '20px', md: '40px' },
            textAlign: { xs: 'center', md: 'left' },
            color: '#fff',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              mb: 2,
            }}
          >
            Built by creatives for creatives
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              mb: 2,
            }}
          >
            Fotogram wurde von eine erfahrenen Fotografen und kreativen Designer ins Leben gerufen. 
            Wir verstehen die Herausforderungen der Branche, weil wir selbst Teil davon sind. 
            Unsere Mission ist es, genau die Tools zu entwickeln, die Fotografen benötigen, 
            um effizienter zu arbeiten, ihre Marke zu stärken und ihren Kunden ein unvergleichbares Erlebnis zu bieten. 
            Bei Fotogram setzen wir auf praxisnahe Lösungen, die Ihre Arbeit einfacher und professioneller machen.
          </Typography>

          <TryIt />
        </Box>
      </Box>
      <AutoCarousel />
    </>
  );
};

export default HeroSection;
