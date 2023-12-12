import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Divider, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import WorkIcon from '@mui/icons-material/Work';

const ExtraCurricular = () => {
    const [open, setOpen] = React.useState(false);
    const [openFirst, setOpenFirst] = React.useState(false);
    const [openSecond, setOpenSecond] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickFirst = () => {
        setOpenFirst(!openFirst);
    }
    const handleClickSecond = () => {
        setOpenSecond(!openSecond);
    }
    return (
        <Box sx={{
            flexGrow: 1,
            p: 2,
            marginTop: '3rem',
            marginBottom: '10rem',
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
                }}>
                    <Typography variant="h6" component="h6" color='secondary' sx={{ marginBottom: '1rem', fontFamily: 'Croissant One, cursive' }}>
                        Extra Curricular Activities
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '1rem',
                }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: 'gray', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Volunteer Mentor, WiDS Datathon 2022 / 23 – U.W.I, D.C.I.T
                    </Typography>
                    <ListItemButton onClick={handleClickFirst}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Activities" />
                        {openFirst ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openFirst} timeout="auto" unmountOnExit>

                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <CardMembershipIcon />
                                </ListItemIcon>
                                <Button size='small' color="primary" href="https://www.linkedin.com/posts/nicholas-smith-933125148_certificate-of-participation-in-wids-2023-activity-7040796180926099457-wvrs?utm_source=share&utm_medium=member_desktop" target="_blank">Link To Certificate</Button>

                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <WorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Presented an interactive tutorial on the Exploratory Data Analysis." />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <WorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lead a team of 4 competitors to complete the challenge and achieve 2nd place locally." />
                            </ListItemButton>
                        </List>
                    </Collapse>

                </Grid>
                <Divider />
                <Grid item xs={12} md={12} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '1rem',
                }}>
                    <Typography variant="subtitle1" component="span" sx={{ color: 'gray', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Volunteer Mentor, Youth Speak Up Program – St. Augustine Rotary Club with U.W.I.
                    </Typography>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Activities" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <WorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Demonstrated how to use Google Docs" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <WorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Demonstrated how to use Google Sheets" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <WorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Demonstrated how to use Google Slides" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </Grid>
                <Divider />
                <Grid item xs={12} md={12} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '1rem',
                }}>
                    
                    <Typography variant="subtitle1" component="span" sx={{ color: 'gray', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Volunteer Mentor, U.W.I, D.C.I.T Robotics Boot Camp – St. Augustine
                    </Typography>
                    <ListItemButton onClick={handleClickSecond}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Activities" />
                        {openSecond ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openSecond} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <WorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Assisted students in Python programming for a robot vehicle with vision sensors to solve a maze." />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <WorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Awarded first place to my team for solving the maze challenge." />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ExtraCurricular