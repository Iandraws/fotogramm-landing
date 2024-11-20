import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import wording from '../constants/wording';
import translate from '../helpers/translate';

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
        flex: '1 !important',
        width: { xs: '100%', md: 'auto' },
        boxShadow: 'none',
        whiteSpace: 'nowrap',
      }}
      onClick={() => handleSignUp()}
    >
      {translate(wording.tryIt)}
    </Button>
  );
};

export default TryIt;
