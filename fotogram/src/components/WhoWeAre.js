import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const WhoWeAre = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '40px' }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        Wer wir sind?
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: '800px', margin: '0 auto', mb: 4, textAlign: 'left' }}
      >
        Fotogram für Softwarelösungen ist ein Team aus Experten mit vielfältiger
        Erfahrung in den Bereichen Fotografie, Medienproduktion und Technologie.
        Gemeinsam entwickeln wir maßgeschneiderte Lösungen, die speziell für die
        Bedürfnisse von Fotografen und Studios ausgelegt sind. Unser Team ist
        spezialisiert auf Programmierung, Web- und App-Design, digitales
        Marketing und das Management von Softwareprodukten.
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', mb: 2 }}
      >
        Unsere Ziele:
      </Typography>
      <List sx={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <ListItem>
          <ListItemText primary="1. Die Weiterentwicklung und Verbesserung der Arbeit in der Fotografie- und Medienbranche." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Erleichterung der Arbeitsprozesse und Steigerung der Produktivität für Fotografen und Studioinhaber durch Zeit- und Kostenersparnis." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. Stärkung der Geschäftsbeziehungen von Fotografen durch positive Kundenerfahrungen und Eindrücke." />
        </ListItem>
        <ListItem>
          <ListItemText primary="4. Bereitstellung einer professionellen und organisierten Plattform zur Verwaltung von Workflows und Kundendetails, individuell angepasst an die Bedürfnisse jedes Fotografen oder Studios." />
        </ListItem>
      </List>

      <Typography
        variant="body1"
        sx={{ maxWidth: '800px', margin: '0 auto', mt: 4, textAlign: 'left' }}
      >
        Wir arbeiten daran, mit den neuesten technologischen Innovationen
        Schritt zu halten und sind überzeugt, dass unsere Anwendungen und
        Funktionen für Fotografen und Studios ein entscheidender Faktor für den
        Erfolg sind. Sie helfen, sich von der Konkurrenz abzuheben und den
        eigenen Stil eindrucksvoll zu präsentieren.
      </Typography>
    </Box>
  );
};

export default WhoWeAre;
