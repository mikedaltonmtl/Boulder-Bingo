import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Slider from '@mui/material/Slider';

import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';

import { useSelector, useDispatch} from 'react-redux';
import { setClimbRange } from '@/redux/features/setting-slice';

import { convertValueToLabel } from '@/app/helpers/conversions';

const marks = [
  { value: 1, label: 'Intro' },
  { value: 2, label: '1' },
  { value: 3, label: '2' },
  { value: 4, label: '' },
  { value: 5, label: '' },
  { value: 6, label: '3' },
  { value: 7, label: '' },
  { value: 8, label: '' },
  { value: 9, label: '4' },
  { value: 10, label: '' }
];


export default function Climbs() {
  const climbRange = useSelector(state => state.settingsReducer.value.climbRange);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(setClimbRange(newValue));
  };

  return (
    <>
      <ListItem key='climbsLabel' sx={{ paddingBottom: 0 }} >
        <ListItemIcon>
          <SportsHandballOutlinedIcon color='secondary' />
        </ListItemIcon>
        <ListItemText primary="Difficulty" />
      </ListItem>
      <ListItem key='climbs'>
        <Box sx={{ width: 300, paddingLeft: 4, paddingTop: 0 }} >
          <Slider
            getAriaLabel={() => 'Climb range'}
            value={climbRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            disableSwap
            color="primary"
            min={1}
            max={10}
            step={1}
            marks={marks}
            valueLabelFormat={value => convertValueToLabel(value)}
          />
        </Box>
      </ListItem>
    </>
  );
}
