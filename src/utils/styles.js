// Imports - React & MUI Styles
import React from 'react';
import { GlobalStyles } from '@mui/material';

// App Styles
const useStyles = GlobalStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
}));

export default useStyles;