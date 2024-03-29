import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useMediaQuery from '@mui/material/useMediaQuery';

import Challenge from './Challenge';

const completedCards = [
  { letter: 'B', delay: '100ms', background: true },
  { letter: 'O', delay: '200ms', background: true },
  { letter: 'U', delay: '300ms', background: true },
  { letter: 'L', delay: '400ms', background: true },
  { letter: 'D', delay: '500ms', background: true },
  { letter: 'E', delay: '600ms', background: true },
  { letter: 'R', delay: '700ms', background: true },
  { letter: ' ', delay: '800ms', background: false },
  { letter: ' ', delay: '900ms', background: false },
  { letter: 'B', delay: '1000ms', background: true },
  { letter: 'I', delay: '1100ms', background: true },
  { letter: 'N', delay: '1200ms', background: true },
  { letter: 'G', delay: '1300ms', background: true },
  { letter: 'O', delay: '1400ms', background: true },
  { letter: '!', delay: '1500ms', background: true },
  { letter: ' ', delay: '1600ms', background: false },
];

export default function BingoCard({ card, isReset, setIsReset, isBingo, checkBingo }) {
  const isPrintMode = useMediaQuery('print');

  return (
    <Box sx={{ flexGrow: 1, mt:3 }}>
      {isPrintMode &&
        <Typography variant="h3" gutterBottom>
          Boulder Bingo
        </Typography>
      }
      <Grid container spacing={ isPrintMode ? 0 : 1 }>
        {card.map((challenge, index) => (
          <Grid item key={challenge.id} xs={3}>
            <Challenge
              info={challenge}
              isReset={isReset}
              setIsReset={setIsReset}
              isBingo={isBingo}
              checkBingo={checkBingo}
              showIfBingo={completedCards[index]}
              index={index}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
