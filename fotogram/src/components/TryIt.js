import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TryIt = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <Button
      variant="contained"
      sx={{
        fontWeight: 'bold',
        borderRadius: '24px',
        textTransform: 'none',
        padding: '8px 20px',
        boxShadow: 'none',
      }}
      onClick={() => handleSignUp()}
    >
      Start Your Free Trial
    </Button>
  );
};

export default TryIt;
