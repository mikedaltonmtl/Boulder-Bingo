'use client';
import * as React from 'react';
import TemporaryDrawer from './components/settings/TemporaryDrawer';
import Container from "@mui/material/Container";

import BingoCard from './components/game/BingoCard';
import Stepper from './components/settings/Stepper';
import NavBar from './components/game/NavBar';

import { useSelector, useDispatch} from 'react-redux';
import { setCard, restartCard } from '@/redux/features/setting-slice';


export default function Home() {
  const [state, setState] = React.useState({ left: true });
  const card = useSelector(state => state.settingsReducer.value.card);
  const dispatch = useDispatch();
  const handleReset = function() {
    dispatch(restartCard());
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
      <BingoCard card={card}/>
      <NavBar toggleDrawer={toggleDrawer} handleReset={handleReset}/>
      <TemporaryDrawer state={state} toggleDrawer={toggleDrawer}/>
    </Container>
  );
}