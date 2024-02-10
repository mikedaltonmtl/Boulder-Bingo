import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Challenges from './Items/Challenges';
import Colours from './Items/Colours';
import Intros from './Items/Intros';
import Exercises from './Items/Exercises';
import Climbs from './Items/Climbs';

export default function ListItems() {
  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
    >
      <Challenges />
      <Divider />
      <Colours />
      <Divider />
      <Intros />
      <Divider />
      <Exercises />
      <Divider />
      <Climbs />
    </List>
  );
}
