'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Typography from "@mui/material/Typography";
import Challenges from './Items/Challenges';
import Colours from './Items/Colours';
import Intros from './Items/Intros';
import Exercises from './Items/Exercises';
import Climbs from './Items/Climbs';

// go climb
// import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
// import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';



export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
    >
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>
      <List>
        <Challenges />
        <Divider />
        <Colours />
        <Divider />
        <Intros />
        <Divider />
        <Exercises />
        <Divider />
        <Climbs />
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            PaperProps={{ sx: { width: "80%" } }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}