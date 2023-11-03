import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Badge from '@mui/material/Badge';
import PropTypes from 'prop-types';
import FRONTENDGIF from '../../assets/frontend.gif'
import TECHNICALTOOLS from '../../assets/technical-tools-68.png'
import {
    DataScience
} from '../SvgIcons';
import "./TE.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TechnicalExperience = [
    {
        value: 0,
        title: "Frontend Development",
        membersOf: [
            'ReactJS',
            'HTML',
            'CSS',
            'Javascript',
            'Typescript',
            'Material UI',
            'Bootstrap',
            'React Bootstrap',
            'Tailwind CSS',
            'AngularJS',
            'Scss',
            'Sass',
            'JQuery',
            'AJAX',
            'JSON',
        ]
    },
    {
        value: 1,
        title: "Backend Development",
        membersOf: [
            'NodeJS',
            'ExpressJS',
            'MongoDB',
            'MySQL',
            'PostgreSQL',
            'Firebase',
            'PHP',
            'Python',
            'Java',
            'Spring Boot',
            'MYSQL',
            'SQLite',
            'C++',
            'C#',
            'C',
            'Dart',
            'Bash Scripting'
        ]
    },
    {
        value: 2,
        title: "Technical Tools",
        membersOf: [
            'Vim',
            'Git',
            'Github',
            'Docker',
            'Trello',
            'Jenkins',
            'AWS',
            'Google Cloud',
            'Nginx',
            'Apache',
        ]
    },
    {
        value: 3,
        title: "Problem Solving Practice",
        membersOf: [
            'Leetcode',
            'Hackerrank',
            'Codeforces',
            'Codechef',
            'Topcoder',
            'Atcoder',
            'SPOJ',
            'CodeWars'
        ]
    },
    {
        value: 4,
        title: 'Data Science & Machine Learning Skill (Work In Progress)',
        membersOf: [
            'Python',
            'Numpy',
            'Pandas',
            'Matplotlib',
            'Seaborn',
            'Scikit-Learn',
            'Tensorflow',
            'Keras',
            'PyTorch',
            'Jupyter Notebook',
            'Google Colab',
            'Power BI',
        ]
    }
]

const TechnicalExperiences = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{
            flexGrow: 1,
            p: 2,
            marginTop: '3rem',
            marginBottom: '10rem',
            bgcolor: 'background.paper',
            borderRadius: '.25rem',
            boxShadow: '0 3px 5px 2px rgba(46, 204, 113, 0.3)',
            width: '100%',
            height: '100%',
            typography: 'body1'
        }}>
            <Box>
                <Typography variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <WorkOutlineIcon color='secondary' /><Typography variant="h4" color='primary' component="span" sx={{ marginRight: '1rem', marginLeft: '1rem', fontFamily: 'Croissant One, cursive' }}>Technical Experience</Typography><WorkOutlineIcon color='secondary' />
                </Typography>
                <Typography variant="body1" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: '1rem' }}>
                    <div style={{ width: '55px', height: '55px' }}>
                        <img src={FRONTENDGIF} alt="frontend" className="frontend" width={55} height={55} />
                    </div>
                    <div style={{ width: '55px', height: '55px', marginLeft: '1rem' }}>
                        <img src={TECHNICALTOOLS} alt="technical-tools" className="technical-tools" width={55} height={55} />
                    </div>
                    <div style={{ width: '55px', height: '55px', marginLeft: '1rem' }}>
                        <DataScience colour="lightgreen" />
                    </div>
                </Typography>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        TechnicalExperience.map((item) => {
                            return (
                                <Tab key={item.title} label={item.title} {...a11yProps(item.value)} />
                            )
                        })
                    }
                </Tabs>
            </Box>
            {
                TechnicalExperience.map((item) => {
                    return (
                        <CustomTabPanel value={value} index={item.value} key={item.value}>
                            <Typography variant="h5" component="div">{item.title}</Typography>
                            <Grid container spacing={2}>
                                {item.membersOf.map((skill) => (
                                    <Grid item xs={6} sm={4} md={3} key={skill}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: 'row',
                                                p: 2,
                                                borderRadius: '.25rem',
                                                border: '1px solid #ccc',
                                                position: 'relative', // Add position relative
                                                transition: 'background-color 0.3s',
                                                '&:hover': {
                                                    backgroundColor: '#f0f0f0',
                                                    color: '#000',
                                                },
                                            }}
                                        >
                                            <Typography variant="h6" component="div" sx={{ marginRight: '1rem', marginLeft: '1rem' }}>
                                                {skill}
                                            </Typography>
                                            <Badge // Add Badge component for the green badge
                                                color="success"
                                                overlap="circular"
                                                badgeContent="experience"
                                                classes={{ badge: 'MuiBadge-rectangularBadge' }}
                                                sx={{
                                                    position: 'absolute',
                                                    top: 15,
                                                    right: 15,
                                                    transform: 'rotate(45deg)', // Rotate the badge diagonally
                                                    borderRadius: '0px',
                                                    padding: '4px 8px',
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </CustomTabPanel>
                    )
                })
            }
        </Box>

    )
}

export default TechnicalExperiences