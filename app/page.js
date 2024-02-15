'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TemporaryDrawer from './components/settings/TemporaryDrawer';

import BingoCard from './components/game/BingoCard';

import { useDispatch} from 'react-redux';
import { setCard } from '@/redux/features/setting-slice';


export default function Home() {
  const [state, setState] = React.useState({ left: true });
  const dispatch = useDispatch();

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
    <React.Fragment>
      <Typography variant="h5" gutterBottom>boulder bingo</Typography>
      <Button variant="outlined" onClick={toggleDrawer("left", true)}>settings</Button>
      <Button variant="outlined" onClick={toggleDrawer("left", false)}>refresh</Button>
      <BingoCard/>
      <TemporaryDrawer state={state} toggleDrawer={toggleDrawer}/>
    </React.Fragment>
  );
}
