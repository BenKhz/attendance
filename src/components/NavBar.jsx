import React, {useState} from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Badge, IconButton } from '@mui/material';
import NavDrawer from './NavDrawer.jsx';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function ButtonAppBar({unregisteredCount}) {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <NavDrawer isOpen={isOpen} setOpen={setOpen}/>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={()=> {setOpen(true)}}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hack Reactor Attendance
          </Typography>
          <Badge badgeContent={unregisteredCount} color="warning">
            <Button color="inherit">Discrepancies</Button>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
    </>

  );
}