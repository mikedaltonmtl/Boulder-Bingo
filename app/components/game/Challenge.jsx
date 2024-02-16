import * as React from 'react';
import { Typography, Card, CardContent, CardActionArea, Box } from '@mui/material';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';

export default function Challenge({ info }) {
  const [isComplete, setIsComplete] = React.useState(info.type === 'empty' || info.isComplete);

  const handleClick = () => {
    if (info.type !== 'empty') {
      setIsComplete(!isComplete);
    }
  };

  const cardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    position: 'relative', // Add for X positioning
  };
  
  const getIcon = () => {

    const firstWord = info.content.split(' ')[0];
    const iconColor = firstWord.toLowerCase() === 'white' ? 'black' : firstWord.toLowerCase();

    switch (info.type) {
    case 'colour':
      return <ColorLensOutlinedIcon style={{ color: iconColor }} />;
    case 'intros':
      return <YardOutlinedIcon style={{ color: 'green' }} />;
    case 'exercise':
      return <FitnessCenterOutlinedIcon style={{ color: 'red' }} />;
    case 'climb':
      return <SportsHandballOutlinedIcon style={{ color: 'purple' }} />;
    default:
      return null;
    }
  };

  return (
    <Card sx={{ height: '120px', boxShadow: 2, position: 'relative', backgroundColor: '#f5f5f5' }}>
      { info.type !== 'empty' && (
        <CardActionArea onClick={handleClick} style={cardStyle}>
          <CardContent sx={{ opacity: isComplete ? 0.2 : 1 }}>
            <Box mb={1}>
              {getIcon()}
            </Box>
            <Typography variant="body2">
              {info.content}
            </Typography>
          </CardContent>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 150, // Adjust X size as needed
              fontWeight: 'bold',
              color: 'red',
              opacity: isComplete ? 1 : 0,
              transition: 'opacity 1s ease',
            }}
          >
            X
          </Box>
        </CardActionArea>
      )}
    </Card>
  );
}