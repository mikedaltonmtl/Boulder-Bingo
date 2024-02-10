import { useState } from 'react';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Slider from '@mui/material/Slider';

import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';

// const marks = [
//   { value: 1, label: 'Intro' },
//   { value: 2, label: '1' },
//   { value: 3, label: '2.1' },
//   { value: 4, label: '2.2' },
//   { value: 5, label: '2.3' },
//   { value: 6, label: '3.1' },
//   { value: 7, label: '3.2' },
//   { value: 8, label: '3.3' },
//   { value: 9, label: '4.1' },
//   { value: 10, label: '4.2' }
// ];

const marks = [
  { value: 1, label: 'Intro' },
  { value: 2, label: '1' },
  { value: 3, label: '2' },
  { value: 4, label: '' },
  { value: 5, label: '' },
  { value: 6, label: '3' },
  { value: 7, label: '' },
  { value: 8, label: '' },
  { value: 9, label: '4' },
  { value: 10, label: '' }
];

const convertValueToLabel = function(value) {
  switch (value) {
  case 1: return "Intro";
  case 2: return 1;
  case 3: return 2.1;
  case 4: return 2.2;
  case 5: return 2.3;
  case 6: return 3.1;
  case 7: return 3.2;
  case 8: return 3.3;
  case 9: return 4.1;
  case 10: return 4.2;
  }
};

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
      <ListItemText primary="Difficulty" />
      <Box sx={{ width: 250 }}>
        <Slider
          getAriaLabel={() => 'Climb range'}
          value={climbRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          disableSwap
          color="primary"
          min={1}
          max={10}
          step={1}
          marks={marks}
          valueLabelFormat={value => convertValueToLabel(value)}
        />
      </Box>
    </ListItem>
  );
}
