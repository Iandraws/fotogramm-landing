import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TalkToSupport = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact-us');
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
      Talk to support
    </Button>
  );
};

export default TalkToSupport;
