// src/components/WhoWeAre.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const WhoWeAre = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '40px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4a8bb3', mb: 4 }}>
        Who We Are?
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto', mb: 4 }}>
        Fotogram for Technological Solutions is a team with diverse experience in various fields,
        working together to create technological solutions in the photography, production, and media sectors.
        Through designing tailored applications for every photographer or studio, we specialize in programming,
        web design, applications, digital marketing, and managing technology products.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Our Goals:
      </Typography>
      <List sx={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <ListItem>
          <ListItemText primary="1. Developing and enhancing the field of work in photography and media in the market." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Facilitating work and increasing productivity for photographers or studio owners by reducing time and costs." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. Strengthening commercial relationships for photographers and studio owners by gaining positive impressions from clients." />
        </ListItem>
        <ListItem>
          <ListItemText primary="4. Providing photographers with a professional and organized way to manage their workflow and details through a platform specifically designed to meet the needs of each photographer or studio." />
        </ListItem>
      </List>

      <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto', mt: 4 }}>
        We strive diligently to keep up with the latest innovations in the field of technology and believe
        that having applications tailored specifically for every photographer or studio plays a significant
        role in achieving success, setting you apart from competitors, and reflecting your unique style.
      </Typography>
    </Box>
  );
};

export default WhoWeAre;
