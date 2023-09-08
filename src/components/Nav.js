// Imports - React & Material UI
import React from 'react';
import theme from '..';
import { Link } from 'react-router-dom';
import { TabList, TabPanels, TabPanel, Tab, Flex } from '@chakra-ui/react';


// Nav Function
export const Nav = () => {


    return (
        <Flex alignItems="center">
            <a href='/'>Home</a>
            <a href='/portfolio'>Portfolio</a>
            <a href='/resume'>Resume</a>
            <a href='/contact'>Contact</a>
        </Flex>
    )
}

export default Nav;