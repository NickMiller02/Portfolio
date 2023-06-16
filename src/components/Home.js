// Imports - React & Material UI
import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';

// Home Function
export const Home = () => {

    return (
        <div>
            <Container maxWidth='sm'>
                <Typography variant='h3' align='center' color='textPrimary'>
                    Welcome!
                </Typography>
            </Container>
        </div>
    )
}

export default Home;