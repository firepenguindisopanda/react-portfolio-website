import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import ListSubheader from '@mui/material/ListSubheader';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DoneIcon from '@mui/icons-material/Done';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



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
    const [currentProject, setCurrentProject] = useState(null);

    const handleProjectChange = (project) => {
        setCurrentProject(project);
    };
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Box sx={{ marginBottom: '2rem' }}>
                <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <WorkspacePremiumIcon color='secondary' /><Typography color='primary' variant="h4" component="span" sx={{ marginRight: '1rem', marginLeft: '1rem', fontFamily: 'Croissant One, cursive' }}>Work Experiences</Typography><WorkspacePremiumIcon color='secondary' />
                </Typography>
            </Box>
            <Box sx={{
                flexGrow: 1,
                marginTop: '3rem',
                marginBottom: '10rem',
                pt: 5,
                pb: 5,
                overflow: 'auto',
                maxHeight: '100vh'
            }}>

                <Timeline position={matches ? "alternate" : "left"}>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">May – July 2023</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <CardContent>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                                            <Typography variant="h6" component="span">Independent Developer, UWI, Department of Computing and Information Technology</Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <List
                                            sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', maxHeight: '300px', overflowY: 'auto' }}
                                            component="nav"
                                            aria-labelledby="nested-list-subheader"
                                            subheader={
                                                <ListSubheader component="div" id="nested-list-subheader">
                                                    <ChecklistIcon />List of tasks completed
                                                </ListSubheader>
                                            }
                                        >
                                            {
                                                beuwiProjectMay.map((task) => (
                                                    <ListItemButton key={task.id} onClick={() => handleProjectChange(task)}>
                                                        <ListItemIcon>
                                                            <DoneIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={task.details} />
                                                    </ListItemButton>
                                                ))
                                            }
                                        </List>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    {/* Repeat the same structure for other work experiences */}
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">July - August, 2022</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                                                <Typography variant="h6" component="span">Intern, UWI Department of Computing and Information Technology</Typography>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12} lg={12}>
                                            <List
                                                sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', maxHeight: '300px', overflowY: 'auto' }}
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"
                                                subheader={
                                                    <ListSubheader component="div" id="nested-list-subheader">
                                                        <ChecklistIcon />List of tasks completed
                                                    </ListSubheader>
                                                }
                                            >
                                                {
                                                    webThreeProject.map((task) => (
                                                        <ListItemButton key={task.id} onClick={() => handleProjectChange(task)}>
                                                            <ListItemIcon>
                                                                <DoneIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={task.details} />
                                                        </ListItemButton>
                                                    ))
                                                }
                                            </List>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">January, 2022</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'row', marginLeft: 3 }}>
                                                <Typography variant="h6" component="span">Independent Developer, UWI, Department of Computing and Information Technology</Typography>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12} lg={12}>
                                            <List
                                                sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', maxHeight: '300px', overflowY: 'auto' }}
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"
                                                subheader={
                                                    <ListSubheader component="div" id="nested-list-subheader">
                                                        <ChecklistIcon />List of tasks completed
                                                    </ListSubheader>
                                                }
                                            >
                                                {beuwiProjectJan.map((task) => (
                                                    <ListItemButton key={task.id} onClick={() => handleProjectChange(task)}>
                                                        <ListItemIcon>
                                                            <DoneIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={task.details} />
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    {currentProject && (
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Details of the selected project:
                                </Typography>
                                <Typography variant="body1" component="div">
                                    {currentProject.details}
                                </Typography>
                            </CardContent>
                        </Card>
                    )}
                </Timeline>
            </Box>
        </>
    )
}

export default WorkExperience