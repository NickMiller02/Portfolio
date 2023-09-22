// Imports - React & Material UI
import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode'
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import { TabList, TabPanels, TabPanel, Tab, Flex, Box, IconButton, Spacer } from '@chakra-ui/react';




// Nav Function
export const Nav = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    return (
        <Box h='60px' w='100%'>
            <Flex w='100%'>
                <a href='/'>Home</a>
                <a href='/portfolio'>Portfolio</a>
                <a href='/resume'>Resume</a>

                <Spacer></Spacer>
                <IconButton mt={2} mr={2} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
            </Flex>
        </Box>
    )
}

export default Nav;