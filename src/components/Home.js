// Imports - React & Material UI
import React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container } from '@mui/material';

// Home Function
export const Home = () => {

    return (
        <CssBaseline>
        <div>
            <Container maxWidth='sm' style={{ marginTop: '100px' }}>
                <Typography variant='h3' align='center' color='textPrimary' gutterBottom>
                    Welcome!
                </Typography>
            </Container>
        </div>
        <div>
            <Grid container spacing={2} justify="center">
                <Grid item>

                </Grid>

            </Grid>
        </div>
        </CssBaseline>
    )
}

export default Home;