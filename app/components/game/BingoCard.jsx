import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Challenge from './Challenge';

const completedCards = [
  { letter: 'B', delay: '100ms' },
  { letter: 'O', delay: '200ms' },
  { letter: 'U', delay: '300ms' },
  { letter: 'L', delay: '400ms' },
  { letter: 'D', delay: '500ms' },
  { letter: 'E', delay: '600ms' },
  { letter: 'R', delay: '700ms' },
  { letter: '-', delay: '800ms' },
  { letter: 'B', delay: '900ms' },
  { letter: 'I', delay: '1000ms' },
  { letter: 'N', delay: '1100ms' },
  { letter: '-', delay: '1200ms' },
  { letter: 'G', delay: '1300ms' },
  { letter: 'O', delay: '1400ms' },
  { letter: '!', delay: '1500ms' },
  { letter: ':D', delay: '1600ms' },
];

export default function BingoCard({ card, isReset, setIsReset, isBingo, checkBingo }) {
  return (
    <Box sx={{ flexGrow: 1, mt:3 }}>
      <Grid container spacing={1}>
        {card.map((challenge, index) => (
          <Grid item key={challenge.id} xs={3}>
            <Challenge
              info={challenge}
              isReset={isReset}
              setIsReset={setIsReset}
              isBingo={isBingo}
              checkBingo={checkBingo}
              showIfBingo={completedCards[index]}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
