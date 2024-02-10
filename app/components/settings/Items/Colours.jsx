import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ColourSwitches from './ColourSwitches';

export default function Colours() {
  return (
    <>
      <ListItem key='coloursLabel' sx={{ paddingBottom: 0 }}>
        <ListItemIcon>
          <ColorLensOutlinedIcon color='warning' />
        </ListItemIcon>
        <ListItemText primary="Colours" />
      </ListItem>
      <ListItem key='coloursSwitch' sx={{ paddingTop: 0 }}>
        <ColourSwitches />
      </ListItem>
    </>
  );
}
