import * as React from 'react';
import { motion } from "framer-motion";

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import useMediaQuery from '@mui/material/useMediaQuery';

import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';


export default function Challenge({ info, isReset, setIsReset, isBingo, checkBingo, showIfBingo, index }) {
  const isPrintMode = useMediaQuery('print');
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
        <motion.div
          initial={{ opacity: 0.5, scale: 0, rotateZ: 180 }}
          animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.1, ease: "easeIn" }}
        >
          <Card sx={{
            height: '100%', minHeight: '100px', paddingX: '6px', paddingY: '3px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '2 #fff', borderRadius: 1,
            backgroundColor: showIfBingo.background ? '#42a5f5' : '#f5f5f5',
          }}>
            <CardActionArea onClick={handleClick} sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: 1, borderColor: '#f5f5f5',
            }}>
              <CardContent>
                <Box sx={{ fontSize: 50, fontWeight: 'bold', color: '#f5f5f5', }}>
                  {showIfBingo.letter}
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </motion.div>
        :
        <Zoom in={!goBingo} style={{ transitionDelay: `${showIfBingo.delay}` }}>
          <Card sx={{
            height: '100%', minHeight: '100px', position: 'relative',
            boxShadow: isPrintMode ? 0 : 2,
            backgroundColor: isPrintMode ? 'none' : '#f5f5f5',
            border: isPrintMode ? '1px solid black' : 'none',
            borderRadius: isPrintMode && 0,
          }}>
            { info.type !== 'empty' && (
              <CardActionArea onClick={handleClick} sx={{
                height: '100%',
                display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start',
                position: 'relative', // Added for X positioning
              }}>
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
                <Box sx={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 100, fontWeight: 'bold', color: '#ef5350',
                  opacity: isComplete ? 1 : 0, transition: 'opacity 1s ease',
                }}>
                  X
                </Box>
              </CardActionArea>
            )}
          </Card>
        </Zoom>
      }
    </>
  );
}