import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CPlusPlus, Android, Javascript, Python, Windows, Java } from '../SvgIcons';
import ConstructionIcon from '@mui/icons-material/Construction';
import PYTHONCERT from '../../assets/cert_it_auto_python.png'
import SUPPORTCERT from '../../assets/cert_it_support.png'
import PYTHONBADGE from '../../assets/cert_badge.png'
import SUPPORTBADGE from '../../assets/it_sup_badge.png'
import AUTOPYTHON from '../../assets/auto_real_task_python.png'
import BYTESNET from '../../assets/bytes_bits_comp_net.png'
import CONIFGCLOUD from '../../assets/config_manage_cloud.png'
import CRASHPYTHON from '../../assets/crash_course_python.png'
import ICPC from '../../assets/icpc_caribbean_finals.png'
import CertificateCard from './CertificateCard';


const certificates = [
    {
        id: 1,
        name: 'IT Automation with Python',
        description: 'A brief description',
        image: PYTHONCERT,
        URL: 'https://coursera.org/share/6ca25b8304c98181f813ea21bd629e66'

    },
    {
        id: 2,
        name: 'Google IT Support',
        description: 'A brief description',
        image: SUPPORTCERT,
        URL: 'https://coursera.org/share/187b52eb3a16416812a97b36381e17d5'
    },
    {
        id: 3,
        name: 'It Automation with Python Badge',
        description: 'A brief description',
        image: PYTHONBADGE,
        URL: 'https://www.credly.com/badges/0b73e2c3-3795-4343-a1fa-260e040bdc0a?source=linked_in_profile'
    },
    {
        id: 4,
        name: 'Google IT Support Badge',
        description: 'A brief description',
        image: SUPPORTBADGE,
        URL: 'https://www.credly.com/badges/a734660f-1ece-4783-9e12-ca49d2933513?source=linked_in_profile'
    },
    {
        id: 5,
        name: 'Automate Real world Task with Python',
        description: 'A brief description',
        image: AUTOPYTHON,
        URL: ''
    },
    {
        id: 6,
        name: 'The bits and bytes of Computer Networking',
        description: 'A brief description',
        image: BYTESNET,
        URL: 'https://coursera.org/share/2a34e51a721220545bc3dd8bc576c093'
    },
    {
        id: 7,
        name: 'Configure and Manage Cloud',
        description: 'A brief description',
        image: CONIFGCLOUD,
        URL: ''
    },
    {
        id: 8,
        name: 'Crash Course in Python',
        description: 'A brief description',
        image: CRASHPYTHON,
        URL: ''
    },
    {
        id: 9,
        name: 'Finals of ICPC Caribbean',
        description: 'A brief description',
        image: ICPC,
        URL: ''
    }
]

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
                    <ConstructionIcon sx={{marginBottom: '1rem'}} /><Typography variant="h4" component="h1" sx={{marginBottom: '1rem', marginRight: '1rem', marginLeft: '1rem'}}>Technical Skills</Typography><ConstructionIcon sx={{marginBottom: '1rem'}} />
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
                        marginBottom: '1rem',
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
                </Grid>
                <Grid item xs={12} sx={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '1rem', // Add a gap between the cards
                    flexWrap: 'wrap', // Allow cards to wrap when the screen size is small
                }}>
                    {
                        certificates.map((certificate) => (
                            <CertificateCard key={certificate.id} certificate={certificate} />
                        ))
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default TechnicalSkills