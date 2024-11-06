import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle routing

const sections = [
  {
    title: "Share gallery link with your clients",
    description: "To give access to any gallery you simply share a secure link via email, messenger or however you want. Of course you can even double-protect galleries with passwords.",
    image: "/assets/funk/shareGalleryImage.mp4",
  },
  {
    title: "Built for simplicity",
    description: "Picdrop is built with 100% your client in mind. There is no installation needed, no logins required and no learning curve.",
    image: "/assets/funk/simplicityImage.jpg",
  },
  {
    title: "Presentation Mode: Show & deliver to clients",
    description: "For simple and beautiful presentation of your files just activate the presentation mode. Don’t forget to customize the look in the gallery’s settings so your work looks great!",
    image: "/assets/funk/presentationModeImage.png",
  },
  {
    title: "Edit Mode: Collaborate with clients",
    description: "With picdrop the hassle of picking the client’s favorites and creating selections ends. Your clients can use our simple proofing tools such as the color marker or likes to select their favorite images and videos.",
    image: "/assets/funk/editModeImage.jpg",
  },
  {
    title: "Super easy color markers",
    description: "Our intuitive color flags make it super easy for your clients to find and select their favorite shots. They will love it!",
    image: "/assets/funk/colorMarkersImage.mp4",
  },
  {
    title: "Likes & Voting",
    description: "You need to agree on a final selection of images within your team members? Let everyone involved like their favorites with one click and magically sort the images by number of likes! We call it 'voting' and it’s child’s play.",
    image: "/assets/funk/votingImage.mp4",
  },
  // Add more sections as needed...
];

const FunktionPage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSignUp = () => {
      navigate('/signup'); // Navigate to the /signup route when the button is clicked
    };

  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>
        Why Fotogram
      </Typography>

      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '60px',
            textAlign: 'center',
            gap: '20px',
          }}
        >
          <Box sx={{ maxWidth: '600px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              {section.title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              {section.description}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '100%' }}>
            {section.image.endsWith('.mp4') ? (
              <video
                src={section.image}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }}
              />
            ) : (
              <img
                src={section.image}
                alt={section.title}
                style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }}
              />
            )}
          </Box>
        </Box>
      ))}

      {/* Final Call-to-Action Section */}
      <Box sx={{ backgroundColor: '#f0f0f0', padding: '60px 20px', marginTop: '60px', textAlign: 'center' }}>
        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Start today!
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '30px', color: '#555' }}>
            First month, no limits, is on us. Afterwards you can keep our free plan forever or upgrade anytime. No automatic subscription. You decide.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#6aaad4',
              color: '#000',
              fontWeight: 'bold',
              borderRadius: '20px',
              padding: '10px 30px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#6aaad4',
              },
            }}
            onClick={handleSignUp}
          >
            Sign up - it's free
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FunktionPage;
