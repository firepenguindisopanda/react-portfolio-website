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
    GCPIcon,
    GithubIcon,
    TailwindCssIcon
} from '../SvgIcons';
import ConstructionIcon from '@mui/icons-material/Construction';

const firstRowIcons = [
    {
        id: 1,
        icon: <CPlusPlus colour="brown" />,
        text: 'C++',
    },{
        id: 2,
        icon: <Android colour="green" />,
        text: 'Android',
    },
    {
        id: 3,
        icon: <Javascript colour="yellow" />,
        text: 'Javascript',
    },
    {
        id: 4,
        icon: <Python colour="blue" />,
        text: 'Python',
    },
    {
        id: 5,
        icon: <Windows colour="lightblue" />,
        text: 'Windows',
    },
    {
        id: 6,
        icon: <Java colour="lightgreen" />,
        text: 'Java',
    },
    {
        id: 7,
        icon: <Jenkins colour="lightgreen" />,
        text: 'Jenkins',
    }
];

const secondRowIcons = [
    {
        id: 1,
        icon: <SpringBoot colour="lightgreen" />,
        text: 'Springboot',
    },
    {
        id: 2,
        icon: <Flask colour="lightgreen" />,
        text: 'Flask',
    },
    {
        id: 3,
        icon: <Heroku colour="lightgreen" />,
        text: 'Heroku',
    },
    {
        id: 4,
        icon: <Angular colour="lightgreen" />,
        text: 'Angular Js',
    },
    {
        id: 5,
        icon: <MaterialUi colour="lightgreen" />,
        text: 'Material UI',
    },
];

const thirdRowIcons = [
    {
        id: 1,
        icon: <Bootstrap colour="lightgreen" />,
        text: 'Bootstrap',
    },
    {
        id: 2,
        icon: <ReactIcon colour="lightgreen" />,
        text: 'React',
    },
    {
        id: 3,
        icon: <NodejsIcon colour="lightgreen" />,
        text: 'Node Js',
    },
    {
        id: 4,
        icon: <PostgresqlIcon colour="lightgreen" />,
        text: 'Postgresql',
    },
    {
        id: 5,
        icon: <FirebaseIcon colour="lightgreen" />,
        text: 'Firebase',
    },
    {
        id: 6,
        icon: <GitIcon colour="lightgreen" />,
        text: 'Git',
    },
    {
        id: 7,
        icon: <DockerIcon colour="lightgreen" />,
        text: 'Docker',
    }
];

const fourthRowIcons = [
    {
        id: 1,
        icon: <NginxIcon colour="lightgreen" />,
        text: 'NGINX',
    },
    {
        id: 2,
        icon: <AWSIcon colour="lightgreen" />,
        text: 'Amazon Web Services',
    },
    {
        id: 3,
        icon: <GCPIcon colour="lightgreen" />,
        text: 'Google Compute Engine',
    },
    {
        id: 4,
        icon: <GithubIcon colour="lightgreen" />,
        text: 'Github',
    },
    {
        id: 5,
        icon: <TailwindCssIcon colour="lightgreen" />,
        text: 'Tailwind Css',
    },
];

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
                    <ConstructionIcon sx={{marginBottom: '1rem'}} /><Typography variant="h4" component="h1" sx={{marginBottom: '1rem', marginRight: '1rem', marginLeft: '1rem'}}>Technologies / Tools I Have Used</Typography><ConstructionIcon sx={{marginBottom: '1rem'}} />
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
                    {
                        firstRowIcons.map((icon) => (
                            <div key={icon.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px' }}>
                                    {icon.icon}
                                </div>
                                <Typography variant="body2">{icon.text}</Typography>
                            </div>
                        ))
                    }
                    
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
                    {
                        secondRowIcons.map((icon) => (
                            <div key={icon.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px' }}>
                                    {icon.icon}
                                </div>
                                <Typography variant="body2">{icon.text}</Typography>
                            </div>
                        ))
                    }
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
                    {
                        thirdRowIcons.map((icon) => (
                            <div key={icon.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px' }}>
                                    {icon.icon}
                                </div>
                                <Typography variant="body2">{icon.text}</Typography>
                            </div>
                        ))
                    }
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
                    {
                        fourthRowIcons.map((icon) => (
                            <div key={icon.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px' }}>
                                    {icon.icon}
                                </div>
                                <Typography variant="body2">{icon.text}</Typography>
                            </div>
                        ))
                    }
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default TechnicalSkills