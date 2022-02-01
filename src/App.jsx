import React, { useEffect, useReducer, createContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import NavBar from './components/NavBar.jsx'
import AttendanceView from './components/AttendanceView.jsx';
import SelectView from './components/SelectView.jsx';
import ReportView from './components/ReportView.jsx';
import AccountView from './components/AccountView.jsx'
import storeReducer from './reducers/storeReducer.jsx';
import socketToStore from './utils/socketToStore.js';

const initialStore = {
  enrolled: [],
  unregistered: [],
  view: 'account',
  loggedIn: false,
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
  var [store, dispatch] = useReducer(storeReducer, initialStore);

  useEffect(() => {
    socketToStore(store, dispatch)
    axios.get('/enroll').then(resp => {dispatch({type:"POPULATE_ENROLLMENT", payload:resp.data})})
     }, []);


  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <StoreContext.Provider value={{ store, dispatch }} >
          {store.loggedIn && <NavBar unregisteredCount={store.unregistered.length}/>}
          {/* Maybe Implement React Router here */}
          {store.view === 'account' && <AccountView/>}
          {store.view === 'select' && <SelectView />}
          {store.view === 'attendance' && <AttendanceView />}
          {store.view === 'report' && <ReportView />}
        </StoreContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;