// Imports - React & Chakra UI
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Box, Container, Flex, HStack, Stack, Text, useMediaQuery } from '@chakra-ui/react';

// Home Function
export const Home = () => {
    
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack spacing={1} alignItems='center'>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} 
            spacing="200px" p={isNotSmallerScreen ? '32' : "0"} 
            alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? '0' : 16} align="flex-start">
                    <Text fontSize='25px' fontWeight="semibold"> Hi! I'm </Text>
                    <Text fontSize='50px' fontWeight="bold"> Nick Miller </Text>
                </Box>
            </Flex>
            <Box bgColor="#2b6cb0" minW="100%">
                <HStack>
                    <Box p="1" m={isNotSmallerScreen ? '16' : 32} align="center" border="2px" boxShadow="xl" rounded="md">
                        <Text fontSize="25px" fontWeight="bold">Check Out My Most Recent Project!</Text>
                    </Box>
                    <Box p="1" m={isNotSmallerScreen ? '16' : 32} align="center" border="2px" boxShadow="xl" rounded="md">
                        <Text fontSize="25px" fontWeight="bold">Check Out My Most Recent Project!</Text>
                    </Box>
                    <Box p="1" m={isNotSmallerScreen ? '16' : 32} align="center" border="2px" boxShadow="xl" rounded="md">
                        <Text fontSize="25px" fontWeight="bold">Check Out My Most Recent Project!</Text>
                    </Box>
                </HStack>
            </Box>
        </Stack>
    )
}

export default Home;