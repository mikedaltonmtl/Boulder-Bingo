'use client';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItems from './ListItems';
import Stepper from './Stepper';

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
      </Drawer>
    </React.Fragment>
  );
}