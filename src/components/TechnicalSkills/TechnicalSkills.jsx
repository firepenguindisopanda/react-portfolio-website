import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { 
    CPlusPlus, 
    Android, 
    Javascript, 
    Python, 
    Windows, 
    Java, 
    Jenkins, 
    SpringBoot,
    Flask,
    Heroku,
    Angular,
    MaterialUi,
    Bootstrap,
    ReactIcon,
    NodejsIcon,
    PostgresqlIcon,
    FirebaseIcon,
    GitIcon,
    DockerIcon,
    AWSIcon,
    NginxIcon,
    GCPIcon
} from '../SvgIcons';
import ConstructionIcon from '@mui/icons-material/Construction';

const TechnicalSkills = () => {
    return (
        <Box sx={{
            flexGrow: 1,
            p: 2,
            marginTop: '1rem',
            bgcolor: 'background.paper',
            borderRadius: '.25rem',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        }}>
            <Grid container spacing={1}>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: '1rem',
                    borderBottom: '1px solid #ccc',
                }}>
                    <ConstructionIcon sx={{marginBottom: '1rem'}} /><Typography variant="h4" component="h1" sx={{marginBottom: '1rem', marginRight: '1rem', marginLeft: '1rem'}}>Technologies Used</Typography><ConstructionIcon sx={{marginBottom: '1rem'}} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginBottom: '2rem',
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
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <Java colour="lightblue" />
                        </div>
                        <Typography variant="body2">Java</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <Jenkins colour="lightblue" />
                        </div>
                        <Typography variant="body2">Jenkins</Typography>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginBottom: '2rem',
                        flexWrap: 'wrap', // Allow icons to wrap when the screen size is small
                    }}
                >
                    {/* Wrapping each icon with a container to control its size and add text below */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <SpringBoot colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Springboot</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <Flask colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Flask</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <Heroku colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Heroku</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <Angular colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Angular Js</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <MaterialUi colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Material UI</Typography>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginBottom: '2rem',
                        flexWrap: 'wrap', // Allow icons to wrap when the screen size is small
                    }}
                >
                    {/* Wrapping each icon with a container to control its size and add text below */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <Bootstrap colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Bootstrap</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <ReactIcon colour="lightgreen" />
                        </div>
                        <Typography variant="body2">React</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <NodejsIcon colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Node Js</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <PostgresqlIcon colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Postgresql</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <FirebaseIcon colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Firebase</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <GitIcon colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Git</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <DockerIcon colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Docker</Typography>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginBottom: '2rem',
                        flexWrap: 'wrap', // Allow icons to wrap when the screen size is small
                    }}
                >
                    {/* Wrapping each icon with a container to control its size and add text below */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <NginxIcon colour="lightgreen" />
                        </div>
                        <Typography variant="body2">NGINX</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <AWSIcon colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Amazon Web Services</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px' }}>
                            <GCPIcon colour="lightgreen" />
                        </div>
                        <Typography variant="body2">Google Compute Engine</Typography>
                    </div>
                    
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default TechnicalSkills