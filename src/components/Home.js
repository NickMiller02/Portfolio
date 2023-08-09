// Imports - React & Material UI
import React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, Box } from '@mui/material';
import theme from '..';

// Home Function
export const Home = () => {
    
    return (

        <CssBaseline>
        <Container
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                bgcolor: theme.palette.primary.dark,
            }}
        >
            <Container>
                <Box sx={{ 
                    display: "flex",
                    flexDirection: { xs: "column", md: "column" },
                    justifyContent: "flex",
                    bgcolor: theme.palette.primary.dark
                    }}
                >
                    <Typography variant='h4' sx={{ alignItems: "left" }}>Hi, I'm Nick,</Typography>
                    <Typography variant='h2' sx={{ alignItems: "left" }}>And I love creating and building 
                    
                    </Typography>
                </Box>
            </Container>
        </Container>
        </CssBaseline>
    )
}

export default Home;