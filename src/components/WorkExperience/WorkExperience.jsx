import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DoneIcon from '@mui/icons-material/Done';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const webThreeProject = [
    {
        id: 1,
        details: "Created scripts to automatically deploy applications using Jenkins CI / CD pipeline.",
    },
    {
        id: 2,
        details: "Updated the Flask API with new functions and routes to send data to the frontend applications.",
    },
    {
        id: 3,
        details: "Created 5 Angular Blockchain Web3 Applications and connected them to the Flask API and the Blockchain.",
    },
    {
        id: 4,
        details: "Created Unit Test for the 5 Angular Blockchain Web3 Applications to automatically run on the Jenkins Server before deploying.",
    }
];

const beuwiProjectJan = [
    {
        id: 1,
        details: "Updated existing Angular Applications to the latest version, fixing errors that occured.",
    },
    {
        id: 2,
        details: "Updated existing search feature to autocomplete search."
    },
    {
        id: 3,
        details: "Identified and fixed bugs with the existing application. The fix contributed to the overall user experience of the application."
    },
    {
        id: 4,
        details: "Changed CircleCI workflow to Github Actions."
    }
];

const beuwiProjectMay = [
    {
        id: 1,
        details: "Performed migration and dependencies updates",
    },
    {
        id: 2,
        details: "Deployed updates to staging and production environments",
    },
    {
        id: 3,
        details: "Created various software design artefacts.",
    },
    {
        id: 4,
        details: "Implemented the system according to the design artefacts and requirements.",
    },
    {
        id: 5,
        details: "Performed unit testing.",
    },
    {
        id: 6,
        details: "Delivered a prototype deployment of the system."
    },
    {
        id: 7,
        details: "Updated routes and controllers for the backend to successfully handle errors and exceptions."
    }
];

const WorkExperience = () => {
    const [showScrollbar, setShowScrollbar] = useState(true);

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        setShowScrollbar(scrollTop + clientHeight < scrollHeight);
    };
    return (
        <Box
            onScroll={handleScroll}
            sx={{
                flexGrow: 1,
                overflowY: showScrollbar ? 'auto' : 'hidden',
                marginTop: 5,
                pt: 5,
                pb: 5,
                maxHeight: '600px',
                borderRadius: '.25rem',
                boxShadow: '0 3px 5px 2px rgba(255, 140, 0, 0.3)',
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(0, 0, 0, 0.2)',
                },
            }}
        >
            <Box sx={{ marginBottom: '2rem' }}>
                <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <WorkspacePremiumIcon /><Typography variant="h4" component="span" sx={{ marginRight: '1rem', marginLeft: '1rem' }}>Work Experiences</Typography><WorkspacePremiumIcon />
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        <Typography variant="h4" component="span">Independent Developer, UWI, Department of Computing Information Technology</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right', flexDirection: 'row', paddingRight: '1rem' }}>
                        <Typography variant="h6" component="span">May - July, 2023</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        Technologies Used:
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
                            beuwiProjectMay.map((task) => {
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
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        <Typography variant="h4" component="span">Intern, UWI Department of Computing and Information Technology</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right', flexDirection: 'row', paddingRight: '1rem' }}>
                        <Typography variant="h6" component="span">July - August, 2022</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        Technologies Used:
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
                            webThreeProject.map((task) => {
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
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        <Typography variant="h4" component="span">Independent Developer, UWI, Department of Computing Information Technology</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right', flexDirection: 'row', paddingRight: '1rem' }}>
                        <Typography variant="h6" component="span">January, 2022</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                        Technologies Used:
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
                            beuwiProjectJan.map((task) => {
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
    )
}

export default WorkExperience