'use client';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItems from './ListItems';
import Stepper from './Stepper';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import Box from '@mui/material/Box';

export default function TemporaryDrawer() {
  const anchor = 'left';
  const [state, setState] = React.useState({ left: true });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
      <Drawer
        PaperProps={{ sx: { width: "80%" } }}
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <Stepper />
        <ListItems />
        <Box textAlign="center" >
          <Button
            variant="contained"
            endIcon={<NorthEastOutlinedIcon />}
            onClick={toggleDrawer(anchor, false)}
          >
            Let&apos;s Go!
          </Button>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}