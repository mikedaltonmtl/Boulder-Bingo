import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Slider from '@mui/material/Slider';

import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

const marks = [
  {
    value: 8,
    label: '8',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 16,
    label: '16',
  }
];

export default function Challenges() {
  return (
    <ListItem key='challenges'>
      <ListItemIcon>
        <AssignmentTurnedInOutlinedIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Challenges" />
      <Box sx={{ width: 150 }}>
        <Slider
          aria-label="Challenges"
          defaultValue={12}
          valueLabelDisplay="auto"
          shiftStep={4}
          step={4}
          marks={marks}
          min={8}
          max={16}
        />
      </Box>
    </ListItem>
  );
}
