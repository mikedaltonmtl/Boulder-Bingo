import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';

import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';

const exerciseArray = ['Pull-ups', 'Push-ups', 'Squats', 'Jumping jacks'];

export default function Exercises() {
  return (
    <>
      <ListItem key='exercisesLabel' sx={{ paddingBottom: 0 }}>
        <ListItemIcon>
          <FitnessCenterOutlinedIcon color='error' />
        </ListItemIcon>
        <ListItemText primary="Exercises" />
      </ListItem>
      <ListItem key='exercises' sx={{ paddingTop: 0 }}>
        <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', padding: 0 }} >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={0} columnSpacing={6} >
              {exerciseArray.map(exercise => (
                <Grid item key = {exercise} xs={6}>
                  <ListItem>
                    <ListItemText id={`switch-list-${exercise}`} primary={exercise} />
                    <Switch
                      edge="end"
                      defaultChecked
                      color="primary"
                      inputProps={{
                        'aria-labelledby': `switch-list-${exercise}`,
                      }}
                    />
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Box>
        </List>
      </ListItem>
    </>
  );
}
