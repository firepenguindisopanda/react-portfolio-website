import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CPlusPlus, Android, Javascript, Python, Windows } from '../SvgIcons';
import ConstructionIcon from '@mui/icons-material/Construction';
import SvgIcon from '@mui/material/SvgIcon';
import JavascriptIcon from '@mui/icons-material/Javascript';

const TechnicalSkills = () => {
    return (
        <Box sx={{
            flexGrow: 1,
            p: 2,
            m: 2,
            bgcolor: 'background.paper',
            borderRadius: '12px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            height: '100vh',
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <ConstructionIcon /><Typography variant="h4" component="h1">Technical Skills</Typography><ConstructionIcon />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap', // Allow icons to wrap when the screen size is small
                    }}
                >
                    {/* Wrapping each icon with a container to control its size and add text below */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <CPlusPlus colour="brown" />
                        </div>
                        <Typography variant="body2">C++</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <Android colour="green" />
                        </div>
                        <Typography variant="body2">Android</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <Javascript colour="yellow" />
                        </div>
                        <Typography variant="body2">JavaScript</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <Python colour="blue" />
                        </div>
                        <Typography variant="body2">Python</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <Windows colour="lightblue" />
                        </div>
                        <Typography variant="body2">Windows</Typography>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TechnicalSkills