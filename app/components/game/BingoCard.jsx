import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Challenge from './Challenge';


export default function BingoCard({ card }) {
  return (
    <Box sx={{ flexGrow: 1, mt:4 }}>
      <Grid container spacing={2}>
        {card.map(challenge => (
          <Grid item key={challenge.id} xs={3}>
            <Challenge info={challenge} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
