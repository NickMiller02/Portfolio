// Imports - React & Material UI
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import { TabList, TabPanels, TabPanel, Tab, Flex, Box } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react/dist';



// Nav Function
export const Nav = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box h='60px' w='100%' borderWidth="1px">
            <Flex w='100%'>
                <a href='/'>Home</a>
                <a href='/portfolio'>Portfolio</a>
                <a href='/resume'>Resume</a>
            </Flex>
        </Box>
    )
}

export default Nav;