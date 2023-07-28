import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PROFILE from '../../assets/prof_pic.jpg';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { SiCodewars, SiLeetcode, SiCodeforces } from 'react-icons/si'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[2],
  marginBottom: theme.spacing(2),
}));

const AboutMe = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {/* About Me */}
        <Grid item xs={12} md={8}>
          <Item>
            <Typography variant="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              I am a dedicated and passionate software engineer with a strong background in computer science and
              information technology. I have more than 1 year of experience in the industry, working on various
              challenging projects that have honed my skills in problem-solving and software development.
            </Typography>
            <Typography variant="body1" paragraph>
              Throughout my career, I have pursued continuous learning by enrolling in online courses to gain expertise
              in different cutting-edge technologies. These courses have provided me with an introductory understanding
              of various concepts, which I put to the test by working on personal side projects.
            </Typography>
            <Typography variant="body1" paragraph>
              Additionally, I actively engage in mentorship programs to contribute to the tech community. As a former
              executive member of the University of the West Indies Computing Society club, I presented on the benefits
              of Git / Github and helped fellow students enhance their software development skills.
            </Typography>
            <Typography variant="body1" paragraph>
              As a result of my enthusiasm for learning, I have accomplished a significant milestone by being awarded a
              Nano-Degree Scholarship in AI With Python by Udacity.
            </Typography>
            <Typography variant="body1" paragraph>
              I am always eager to take on new challenges and grow my skill set. If you have an exciting project or
              collaboration in mind, I would love to hear from you. Let's discuss how we can work together to achieve
              great things.
            </Typography>
            <Button href="#contact" variant="outlined" color="secondary">
              Let's Talk
            </Button>
          </Item>
        </Grid>
        {/* Placeholder for Picture of Me */}
        <Grid item xs={12} md={4}>
          <Item>
            <Box maxWidth="100%">
              <img src={PROFILE} alt="About Me" style={{ width: '100%', height: 'auto' }} />
            </Box>
          </Item>
          <Item>
            <Typography variant="h6" gutterBottom>
              Brief Summary
            </Typography>
            <Divider />
            <Typography variant="body1" paragraph>
              1+ Years Working
            </Typography>
          </Item>
          <Item>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Divider />
            <Box display="flex" justifyContent="space-between">
              <IconButton
                href="https://www.codewars.com/users/firepenguindisopanda"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ '&:hover': { transform: 'scale(1.2)', transition: 'transform 0.2s ease' } }}
              >
                <SiCodewars size={30} />
              </IconButton>
              <IconButton
                href="https://leetcode.com/NickSmith/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ '&:hover': { transform: 'scale(1.2)', transition: 'transform 0.2s ease' } }}
              >
                <SiLeetcode size={30} />
              </IconButton>
              <IconButton
                href="https://codeforces.com/profile/nicosmith.smith3"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ '&:hover': { transform: 'scale(1.2)', transition: 'transform 0.2s ease' } }}
              >
                <SiCodeforces size={30} />
              </IconButton>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;