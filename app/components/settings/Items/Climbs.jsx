import { useState } from 'react';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Slider from '@mui/material/Slider';

import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';

const marks = [
  { value: 1, label: 'Intro' },
  { value: 2, label: '1' },
  { value: 3, label: '2.1' },
  { value: 4, label: '2.2' },
  { value: 5, label: '2.3' },
  { value: 6, label: '3.1' },
  { value: 7, label: '3.2' },
  { value: 8, label: '3.3' },
  { value: 9, label: '4.1' },
  { value: 10, label: '4.2' },
];

export default function Climbs() {
  const [climbRange, setClimbRange] = useState([1, 5]);

  const handleChange = (event, newValue) => {
    setClimbRange(newValue);
  };
  return (
    <ListItem key='climbs'>
      <ListItemIcon>
        <SportsHandballOutlinedIcon color='secondary' />
      </ListItemIcon>
      <ListItemText primary="Climb Difficulty" />
      <Box sx={{ width: 500 }}>
        <Slider
          getAriaLabel={() => 'Climb range'}
          value={climbRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          disableSwap
          color="secondary"
          min={1}
          max={10}
          step={1}
          marks={marks}

        />
        <Slider
          aria-label="Climbs"
          defaultValue={12}
          valueLabelDisplay="auto"
          shiftStep={1}
          step={1}
          marks={marks}
          min={8}
          max={16}
        />
      </Box>
    </ListItem>
  );
}
