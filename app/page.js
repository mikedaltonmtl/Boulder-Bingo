'use client';
import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import TemporaryDrawer from "./components/settings/TemporaryDrawer";

import { useSelector } from 'react-redux';

export default function Home() {

  const [state, setState] = React.useState({ left: true });

  const challengesSelected = useSelector(state => state.settingsReducer.value.nbTasks);
  const colours = useSelector(state => state.settingsReducer.value.colours);

  const showColours = (
    Object.entries(colours).map(([key, value]) => (
      <p key={key}>
        {key} : {value}
      </p>
    ))
  );

  // for (const [key, value] of Object.entries(object1)) {
  //   console.log(`${key}: ${value}`);
  // }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    /////////////////////////////////////////////////////////////////////////////////
    // Logic to create game card will be called from here, when open === false
    /////////////////////////////////////////////////////////////////////////////////
  };

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>boulder bingo</Typography>
      <Button variant="outlined" onClick={toggleDrawer("left", true)}>settings</Button>
      <TemporaryDrawer state={state} toggleDrawer={toggleDrawer} />
      <Typography variant="body1" gutterBottom>challengesSelected: {challengesSelected}</Typography>
      {showColours}
    </React.Fragment>
  );
}
