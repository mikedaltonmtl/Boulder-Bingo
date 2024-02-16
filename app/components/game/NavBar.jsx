import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import Paper from '@mui/material/Paper';


export default function NavBar({ toggleDrawer, handleReset }) {

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        sx={{
          "& .MuiBottomNavigationAction-root, .Mui-selected, svg": { color: "#1976d2" }
        }}
      >
        <BottomNavigationAction onClick={toggleDrawer("left", true)} label="Settings" icon={<SettingsIcon />} />
        <BottomNavigationAction onClick={toggleDrawer("left", false)} label="Shuffle" icon={<AutorenewIcon />} />
        {/* <BottomNavigationAction onClick={handleReset} label="Restart" icon={<SettingsBackupRestoreIcon />} /> */}
      </BottomNavigation>
    </Paper>
  );
}
