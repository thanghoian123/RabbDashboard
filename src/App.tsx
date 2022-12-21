import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './screens/Dashboard';
import SideBar from './screens/global/SideBar';
import TopBar from './screens/global/TopBar';
import { ColorModeContext, EMode, IColorMode, useMode } from './theme';

function App() {

  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode as IColorMode}>
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline />
        {/* ------------------ */}
        <div className="app">
          <SideBar/>
          <main className='content'>
            <TopBar />
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
