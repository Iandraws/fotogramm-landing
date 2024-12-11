import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import parse from 'html-react-parser';
import React from 'react';
import wording from '../constants/wording';
import translate from '../helpers/translate';

const Help = () => {
  return (
    <Box
      sx={{
        padding: { xs: '16px', md: '40px' },
        textAlign: 'center',
        marginBottom: 'auto',
      }}
    >
      {/* Header Section */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', mb: 2 }}
      >
        {translate(wording.faqsTitel)}
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 2 }}
      >
        {parse(translate(wording.faqsDescription))}
      </Typography>

      {/* FAQ Section */}
      <Typography
        variant="h4"
        sx={{ mt: 4, mb: 2 }}
      >
        {translate(wording.faqsPreQuestions)}
      </Typography>

      <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ textAlign: 'left', fontWeight: 700 }}>
              {translate(wording.question1)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ textAlign: 'left' }}>
              {translate(wording.answer1)}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ textAlign: 'left', fontWeight: 700 }}>
              {translate(wording.question2)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ textAlign: 'left' }}>
              {translate(wording.answer2)}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ textAlign: 'left', fontWeight: 700 }}>
              {translate(wording.question3)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ textAlign: 'left' }}>
              {translate(wording.answer3)}
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ: Contract terms and notice periods */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ textAlign: 'left', fontWeight: 700 }}>
              {translate(wording.question4)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ textAlign: 'left' }}>
              {parse(translate(wording.answer4))}
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ: What happens in the event of termination */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ textAlign: 'left', fontWeight: 700 }}>
              {translate(wording.question5)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ textAlign: 'left' }}>
              {translate(wording.answer5)}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ textAlign: 'left', fontWeight: 700 }}>
              {translate(wording.question6)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ textAlign: 'left' }}>
              {translate(wording.answer6)}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ textAlign: 'left', fontWeight: 700 }}>
              {translate(wording.question7)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ textAlign: 'left' }}>
              {translate(wording.answer7)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Help;
