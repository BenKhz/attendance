import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Badge, IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function ButtonAppBar({unregisteredCount}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hack Reactor LAX Attendance
          </Typography>
          <Badge badgeContent={unregisteredCount} color="warning">
            <Button color="inherit">Discrepancies</Button>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}