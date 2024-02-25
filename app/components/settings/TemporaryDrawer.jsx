'use client';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

import ListItems from './ListItems';
import Stepper from './Stepper';


export default function TemporaryDrawer({ state, toggleDrawer }) {
  return (
    <Drawer
      PaperProps={{ sx: { width: "100%" } }}
      anchor="left"
      open={state.left}
      onClose={toggleDrawer("left", false)}
    >
      <Container
        maxWidth="sm"
        sx={{ bgcolor: 'background.paper' }}
      >
        <Stepper step={0} />
        <ListItems />
        <Box textAlign="center" sx={{ mb: 4 }} >
          <Button
            variant="contained"
            endIcon={<NorthEastOutlinedIcon />}
            onClick={toggleDrawer("left", false)}
          >
          Let&apos;s Go!
          </Button>
        </Box>
      </Container>
    </Drawer>
  );
}