import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';

import { useSelector, useDispatch} from 'react-redux';
import { setExercises } from '@/redux/features/setting-slice';

const exerciseArray = [
  { label: 'Pull-ups', name: 'pullUp'},
  { label: 'Push-ups', name: 'pushUp'},
  { label: 'Squats', name: 'squat'},
  { label: 'Jumping jacks', name: 'jack'},
];

export default function Exercises() {
  const exercises = useSelector(state => state.settingsReducer.value.exercises);
  const dispatch = useDispatch();

  const handleToggle = function() {
    dispatch(
      setExercises({
        ...exercises,
        [event.target.name]: event.target.checked
      })
    );
  };

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
                <Grid item key = {exercise.name} xs={6}>
                  <ListItem>
                    <ListItemText id={`switch-list-${exercise.name}`} primary={exercise.label} />
                    <Switch
                      edge="end"
                      color="primary"
                      inputProps={{
                        'aria-labelledby': `switch-list-${exercise.name}`,
                        'aria-label': 'controlled'
                      }}
                      onChange={handleToggle}
                      checked={exercises[exercise.name]}
                      name={exercise.name}
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
