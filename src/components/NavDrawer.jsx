import React, { useContext } from 'react';
import { StoreContext } from '../App.jsx';
import { Drawer, Box, List, ListItem, ListItemText } from '@mui/material';

export default function NavDrawer({ isOpen, setOpen }) {
  var { dispatch } = useContext(StoreContext);
  const listItems = [
    ['Take Attendance', 'attendance'],
    ['Select Campus/Cohorts', 'select'],
    ['Generate Report', 'report'],
    ['Logout', 'account']].map((text, index) => (
      <ListItem button key={text[0]} onClick={() => { dispatch({ type: "CHANGE_VIEW", payload: text[1] }) }}>
        <ListItemText primary={text[0]} />
      </ListItem>
    ));
  return (
    <React.Fragment key={'left'}>
      <Drawer
        anchor='left'
        open={isOpen}
        onClose={() => { setOpen(false) }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => { setOpen(false) }}
        >
          <List>
            {listItems}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}