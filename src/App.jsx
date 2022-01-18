import React, { useState, useEffect, useReducer, createContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

import NavBar from './components/NavBar.jsx'
import AttendanceView from './components/AttendanceView.jsx';
import SelectView from './components/SelectView.jsx';
import ReportView from './components/ReportView.jsx';
import storeReducer from './reducers/storeReducer.jsx';
import socketToStore from './utils/socketToStore.js';

const initialStore = {
  enrolled: [],
  unregistered: [],
  view: 'welcome'
}

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5893df',
    },
    secondary: {
      main: '#2ec5d3',
    },
    background: {
      default: '#192231',
      paper: '#e4e8ae',
    },
  },
});
export const StoreContext = createContext({store: {}, dispatch: ()=>{}});

function App() {
  var [enrolls, setEnrolls] = useState([]);
  const [store, dispatch] = useReducer(storeReducer, initialStore);

  useEffect(() => {
    axios.get('/enroll').then(resp => setEnrolls(resp.data))
    socketToStore(store, dispatch) }, []);

  useEffect(()=>{dispatch({type:"POPULATE_ENROLLMENT", payload: enrolls})},[enrolls]);

  return (
      <ThemeProvider theme={theme}>
        <StoreContext.Provider value={{ store, dispatch }} >
          <NavBar unregisteredCount={store.unregistered.length}/>
          {store.view === 'attendance' && <AttendanceView />}
          {store.view === 'select' && <SelectView />}
          {store.view === 'account' && <div>Account Placeholder</div>}
          {store.view === 'report' && <ReportView />}
        </StoreContext.Provider>
      </ThemeProvider>
  );
}

export default App;