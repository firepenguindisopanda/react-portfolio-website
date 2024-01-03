import React, { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, List, ListItem, ListItemText, Box, Button } from '@mui/material';
import { getDesignTokens } from './utilities';
import { Splitscreen } from '@mui/icons-material';
import RESUME from './assets/NicholasSmith_Resume.pdf';
import DrawerAppBar from './components/DrawerAppBar/DrawerAppBar';
import AboutMe from './components/AboutMe/AboutMe';
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills';
import TechnicalExperiences from './components/TechnicalExperiences/TechnicalExperiences';
import Projects from './components/Projects/Projects';
import WorkExperience from './components/WorkExperience/WorkExperience';
import AcademicAchievements from './components/AcademicAchievements/AcademicAchievements';
import Contact from './components/contact/Contact';
import SplitScreen from './components/SplitScreen/SplitScreen';
import ExtraCurricular from './components/TechnicalSkills/ExtraCurricular';


const LeftHandComponent = ({ onSelectLink, selectedLink }) => {
  const links = ['About Me', 'Technical Skills', 'Technical Experiences', 'Projects', 'Work Experience'];

  return (
    <div>
      <Splitscreen />
      <List>
        {links.map((link, index) => (
          <ListItem
            key={index}
            button
            onClick={() => onSelectLink(link)}
            selected={selectedLink === link}
          >
            <ListItemText primary={link} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

const RightHandComponent = ({ selectedLink }) => {
  switch (selectedLink) {
    case 'About Me':
      return <h1>About Me</h1>;
    case 'Technical Skills':
      return <h1>Technical Skills</h1>;
    case 'Technical Experiences':
      return <h1>Technical Experiences</h1>;
    case 'Projects':
      return <h1>Projects</h1>;
    case 'Work Experience':
      return <h1>Work Experience</h1>;
    default:
      return <Box sx={{
        flexGrow: 1,
        p: 2,
        marginTop: '3rem',
        marginBottom: '10rem',
        bgcolor: 'background.paper',
        borderRadius: '.25rem',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      }}>
        <h1>Default</h1>
      </Box>;
  }
}

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });
const ToggleColorMode = () => {
  const [selectedLink, setSelectedLink] = useState('About Me');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
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

        <Container maxWidth="xl" sx={{ p: 2 }}>
          <App />
          {/* <SplitScreen
            leftWeight={1}
            rightWeight={4}
          >
            <LeftHandComponent onSelectLink={setSelectedLink} selectedLink={selectedLink} />
            <RightHandComponent selectedLink={selectedLink} />
          </SplitScreen> */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
            {/* Button with text view Resume when clicked will open up in a new tab the pdf RESUME */}
            <Button href={RESUME} target="_blank" variant="outlined" color="secondary" sx={{ mr: 2 }}>
              View Resume
            </Button>
          </Box>
          <AboutMe />
          <SplitScreen
            leftWeight={2}
            rightWeight={1}>
            <TechnicalSkills />
            <ExtraCurricular />
          </SplitScreen>

          <TechnicalExperiences />
          <Projects />
          <WorkExperience />
        </Container>
        <Container fluid='true' maxWidth="xl" sx={{ p: 2 }}>
          <AcademicAchievements />
          <Contact />
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

