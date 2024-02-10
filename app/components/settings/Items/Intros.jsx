import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import YardOutlinedIcon from '@mui/icons-material/YardOutlined';


const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Intros() {
  return (
    <ListItem key='intros'>
      <ListItemIcon>
        <YardOutlinedIcon color='success' />
      </ListItemIcon>
      <ListItemText primary="All the Intros" />
      <Box sx={{ width: 150 }}>
        <FormControlLabel
          control={
            <Switch
              {...label}
              defaultChecked
              color="primary"
            />
          }
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
