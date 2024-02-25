'use client';
import * as React from 'react';
import Container from "@mui/material/Container";
import useMediaQuery from '@mui/material/useMediaQuery';


import Splash from './components/Splash';
import BingoCard from './components/game/BingoCard';
import NavBar from './components/game/NavBar';
import TemporaryDrawer from './components/settings/TemporaryDrawer';

import { useSelector, useDispatch} from 'react-redux';
import { setCard, updateCard } from '@/redux/features/setting-slice';


export default function Home() {
  const [openSplash, setOpenSplash] = React.useState(true);
  const [state, setState] = React.useState({ left: true });
  const [isReset, setIsReset] = React.useState(false);
  const [isBingo, setIsBingo] = React.useState(false);
  const card = useSelector(state => state.settingsReducer.value.card);
  const dispatch = useDispatch();
  const isPrintMode = useMediaQuery('print');

  const checkBingo = function(id, setComplete) {
    const checkCard = card.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: setComplete };
      }
      return task;
    });
    dispatch(updateCard(checkCard));
    setIsBingo(checkCard.every(task => task.isComplete === true));
  };

  const handleReset = function() {
    const resetCard = card.map(card => card.type === 'empty' ? card : { ...card, isComplete: false});
    dispatch(updateCard(resetCard));
    setIsReset(true);
    setIsBingo(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setIsBingo(false);

    if (!open) {
      dispatch(setCard());
    }
  };

  return (
    <Container maxWidth="sm">
      <Splash openSplash={openSplash} setOpenSplash={setOpenSplash} />
      <BingoCard
        sx={{ height: "100%" }}
        card={card}
        isReset={isReset}
        setIsReset={setIsReset}
        isBingo={isBingo}
        checkBingo={checkBingo}
      />
      {!isPrintMode &&
        <NavBar toggleDrawer={toggleDrawer} handleReset={handleReset}/>
      }
      <TemporaryDrawer state={state} toggleDrawer={toggleDrawer}/>
    </Container>
  );
}