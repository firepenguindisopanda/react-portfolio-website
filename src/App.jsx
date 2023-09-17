import React from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { getDesignTokens } from './utilities';
import DrawerAppBar from './components/DrawerAppBar/DrawerAppBar';
import AboutMe from './components/AboutMe/AboutMe';
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills';
import TechnicalExperiences from './components/TechnicalExperiences/TechnicalExperiences';
import Projects from './components/Projects/Projects';
import WorkExperience from './components/WorkExperience/WorkExperience';




const ColorModeContext = React.createContext({ toggleColorMode: () => {}});
const ToggleColorMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Container maxWidth="lg" sx={{p: 2}}>
          <App />
          <main>NEW LAYOUT</main>
          <AboutMe />
          <TechnicalSkills />
          <TechnicalExperiences />
          <Projects />
          <WorkExperience />
        </Container>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
const App = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <DrawerAppBar theme={theme} colorMode={colorMode} />
  )
}

export default ToggleColorMode;

