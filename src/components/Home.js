// Imports - React & Material UI
import React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container } from '@mui/material';
import image3 from '../assets/images/image3.jpeg';

// Home Function
export const Home = () => {
    
    return (

        <CssBaseline>
        <Container maxWidth='xl' sx={{ bgcolor: '#f44336', height: "100vh" }}>
            <div>

                {/* Welcome Container */}
                <Container maxWidth='xl' style={{ marginTop: '100px' }} sx={{ bgcolor: 'tomato' }}>
                    <Typography variant='h3' align='center' color='textPrimary' gutterBottom>
                        Welcome!
                    </Typography>
                </Container>
            </div>
            <div>
                {/* Intro Text Container */}
                <Container maxWidth='xl' style={{ marginTop: '100px' }} sx={{ bgcolor: 'tomato' }}>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={6}>
                            <Typography variant='h5' align='center' color='textSecondary' paragraph>
                                Hi everyone, this is a test and hopefully it works!
                            </Typography>
                        </Grid>
                        {/* Intro Img Container */}
                        <Grid item xs={6}>
                            <img src={image3} style={{ width: 300, height: 400 }}  align='center' alt='Nicholas Miller'></img>
                        </Grid> 
                    </Grid>
                </Container>
            </div>
            <div>
                {/* Newest Project Container */}
                <Container>
                    <Grid container spacing={2} justify='center'>
                        <Grid item xs={6}>

                        </Grid>
                        <Grid item xs={6}>

                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Container>
        </CssBaseline>
    )
}

export default Home;