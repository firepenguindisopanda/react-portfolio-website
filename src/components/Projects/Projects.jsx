import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

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
                boxShadow: '0 3px 5px 2px rgba(0, 123, 255, 0.3)',
            }}
        >
            <Box>
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
                    xs=4
                </Grid>
                <Grid item xs={8}>
                    xs=8
                </Grid>
            </Grid>
        </Box>
    )
}

export default Projects