import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Challenge from './Challenge';

import { useSelector } from 'react-redux';

export default function BingoCard() {
  const [hydrated, setHydrated] = React.useState(false);
  const card = useSelector(state => state.settingsReducer.value.card);

  console.log('bingo card', card);

  React.useEffect(() => {
    setHydrated(true);
  },[]);

  return (
    <>
      {hydrated && <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {card.map((challenge, index) => (
            <Grid item key={index} xs={3}>
              <Challenge info={challenge} />
            </Grid>
          ))}
        </Grid>
      </Box>}
    </>
  );
}
