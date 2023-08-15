import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Link from '@mui/material/Link';
import FLASK from '../../assets/flask-logo-png-transparent.png';
import JINJA from '../../assets/jinja-logo.png';
import HEROKU from '../../assets/hosting_heroku.png';

const Projects = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                overflow: 'hidden',
                marginTop: 5,
                pt: 5,
                pb: 5,
                height: '80vh',
                borderRadius: '.25rem',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 180, 0.3)',
            }}
        >
            <Box sx={{ marginBottom: '1rem' }}>
                <Typography variant="h4" component="h1" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <AccountTreeIcon /><Typography variant="h4" component="h1" sx={{ marginRight: '1rem', marginLeft: '1rem' }}>Technical Projects</Typography><AccountTreeIcon />
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="h4" component="h1" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        <Typography variant="h4" component="h1">Recipe App</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h4" component="h1" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row' }}>
                        <Link href="#" underline="hover" >
                            <Typography variant="h4" component="h1">RecipeApp Repository</Typography>
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        Technologies Used: Jinja, Flask, Heroku
                    </Typography>
                </Grid>
                <Grid item xs={8}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',  // Center horizontally
                        alignItems: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap', // Allow icons to wrap when the screen size is small
                    }}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <Box width="50%" height="60px">
                            <img src={FLASK} alt="Flask Logo" style={{ width: '100%', height: '100%' }} />
                        </Box>
                        <Box width="50%" height="60px">
                            <img src={JINJA} alt="Jinja Logo" style={{ width: '100%', height: '100%' }} />
                        </Box>
                        <Box width="50%" height="60px">
                            <img src={HEROKU} alt="Heroku Logo" style={{ width: '100%', height: '100%' }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Projects;