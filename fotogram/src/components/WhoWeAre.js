import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import wording from '../constants/wording';
import translate from '../helpers/translate';
import parse from 'html-react-parser';

const WhoWeAre = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '40px' }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        {translate(wording.whoAreWeTitel)}
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: '800px', margin: '0 auto', mb: 4, textAlign: 'left' }}
      >
        {parse(translate(wording.whoAreWeContent))}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: '24px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <Box
          component="img"
          src="/assets/Mario Netzer - Fotogram.png"
          alt="Fotogram Mario Netzer"
          sx={{
            height: { xs: '300px', md: '300px', lg: '300px' },
            borderRadius: '24px',
          }}
        />
        <Box>
          <Typography
            sx={{
              mb: 4,
              textAlign: 'left',
            }}
          >
            {parse(translate(wording.imageTitelTeamLead))}
          </Typography>
          <Typography
            sx={{
              mb: 4,
              textAlign: 'left',
              fontStyle: 'italic',
            }}
          >
            {parse(translate(wording.teamLeadQuote))}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}
      >
        {translate(wording.ourGoalsTitel)}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: '800px',
          margin: '0 auto',
          mt: 4,
          mb: 4,
          textAlign: 'left',
        }}
      >
        {parse(translate(wording.ourGoalsContent))}
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        {translate(wording.ourVisionTitel)}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: '800px',
          margin: '0 auto',
          mt: 4,
          mb: 4,
          textAlign: 'left',
        }}
      >
        {parse(translate(wording.ourVisionContent))}
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        {translate(wording.newIdeasTitel)}
      </Typography>

      <Typography
        variant="body1"
        sx={{ maxWidth: '800px', margin: '0 auto', mt: 4, textAlign: 'left' }}
      >
        {parse(translate(wording.newIdeasContent))}
      </Typography>
    </Box>
  );
};

export default WhoWeAre;
