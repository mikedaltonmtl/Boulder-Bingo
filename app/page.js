'use client';
import * as React from 'react';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

import Stepper from './components/settings/Stepper';
import BingoCard from './components/game/BingoCard';
import NavBar from './components/game/NavBar';
import TemporaryDrawer from './components/settings/TemporaryDrawer';

import { useSelector, useDispatch} from 'react-redux';
import { setCard, restartCard } from '@/redux/features/setting-slice';


export default function Home() {
  const [state, setState] = React.useState({ left: true });
  const [isReset, setIsReset] = React.useState(false);
  const card = useSelector(state => state.settingsReducer.value.card);

  const dispatch = useDispatch();
  const handleReset = function() {
    const cardCopy = [...card];
    // Reset all tasks 'isComplete' value to false, except for empties
    const resetCard = cardCopy.map(card => card.type === 'empty' ? card : { ...card, isComplete: false});
    console.log('resetCard', resetCard);
    console.log('spread resetCard', [...resetCard]);
    dispatch(restartCard([...resetCard]));
    setIsReset(true);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });

    if (!open) {
      dispatch(setCard());
    }
  };

  return (
    <Container maxWidth="lg">
      <Stepper step={1} />
      <BingoCard card={card} isReset={isReset} setIsReset={setIsReset} sx={{ height: "800px" }}/>
      <NavBar toggleDrawer={toggleDrawer} handleReset={handleReset}/>
      <Box sx={{ height: "80px" }}>{' '}</Box>
      <TemporaryDrawer state={state} toggleDrawer={toggleDrawer}/>
    </Container>
  );
}