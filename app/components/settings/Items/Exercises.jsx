import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Exercises() {
  return (
    <ListItem key='exercises'>
      <ListItemIcon>
        <FitnessCenterOutlinedIcon color='error' />
      </ListItemIcon>
      <ListItemText primary="Exercises" />
      <Box sx={{ width: 150 }}>
        {['5 pull-ups', '10 push-ups', '15 squats', '20 jumping jacks'].map(exercise => (
          <FormControlLabel
            key = {exercise}
            control={
              <Switch
                {...label}
                defaultChecked
                color="primary"
              />
            }
            label={exercise}
            labelPlacement="start"
          />
        ))}
      </Box>
    </ListItem>
  );
}
