/*
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Challenge({ info }) {
  return (
    <Card sx={{height: "100%", display: "flex", alignItems: "center"}}>
      <CardContent>
        <Typography variant="body2">
          {info.content}
          <br />
          {info.type}
          <br />
          {info.isComplete && 'done'}
        </Typography>
      </CardContent>
    </Card>
  );
}
*/

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
    opacity: isComplete ? 0.2 : 1,
    height: '100%',
    display: 'flex', // Add flexbox for icon/text arrangement
    flexDirection: 'column', // Align items vertically
    backgroundColor: '#f5f5f5',
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
      return null; // No icon for other types or 'empty'
    }
  };

  return (
    <Card sx={{ height: '100%', boxShadow: 2 }}>
      <CardActionArea onClick={handleClick} style={cardStyle}>
        <CardContent>
          <Box mb={1}> {/* Add spacing before text */}
            {getIcon()}
          </Box>
          <Typography variant="body2">
            {info.content} ({info.type})
          </Typography>
        </CardContent>
        { isComplete && info.type !== 'empty' && (
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
              fontSize: 50, // Adjust X size as needed
              color: 'red',
            }}
          >
            X
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
}