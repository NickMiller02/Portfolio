// Imports - React & Material UI
import React from 'react';
import theme from '..';
import { Link } from 'react-router-dom';
import { Typography, AppBar, CssBaseline, Toolbar, Stack, Button } from '@mui/material';


// Nav Function
export const Nav = () => {


    return (
        <>  
            {/* Styles Nav Bar */}
            <CssBaseline />
            <AppBar sx={{ display: "flex", bgcolor: theme.palette.secondary.main }}>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Nick's Portfolio
                    </Typography>

                    {/* Lists and Links each page/tab */}
                    <Stack direction='row' spacing={2}>
                        <Link to='/'>
                            <Button variant='contained'>Home</Button>
                        </Link>
                        <Link to='portfolio'>
                            <Button variant='contained'>Portfolio</Button>
                        </Link>
                        <Link to='resume'>
                            <Button variant='contained'>Resume</Button>
                        </Link>
                        <Link to='contact'>
                            <Button variant='contained'>Contact</Button>
                        </Link>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Nav;