import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TalkToSupport = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/get-in-touch');
  };

  return (
    <Button
      variant="outlined"
      sx={{
        fontWeight: 'bold',
        borderRadius: '24px',
        textTransform: 'none',
        padding: '8px 20px',
        boxShadow: 'none',
      }}
      onClick={() => handleClick()}
    >
      Get in Touch
    </Button>
  );
};

export default TalkToSupport;
