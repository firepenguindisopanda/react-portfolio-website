import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CPlusPlus, Android, Javascript, Python, Windows, Java } from '../SvgIcons';
import ConstructionIcon from '@mui/icons-material/Construction';
import SvgIcon from '@mui/material/SvgIcon';
import JavascriptIcon from '@mui/icons-material/Javascript';
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
import { Divider } from '@mui/material';


const certificates = [
    {
        id: 1,
        name: 'IT Automation with Python',
        description: 'A brief description',
        image: PYTHONCERT

    },
    {
        id: 2,
        name: 'Google IT Support',
        description: 'A brief description',
        image: SUPPORTCERT
    },
    {
        id: 3,
        name: 'It Automation with Python Badge',
        description: 'A brief description',
        image: PYTHONBADGE
    },
    {
        id: 4,
        name: 'Google IT Support Badge',
        description: 'A brief description',
        image: SUPPORTBADGE
    },
    {
        id: 5,
        name: 'Automate Real world Task with Python',
        description: 'A brief description',
        image: AUTOPYTHON
    },
    {
        id: 6,
        name: 'The bits and bytes of Computer Networking',
        description: 'A brief description',
        image: BYTESNET
    },
    {
        id: 7,
        name: 'Configure and Manage Cloud',
        description: 'A brief description',
        image: CONIFGCLOUD
    },
    {
        id: 8,
        name: 'Crash Course in Python',
        description: 'A brief description',
        image: CRASHPYTHON
    },
    {
        id: 9,
        name: 'Finals of ICPC Caribbean',
        description: 'A brief description',
        image: ICPC
    }
]

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
            <Grid container spacing={1}>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <ConstructionIcon /><Typography variant="h4" component="h1">Technical Skills</Typography><ConstructionIcon />
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
                        boxShadow: '2px 13px 15px -13px rgba(255, 105, 135, .3)',
                        
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