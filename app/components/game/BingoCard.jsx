import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Challenge from './Challenge';


export default function BingoCard({ card, isReset, setIsReset }) {
  return (
    <Box sx={{ flexGrow: 1, mt:3 }}>
      <Grid container spacing={1}>
        {card.map(challenge => (
          <Grid item key={challenge.id} xs={3}>
            <Challenge info={challenge} isReset={isReset} setIsReset={setIsReset} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
