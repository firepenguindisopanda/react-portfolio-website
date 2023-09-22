import React from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Grid from '@mui/material/Grid';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import CertificateCard from '../TechnicalSkills/CertificateCard'

import PYTHONCERT from '../../assets/cert_it_auto_python.png'
import SUPPORTCERT from '../../assets/cert_it_support.png'
import PYTHONBADGE from '../../assets/cert_badge.png'
import SUPPORTBADGE from '../../assets/it_sup_badge.png'
import AUTOPYTHON from '../../assets/auto_real_task_python.png'
import BYTESNET from '../../assets/bytes_bits_comp_net.png'
import CONIFGCLOUD from '../../assets/config_manage_cloud.png'
import CRASHPYTHON from '../../assets/crash_course_python.png'
import ICPC from '../../assets/icpc_caribbean_finals.png'

const certificates = [
    {
        id: 1,
        label: 'IT Automation with Python',
        description: 'A brief description',
        imgPath: PYTHONCERT,
        URL: 'https://coursera.org/share/6ca25b8304c98181f813ea21bd629e66'

    },
    {
        id: 2,
        label: 'Google IT Support',
        description: 'A brief description',
        imgPath: SUPPORTCERT,
        URL: 'https://coursera.org/share/187b52eb3a16416812a97b36381e17d5'
    },
    {
        id: 3,
        label: 'It Automation with Python Badge',
        description: 'A brief description',
        imgPath: PYTHONBADGE,
        URL: 'https://www.credly.com/badges/0b73e2c3-3795-4343-a1fa-260e040bdc0a?source=linked_in_profile'
    },
    {
        id: 4,
        label: 'Google IT Support Badge',
        description: 'A brief description',
        imgPath: SUPPORTBADGE,
        URL: 'https://www.credly.com/badges/a734660f-1ece-4783-9e12-ca49d2933513?source=linked_in_profile'
    },
    {
        id: 5,
        label: 'Automate Real world Task with Python',
        description: 'A brief description',
        imgPath: AUTOPYTHON,
        URL: ''
    },
    {
        id: 6,
        label: 'The bits and bytes of Computer Networking',
        description: 'A brief description',
        imgPath: BYTESNET,
        URL: 'https://coursera.org/share/2a34e51a721220545bc3dd8bc576c093'
    },
    {
        id: 7,
        label: 'Configure and Manage Cloud',
        description: 'A brief description',
        imgPath: CONIFGCLOUD,
        URL: ''
    },
    {
        id: 8,
        label: 'Crash Course in Python',
        description: 'A brief description',
        imgPath: CRASHPYTHON,
        URL: ''
    },
    {
        id: 9,
        label: 'Finals of ICPC Caribbean',
        description: 'A brief description',
        imgPath: ICPC,
        URL: ''
    }
]
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const AcademicAchievements = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = certificates.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>
            <Box>
                {/* Academic Achievements header */}
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: '1rem',
                    borderBottom: '1px solid #ccc',
                }}>
                    <SchoolIcon sx={{ marginBottom: '1rem', marginRight: '1rem' }} />
                    <Typography variant="h4" component="h1" sx={{ marginBottom: '1rem' }}>
                        Academic Achievements
                    </Typography>
                    <SchoolIcon sx={{ marginBottom: '1rem', marginLeft: '1rem' }} />
                </Grid>

                {/* Left and Right sections */}
                <Grid container>
                    <Grid item xs={6}>
                        {/* Left section */}
                        <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
                            <Paper
                                square
                                elevation={0}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: 50,
                                    pl: 2,
                                    bgcolor: 'background.default',
                                }}
                            >
                                <Typography>{certificates[activeStep].label}</Typography>
                            </Paper>
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {certificates.map((step, index) => (
                                    <div key={step.label}>
                                        {Math.abs(activeStep - index) <= 4 ? (
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 355,
                                                    display: 'block',
                                                    maxWidth: 500,
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={step.imgPath}
                                                alt={step.label}
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        {/* Right section */}
                        {/* Add your content for the right section here */}
                        Right Section Content
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AcademicAchievements