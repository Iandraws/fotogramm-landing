// src/components/Help.js
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Help = () => {
  return (
    <Box sx={{ padding: { xs: '20px', md: '40px' }, textAlign: 'center' }}>
      {/* Header Section */}
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        We are there for you.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Got questions about fotogram? Cool!
        <br />
        Feel free to contact our support team at{' '}
        <Link href="mailto:hello@fotogram.com" sx={{ color: '#ff0000', fontWeight: 'bold' }}>
          hello@fotogram.com
        </Link>
        .
        <br />
        If possible, please check our FAQ before contacting us. Also, writing from the email address you used at
        signup makes things much easier. We are happy to help you!
      </Typography>

      {/* FAQ Section */}
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Most asked questions
      </Typography>

      <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How do I create a new gallery?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To create a new gallery, go to the dashboard and click on the "Create New Gallery" button. Follow the
              steps to upload images.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How to upload my first files?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can upload your first files by clicking on "Upload" in the gallery view. Drag and drop your images
              or browse them from your computer.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How do my clients get to their galleries? Do they need an account?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, your clients don’t need an account to view galleries. They will receive a shareable link via email
              or a direct link that you can provide.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ: Contract terms and notice periods */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Are there minimum contract terms or periods of notice?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We'll make it easy for you: If you pay monthly, you can also cancel monthly. (Monthly payments are 
              possible in our Lite, Pro, and Business plans.) If you take advantage of the semi-annual payment, 
              you can cancel semi-annually. This means that you can cancel an annual payment with all its benefits 
              every year.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>What does termination mean?</strong> Termination means that your contract will not automatically 
              be renewed for the same period at the end of the current billing period. In the event of termination, 
              the current billing period can, of course, be used in full until the end. A proportional repayment of 
              the current billing period is not possible.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ: What happens in the event of termination */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What happens in the event of termination?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your account will be automatically reduced to the free plan at the end of the current, already paid 
              billing period. All your galleries and files will of course remain. Existing galleries and files that 
              exceed the maximum of 3 galleries or the 1 GB storage of the free plan are no longer available for 
              third parties and cannot be downloaded anymore.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* New FAQ: Forgot password */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>I forgot my password. What should I do?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Not to worry, we all know that... Below the login form on your account page, just click on 
              "Forgot password?" and have a new password sent to you.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Doesn't work either?</strong> Write us an email at{' '}
              <Link href="mailto:hello@fotogram.com" sx={{ fontWeight: 'bold', color: '#ff0000' }}>
                hello@fotogram.com
              </Link>{' '}
              and we will take care of it.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Add more FAQ items as needed */}
      </Box>
    </Box>
  );
};

export default Help;
