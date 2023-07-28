// Imports - React & Material UI
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, AppBar, CssBaseline, Toolbar, Stack } from '@mui/material';


// Nav Function
export const Nav = () => {


    return (
        <>  
            {/* Styles Nav Bar */}
            <CssBaseline />
            <AppBar sx={{ display: "flex" }}>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Nick's Portfolio
                    </Typography>

                    {/* Lists and Links each page/tab */}
                    <Stack direction='row' spacing={2}>
                        <Link to='/'>Home</Link>
                        <Link to='portfolio'>Portfolio</Link>
                        <Link to='resume'>Resume</Link>
                        <Link to='contact'>Contact</Link>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Nav;