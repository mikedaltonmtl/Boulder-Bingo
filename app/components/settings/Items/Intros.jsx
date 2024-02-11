import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Switch from '@mui/material/Switch';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';

import { useSelector, useDispatch} from 'react-redux';
import { setIntros } from '@/redux/features/setting-slice';

export default function Intros() {
  const intros = useSelector(state => state.settingsReducer.value.intros);
  const dispatch = useDispatch();

  const handleToggle = function() {
    dispatch(setIntros(event.target.checked));
  };

  return (
    <ListItem key='intros' sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', paddingRight: 4 }}>
      <ListItemIcon>
        <YardOutlinedIcon color='success' />
      </ListItemIcon>
      <ListItemText id="switch-label-intros" primary="Climb all the Intros" />
      <Switch
        edge="end"
        color="primary"
        inputProps={{
          'aria-labelledby': 'switch-label-intros',
          'aria-label': 'controlled'
        }}
        onChange={handleToggle}
        checked={intros}
        name="intros"
      />
    </ListItem>
  );
}
