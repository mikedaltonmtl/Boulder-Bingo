'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TemporaryDrawer from './components/settings/TemporaryDrawer';

import { cleanData } from './helpers/conversions';
import { setCardArray } from './helpers/setCardArray';

import { useSelector } from 'react-redux';

export default function Home() {

  const [state, setState] = React.useState({ left: true });

  /////////////////////////////////////////////////////////////////////////////////
  // test redux!
  const challengesSelected = useSelector(state => state.settingsReducer.value.nbTasks);
  const colours = useSelector(state => state.settingsReducer.value.colours);
  const colourState = [];
  for (const [key, value] of Object.entries(colours)) {
    colourState.push(`${key}: ${value} - `);
  }
  const intros = useSelector(state => state.settingsReducer.value.intros) ? 'yes' : 'no';
  const exercises = useSelector(state => state.settingsReducer.value.exercises);
  const exerciseState = [];
  for (const [key, value] of Object.entries(exercises)) {
    exerciseState.push(`${key}: ${value} - `);
  }
  const climbRangeSelected = useSelector(state => state.settingsReducer.value.climbRange);
  /////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////
  // build card array
  // const setCardArray = function(nbTasks, colours, intros, exercises, climbRange)
  // nbTasks: number - ok
  // colours: array of names to include - objectToArray(colours) - ok
  // intros: boolean - ok
  // exercises: array of names to include - ok
  // climbRange: array [min, max] - ok

  // console.log('nbTasks', challengesSelected, typeof challengesSelected);
  // console.log('colours', objectToArray(colours));
  // const introTest = useSelector(state => state.settingsReducer.value.intros);
  // console.log('intros', introTest, typeof introTest);
  // console.log('exercises', objectToArray(exercises));
  // console.log('climbRange', climbRangeSelected);
  const cardArray = setCardArray(
    useSelector(state => state.settingsReducer.value.nbTasks),
    cleanData(useSelector(state => state.settingsReducer.value.colours), 'colour'),
    useSelector(state => state.settingsReducer.value.intros),
    cleanData(useSelector(state => state.settingsReducer.value.exercises), 'exercise'),
    useSelector(state => state.settingsReducer.value.climbRange),
  );
  console.log('cardArray', cardArray);


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
      <p>{colourState}</p>
      <p>intros? {intros}</p>
      <p>{exerciseState}</p>
      <p>range from {climbRangeSelected[0]} to {climbRangeSelected[1]}</p>
    </React.Fragment>
  );
}
