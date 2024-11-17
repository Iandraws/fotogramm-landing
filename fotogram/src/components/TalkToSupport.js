import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import translate from '../helpers/translate';
import wording from '../constants/wording';

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
        padding: { xs: '8px 12px', md: '8px 20px' },
        boxShadow: 'none',
        whiteSpace: 'nowrap',
      }}
      onClick={() => handleClick()}
    >
      {translate(wording.talkToSupport)}
    </Button>
  );
};

export default TalkToSupport;
