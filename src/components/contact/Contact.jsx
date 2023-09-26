import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { Card, CardContent, CardActions, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wf5ex2f', 'template_0ouoimq', form.current, 'Mbp02i3iokIucc48d')
      .then((result) => {
        console.log(result.text);
      }
        , (error) => {
          console.log(error.text);
        });
    e.target.reset();
  };

  return (
    <Box id='contact'>
      <Grid container spacing={3} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '2rem',
        marginTop: '3rem',
      }}>
        <Typography variant='h5'>Want to collab on a project or get in touch?</Typography>
        <Typography variant='h2'>Contact Me</Typography>
      </Grid>

      <Container maxWidth='lg' sx={{
        marginBottom: '3rem',
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <MdOutlineEmail className='contact__option-icon' />
                  <Typography variant='h4'>Email</Typography>
                </Typography>
                <Typography variant="body2">
                  nicholas122008@hotmail.com
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><a href='mailto:nicholas122008@hotmail.com' target='_blank' rel='noreferrer' sx={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}>
                  Send a message
                </a></Button>
              </CardActions>
            </Card>

          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <BsWhatsapp className='contact__option-icon' />
                  <Typography variant='h4'>Whatsapp</Typography>
                </Typography>
                <Typography variant="body2">
                  686-4906
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><a href='https://api.whatsapp.com/send?phone=+18686864906' target='_blank' rel='noreferrer'>
                  Send a message
                </a></Button>
              </CardActions>
            </Card>

          </Grid>
        </Grid>
      </Container>

      <form ref={form} onSubmit={sendEmail}>
        <TextField fullWidth label='Your Full Name' name='name' required />
        <TextField fullWidth label='Your Email' name='email' required />
        <TextField fullWidth label='Your Message' name='message' multiline rows={7} required />
        <Button type='submit' variant='contained' color='primary'>
          Send Message
        </Button>
      </form>
    </Box>
  )
}

export default Contact
