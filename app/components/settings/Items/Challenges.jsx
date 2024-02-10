import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

export default function Challenges() {
  const [alignment, setAlignment] = React.useState('12');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ListItem key='challenges'>
      <ListItemIcon>
        <AssignmentTurnedInOutlinedIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Challenges" />
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{ paddingRight: 1 }}
      >
        <ToggleButton sx={{ width: 50 }} value="8">8</ToggleButton>
        <ToggleButton sx={{ width: 50 }} value="12">12</ToggleButton>
        <ToggleButton sx={{ width: 50 }} value="16">16</ToggleButton>
      </ToggleButtonGroup>
    </ListItem>

  );
}
