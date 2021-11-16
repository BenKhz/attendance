import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Link } from 'react-router-dom';

export default function BasicSpeedDial(props) {
  const actions = [
    // { icon: <SaveAltIcon />, name: 'Push To DB', to: '/', onClick: props.handlePush },
    // { icon: <SaveAltIcon />, name: 'Reset', to: '/', onClick: () => {props.resetStart(); props.resetAttend()} },
    { icon: <ListAltIcon />, name: 'View Attendance Tools', to: '/attendView', onClick: () => {console.log('clicked')}},
    { icon: <PlaylistAddIcon />, name: 'View Enrollment Tools', to: '/enrollView', onClick: () => {console.log('clicked')}},
  ];
  return (
    <div className="dial">
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={<Link to={action.to}>{action.icon}</Link>}
            onClick={action.onClick}
            tooltipTitle={action.name}
             />
        ))}
      </SpeedDial>
    </Box>
    </div>
  );
}
