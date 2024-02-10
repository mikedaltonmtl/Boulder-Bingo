import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { alpha, styled } from '@mui/material/styles';
import { red, yellow, grey } from '@mui/material/colors';

import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

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

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Colours() {
  return (
    <ListItem key='colours'>
      <ListItemIcon>
        <ColorLensOutlinedIcon color='warning' />
      </ListItemIcon>
      <ListItemText primary="Colours" />
      <Box sx={{ width: 150 }}>
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
        <FormControlLabel
          control={
            <Switch
              {...label}
              defaultChecked
              color="default"
            />
          }
          label="white"
          labelPlacement="start"
        />
        <FormControlLabel
          control={
            <Switch
              {...label}
              defaultChecked
              color="primary"
            />
          }
          label="blue"
          labelPlacement="start"
        />
        <FormControlLabel
          control={
            <RedSwitch
              defaultChecked
              color="error"
            />
          }
          label="red"
          labelPlacement="start"
        />
        <FormControlLabel
          control={
            <YellowSwitch
              defaultChecked
              color="error"
            />
          }
          label="yellow"
          labelPlacement="start"
        />
        <FormControlLabel
          control={
            <BlackSwitch
              defaultChecked
              color="error"
            />
          }
          label="black"
          labelPlacement="start"
        />
      </Box>
    </ListItem>
  );
}

/*
<Switch
  checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
*/
