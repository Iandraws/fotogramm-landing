// src/components/PowerfulFeaturesSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const PowerfulFeaturesSection = () => {
  return (
    <>
      {/* Powerful Features Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingTop: { xs: '20px', md: '200px' },
          paddingBottom: { xs: '20px', md: '80px' },
          paddingLeft: { xs: '20px', md: '80px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '20px', md: '40px', lg: '100px', xl: '200px' },
        }}
      >
        {/* Left side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingRight: { xs: '20px', md: '40px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 3,
            }}
          >
            Echtzeit-Bildübertragung und Live-Event-Sharing
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            Teilen Sie den Moment ohne Verzögerung
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Teilen Sie Eventbilder sofort mit Ihren Kunden. Dank der Echtzeit-Übertragung 
            können Gäste die Fotos direkt auf ihr Gerät herunterladen, teilen oder für den Druck auswählen.
            Diese Funktion schafft ein unvergessliches Erlebnis und hebt Ihre Dienstleistungen deutlich hervor.
          </Typography>
        </Box>

        {/* Right side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: '20px', md: '40px' },
          }}
        >
          <img
            src="/assets/4.png"
            alt="Powerful features"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Box>

      {/* Beautiful Presentation Mode Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: { xs: '20px', md: '80px' },
          paddingBottom: { xs: '20px', md: '80px' },
          paddingLeft: { xs: '20px', md: '48px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '20px', md: '56px', lg: '100px', xl: '200px' },
          backgroundColor: '#fff',
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
          }}
        >
          <img
            src="/assets/5.png"
            alt="Beautiful presentation mode"
            style={{
              width: '100%',
              maxWidth: '500px',
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
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 3,
            }}
          >
            KI-gestützte Gesichtserkennung
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Machen Sie es Ihren Kunden leicht, ihre persönlichen Bilder zu finden. 
            Mit unserer innovativen Gesichtserkennungstechnologie reicht ein Selfie, 
            um passende Bilder schnell und präzise anzeigen zu lassen. 
            Ein modernes Feature, das Komfort und Individualisierung vereint.
          </Typography>
        </Box>
      </Box>

      {/* Massive Time Saver Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: { xs: '20px', md: '80px' },
          paddingBottom: { xs: '20px', md: '200px' },
          paddingLeft: { xs: '20px', md: '80px', lg: '100px', xl: '200px' },
          paddingRight: { xs: '20px', md: '80px', lg: '100px', xl: '200px' },
          backgroundColor: '#fff',
        }}
      >
        {/* Left side: Text */}
        <Box
          sx={{
            flex: 1,
            paddingRight: { xs: '20px', md: '40px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 3,
            }}
          >
            Personalisierte Wasserzeichen
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 2 }}
          >
           Mit Fotogram bleibt Ihre Marke stets präsent. 
           Das Logo des Fotografen wird automatisch auf allen hochgeladenen Bildern als Wasserzeichen platziert – 
           ohne die Notwendigkeit externer Software. Diese Funktion schützt Ihre Bildrechte, 
           stärkt Ihr Branding und spart Ihnen Zeit bei der Nachbearbeitung. 
           So präsentieren Sie Ihre Arbeit professionell und einheitlich, während Sie gleichzeitig sicherstellen, 
           dass Ihr Logo immer mit Ihren Bildern verbunden ist.
          </Typography>
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
            src="/assets/6.png"
            alt="Massive time saver"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default PowerfulFeaturesSection;
