import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Switch from '@mui/material/Switch';

import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
/*
<Switch
  checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
*/

export default function Intros() {
  return (
    <ListItem key='intros' sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', paddingRight: 4 }}>
      <ListItemIcon>
        <YardOutlinedIcon color='success' />
      </ListItemIcon>
      <ListItemText id="switch-label-intros" primary="Climb all the Intros" />
      <Switch
        edge="end"
        defaultChecked
        color="primary"
        inputProps={{
          'aria-labelledby': 'switch-label-intros',
        }}
      />
    </ListItem>
  );
}
