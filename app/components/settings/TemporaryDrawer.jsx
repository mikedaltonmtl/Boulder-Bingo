'use client';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItems from './ListItems';
import Stepper from './Stepper';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import Box from '@mui/material/Box';

export default function TemporaryDrawer({ state, toggleDrawer }) {
  return (
    <Drawer
      PaperProps={{ sx: { width: "80%" } }}
      anchor="left"
      open={state.left}
      onClose={toggleDrawer("left", false)}
    >
      <Stepper />
      <ListItems />
      <Box textAlign="center" >
        <Button
          variant="contained"
          endIcon={<NorthEastOutlinedIcon />}
          onClick={toggleDrawer("left", false)}
        >
          Let&apos;s Go!
        </Button>
      </Box>
    </Drawer>
  );
}