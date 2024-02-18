import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';


import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';

export default function Challenge({ info, isReset, setIsReset, isBingo, checkBingo, showIfBingo }) {
  const [isComplete, setIsComplete] = React.useState(info.type === 'empty' || info.isComplete);
  const [goBingo, setGoBingo] = React.useState(isBingo);

  // Listener for Bingo
  React.useEffect(() => {
    setGoBingo(isBingo);
  }, [isBingo]);

  // Force the card to re-render when user restarts
  React.useEffect(() => {
    if (isReset) {
      setIsReset(false);
    }
    if (info.type !== 'empty') {
      setIsComplete(false);
    }
  }, [isReset, setIsReset, info.type]);

  const handleClick = () => {
    if (info.type !== 'empty') {
      checkBingo(info.id, !isComplete);
      setIsComplete(!isComplete);
    }
  };

  const cardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    position: 'relative', // Added for X positioning
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
    <>
      { goBingo
        ?
        <Zoom in={goBingo} style={{ transitionDelay: `${showIfBingo.delay}` }}>
          <Card sx={{ height: '100%', minHeight: '100px', boxShadow: 2, backgroundColor: showIfBingo.background ? '#42a5f5' : '#f5f5f5' }}>
            <CardActionArea onClick={handleClick} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CardContent>
                <Box sx={{ fontSize: 50, fontWeight: 'bold', color: '#f5f5f5', width: '100%' }}>
                  {showIfBingo.letter}
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Zoom>
        :
        // <Zoom in={!goBingo} style={{ transitionDelay: `${showIfBingo.delay}` }}>
        <Card sx={{ height: '100%', minHeight: '100px', boxShadow: 2, position: 'relative', backgroundColor: '#f5f5f5' }}>
          { info.type !== 'empty' && (
            <CardActionArea onClick={handleClick} style={cardStyle}>
              <CardContent sx={{ opacity: isComplete ? 0.2 : 1 }}>
                <Box mb={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  {getIcon()}
                  <Typography variant="body1" component="span">
                    {info.type === 'exercise' && info.content.split(' ')[0]}
                  </Typography>
                </Box>
                <Typography variant="body2">
                  {info.type === 'exercise' ? info.content.split(' ').slice(1).join(' ') : info.content}
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
                  fontSize: 100,
                  fontWeight: 'bold',
                  color: '#ef5350',
                  opacity: isComplete ? 1 : 0,
                  transition: 'opacity 1s ease',
                }}
              >
                  X
              </Box>
            </CardActionArea>
          )}
        </Card>
        // </Zoom>
      }
    </>
  );
}