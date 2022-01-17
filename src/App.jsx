import React, { useEffect, useReducer, createContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import studentRoster from '../lib/hrlax4849'
import storeReducer from './reducers/storeReducer.jsx';
import AttendanceView from './components/AttendanceView.jsx';
import socketInit from './utils/socketInit.js';

const initialStore = {
  enrolled: studentRoster,
  unregistered: [],
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
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  useEffect(() => { socketInit(store, dispatch) }, []);

  return (
      <ThemeProvider theme={theme}>
        <StoreContext.Provider value={{ store, dispatch }} >
          <AttendanceView />
        </StoreContext.Provider>
      </ThemeProvider>
  );
}

export default App;