import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import JINJA from '../../assets/jinja-logo.png';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DoneIcon from '@mui/icons-material/Done';
import {
    Flask,
    Heroku,
    Angular,
    MaterialUi,
    GithubIcon,
    ReactIcon,
    FirebaseIcon,
} from '../SvgIcons';

const recipeAppTasks = [
    {
        id: 1,
        details: "Researched data sets of recipes to be used then compiled into json format and automatically added to SQLite database.",
    },
    {
        id: 2,
        details: "Implemented full-stack features such as user sign-in page, list of recipes, and allowed users to save recipes.",
    },
    {
        id: 3,
        details: "Hosted the web application on Heroku.",
    },
];

const movieAppTasks = [
    {
        id: 1,
        details: "Developed a web app that displays movies to the users, retrieved from an API.",
    },
    {
        id: 2,
        details: "Built a feature that allows users to comment on movie details and delete comments."
    },
    {
        id: 3,
        details: "Created unit tests for the web application using karma built-in Angular Js test module."
    },
    {
        id: 4,
        details: "Deployed to Netlify."
    }
];

const portfolioAppTasks = [
    {
        id: 1,
        details: "Designed and built a website using React Js and hosted it on firebase hosting."
    },
    {
        id: 2,
        details: "Created a projects section that displayed image and link to projects."
    }
]

const Projects = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                overflow: 'hidden',
                marginTop: 5,
                pt: 5,
                pb: 5,
                height: '100%',
                borderRadius: '.25rem',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 180, 0.3)',
            }}
        >
            <Box sx={{ marginBottom: '2rem' }}>
                <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Typography variant="h4" component="span" sx={{ marginRight: '1rem', marginLeft: '1rem' }}>🚀 Technical Projects 🚀</Typography>
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        <Typography variant="h4" component="span">Recipe App</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row' }}>
                        <Link href="https://github.com/firepenguindisopanda/recipe-board" underline="hover" >
                            <Typography variant="h4" component="span">RecipeApp Repository</Typography>
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        Technologies Used: Jinja, Flask, Heroku
                    </Typography>
                </Grid>
                <Grid item xs={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',  // Center horizontally
                        alignItems: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap', // Allow icons to wrap when the screen size is small
                    }}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '55px', height: '55px' }}>
                                <Flask colour="lightgreen" />
                            </div>
                            <Typography variant="body2">Flask</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '55px', height: '55px' }}>
                                <img src={JINJA} alt="Jinja Logo" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <Typography variant="body2">Jinja</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '50px', height: '50px' }}>
                                <Heroku colour="lightgreen" />
                            </div>
                            <Typography variant="body2">Heroku</Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <List
                        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                <ChecklistIcon />List of tasks completed
                            </ListSubheader>
                        }
                    >
                        {
                            recipeAppTasks.map((task) => {
                                return (
                                    <ListItemButton key={task.id}>
                                        <ListItemIcon>
                                            <DoneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={task.details} />
                                    </ListItemButton>
                                )
                            })
                        }

                    </List>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        <Link href="https://focused-neumann-3db077.netlify.app/" underline="hover">
                            <Typography variant="h4" component="span">Movie App</Typography>
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row' }}>
                        <Link href="https://github.com/firepenguindisopanda/DCIT-Movie-App" underline="hover" >
                            <Typography variant="h4" component="span">MovieApp Repository</Typography>
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        Technologies used: AngularJS, MaterialUI, Github Actions, Netlify
                    </Typography>
                </Grid>
                <Grid item xs={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',  // Center horizontally
                        alignItems: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap', // Allow icons to wrap when the screen size is small
                    }}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '55px', height: '55px' }}>
                                <Angular colour="lightgreen" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '55px', height: '55px' }}>
                                <MaterialUi colour="lightgreen" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '55px', height: '55px' }}>
                                <GithubIcon colour="lightgreen" />
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <List
                        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                <ChecklistIcon />List of tasks completed
                            </ListSubheader>
                        }
                    >
                        {
                            movieAppTasks.map((task) => {
                                return (
                                    <ListItemButton key={task.id}>
                                        <ListItemIcon>
                                            <DoneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={task.details} />
                                    </ListItemButton>
                                )
                            })
                        }

                    </List>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        <Link href="https://nicksportfolio.tech/" underline="hover">
                            <Typography variant="h4" component="span">Portfolio Website</Typography>
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row' }}>
                        <Link href="https://github.com/firepenguindisopanda/react-portfolio-website" underline="hover" >
                            <Typography variant="h4" component="span">Portfolio Repository</Typography>
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        Technologies used: React (frontend), Material UI, Firebase (hosting)
                    </Typography>
                </Grid>
                <Grid item xs={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',  // Center horizontally
                        alignItems: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap', // Allow icons to wrap when the screen size is small
                    }}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '55px', height: '55px' }}>
                                <ReactIcon colour="lightgreen" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '55px', height: '55px' }}>
                                <MaterialUi colour="lightgreen" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '55px', height: '55px' }}>
                                <FirebaseIcon colour="lightgreen" />
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <List
                        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                <ChecklistIcon />List of tasks completed
                            </ListSubheader>
                        }
                    >
                        {
                            portfolioAppTasks.map((task) => {
                                return (
                                    <ListItemButton key={task.id}>
                                        <ListItemIcon>
                                            <DoneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={task.details} />
                                    </ListItemButton>
                                )
                            })
                        }

                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Projects;