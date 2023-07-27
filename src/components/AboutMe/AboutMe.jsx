import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AboutMe = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {/* On small screens, the Grid item on the right goes on top */}
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8} order={{ xs: 2, sm: 1 }}>
          <Item>About me</Item>
        </Grid>
        {/* On small screens, the Grid item on the left occupies the full width */}
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4} order={{ xs: 1, sm: 2 }}>
          <Item>Placeholder for Picture of me</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;