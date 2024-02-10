// import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
  // const [checked, setChecked] = React.useState(['wifi']);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  return (
    <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', padding: 0 }} >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={0} columnSpacing={6} >
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-purple" primary="Purple" />
              <Switch
                edge="end"
                defaultChecked
                color="secondary"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-purple',
                }}
              />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-white" primary="White" />
              <Switch
                edge="end"
                defaultChecked
                color="default"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-white',
                }}
              />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-blue" primary="Blue" />
              <Switch
                edge="end"
                defaultChecked
                color="primary"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-blue',
                }}
              />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-red" primary="Red" />
              <RedSwitch
                edge="end"
                defaultChecked
                color="error"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-red',
                }}
              />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-yellow" primary="Yellow" />
              <YellowSwitch
                edge="end"
                defaultChecked
                color="error"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-yellow',
                }}
              />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemText id="switch-list-label-black" primary="Black" />
              <BlackSwitch
                edge="end"
                defaultChecked
                color="error"
                inputProps={{
                  'aria-labelledby': 'switch-list-label-black',
                }}
              />
            </ListItem>
          </Grid>
        </Grid>
      </Box>
    </List>
  );
}

/* Example
<ListItem>
  <ListItemIcon>
    <BluetoothIcon />
  </ListItemIcon>
  <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
  <Switch
    edge="end"
    onChange={handleToggle('bluetooth')}
    checked={checked.indexOf('bluetooth') !== -1}
    inputProps={{
      'aria-labelledby': 'switch-list-label-bluetooth',
    }}
  />
</ListItem>
*/

/* Original
  <FormControlLabel
    control={
      <Switch
        {...label}
        defaultChecked
        color="secondary"
      />
    }
    label="purple"
    labelPlacement="start"
  />
*/
