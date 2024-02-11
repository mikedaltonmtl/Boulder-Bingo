import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useSelector, useDispatch} from 'react-redux';
import { setColours } from '@/redux/features/setting-slice';

import { alpha, styled } from '@mui/material/styles';
import { red, yellow, grey } from '@mui/material/colors';

const RedSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: red[500],
    '&:hover': {
      backgroundColor: alpha(red[500], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: red[500],
  },
}));

const YellowSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: yellow[500],
    '&:hover': {
      backgroundColor: alpha(yellow[500], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: yellow[500],
  },
}));

const BlackSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: grey[900],
    '&:hover': {
      backgroundColor: alpha(grey[900], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: grey[900],
  },
}));

export default function ColourSwitches() {
  const colours = useSelector(state => state.settingsReducer.value.colours);
  const dispatch = useDispatch();

  const handleToggle = function() {
    dispatch(
      setColours({
        ...colours,
        [event.target.name]: event.target.checked
      })
    );
  };

  return (
    <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', padding: 0 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={0} columnSpacing={6} >
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-purple" primary="Purple" />
              <Switch
                edge="end"
                color="secondary"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-purple',
                  'aria-label': 'controlled'
                }}
                onChange={handleToggle}
                checked={colours.purple}
                name="purple"
              />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-white" primary="White" />
              <Switch
                edge="end"
                color="default"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-white',
                  'aria-label': 'controlled'
                }}
                onChange={handleToggle}
                checked={colours.white}
                name="white"
              />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-blue" primary="Blue" />
              <Switch
                edge="end"
                color="primary"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-blue',
                  'aria-label': 'controlled'
                }}
                onChange={handleToggle}
                checked={colours.blue}
                name="blue"
              />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-red" primary="Red" />
              <RedSwitch
                edge="end"
                color="error"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-red',
                  'aria-label': 'controlled'
                }}
                onChange={handleToggle}
                checked={colours.red}
                name="red"
              />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-yellow" primary="Yellow" />
              <YellowSwitch
                edge="end"
                color="error"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-yellow',
                  'aria-label': 'controlled'
                }}
                onChange={handleToggle}
                checked={colours.yellow}
                name="yellow"
              />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-black" primary="Black" />
              <BlackSwitch
                edge="end"
                color="error"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-black',
                  'aria-label': 'controlled'
                }}
                onChange={handleToggle}
                checked={colours.black}
                name="black"
              />
            </ListItem>
          </Grid>
        </Grid>
      </Box>
    </List>
  );
}
