import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './screens/Calendar';
import Dashboard from './screens/Dashboard';
import SideBar from './screens/global/SideBar';
import TopBar from './screens/global/TopBar';
import Team from './screens/Team';
import { ColorModeContext, IColorMode, useMode } from './theme';

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
                <Route path='/teams' element={<Team/>}/>
                <Route path='/calendar' element={<Calendar/>}/>

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
