import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const ExtraCurricular = () => {

    return <>
        <Box
            sx={{
                marginTop: '3rem',
            }}>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: '3rem',
                }}
            >
                <Typography variant="h4" component="h1" sx={{ marginBottom: '1rem', fontFamily: 'Croissant One, cursive' }}>
                    Extra Curricular Activities
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: '1rem',
                }}
            >
                <Timeline position="alternate">
                    {/* Add your volunteer experiences as TimelineItems */}
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">January – March 2023</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" component="span">
                                Volunteer Mentor, WiDS Datathon 2022 – U.W.I, D.C.I.T
                            </Typography>
                            <ul>
                                <li>Presented an interactive tutorial on the Exploratory Data Analysis using Titanic dataset and the WiDS Climate Change challenge dataset.</li>
                                <li>Lead a team of 4 competitors to complete the challenge and achieve 2nd place locally.
                                    <Button variant="contained" color="primary" href="https://www.linkedin.com/posts/nicholas-smith-933125148_certificate-of-participation-in-wids-2023-activity-7040796180926099457-wvrs?utm_source=share&utm_medium=member_desktop" target="_blank">Link To Certificate</Button>
                                </li>
                            </ul>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">June 2021 – March 2022</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" component="span">
                                Volunteer Mentor, Youth Speak Up Program – St. Augustine Rotary Club with U.W.I.
                            </Typography>
                            <ul>
                                <li>Demonstrated how to use Google Docs to write Letters to members of parliament.</li>
                                <li>Demonstrated how to use Google Sheets to create budgets.</li>
                                <li>Demonstrated how to use Google Slides to create presentations.</li>
                            </ul>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">July – August 2019</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" component="span">
                                Volunteer Mentor, U.W.I, D.C.I.T Robotics Boot Camp – St. Augustine
                            </Typography>
                            <ul>
                                <li>Assisted students in Python programming for a robot vehicle with vision sensors to solve a maze.</li>
                                <li>Awarded first place to my team for solving the maze challenge.</li>
                            </ul>
                        </TimelineContent>
                    </TimelineItem>

                </Timeline>
            </Grid>
        </Box>
    </>
}

export default ExtraCurricular