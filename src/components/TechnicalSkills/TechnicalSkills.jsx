import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <ConstructionIcon /><h1>Technical Skills</h1><ConstructionIcon />
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
                    }}
                >
                    {/* Wrapping CPlusPlus icon with a container to control its size */}
                    <div style={{ width: '50px', height: '50px' }}>
                        <CPlusPlus colour="brown" />
                    </div>
                    <div style={{ width: '50px', height: '50px'}}>
                        <Android colour="green" />
                    </div>
                    {/* <div style={{width: '50px', height: '50px'}}>
                        <SvgIcon
                        sx={{
                            '&:hover': { transform: 'scale(1.2)', transition: 'transform 0.2s ease' },
                            'height': '100%',
                            'width': '100%',
                            'color': 'yellow',
                        }}
                        >
                            <JavascriptIcon />
                        </SvgIcon>
                    </div> */}
                    <div style={{ width: '50px', height: '50px' }}>
                        <Javascript colour="yellow" />
                    </div>
                    <div style={{ width: '50px', height: '50px' }}>
                        <Python colour="blue" />
                    </div>
                    <div style={{ width: '50px', height: '50px' }}>
                        <Windows colour="lightblue" />
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TechnicalSkills