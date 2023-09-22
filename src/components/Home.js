// Imports - React & Chakra UI
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Box, Flex, Stack, useMediaQuery } from '@chakra-ui/react';

// Home Function
export const Home = () => {
    
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} 
            spacing="200px" p={isNotSmallerScreen ? '32' : "0"} 
            alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? '0' : 16} align="flex-start">
                    
                </Box>
            </Flex>
        </Stack>
    )
}

export default Home;