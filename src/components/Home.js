// Imports - React & Chakra UI
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Box, Circle, Container, Divider, Center, Flex, HStack, Image, Stack, Text, useColorMode, useMediaQuery, Tag } from '@chakra-ui/react';

// Home Function
export const Home = () => {
    
    // Dark mode using Color mode
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    // Screen Sizing
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Container bg={isDark ? 'blackAlpha' : "#eceff1"} maxW="100%">
            <Stack spacing={1} alignItems='center'>
                <HStack>
                    <Flex direction={isNotSmallerScreen ? "row" : "column"} 
                    spacing="200px" p={isNotSmallerScreen ? '32' : "0"} 
                    alignSelf="center">
                        <Box p="5" mt={isNotSmallerScreen ? '0' : 16}>
                            <Text fontSize='25px' fontWeight="semibold"> Hi! I'm </Text>
                            <Text fontSize='50px' fontWeight="bold"> Nick Miller </Text>
                        </Box>
                        <Center height="200px">
                            <Divider orientation='vertical' borderColor={isDark ? 'grey.100' : "blackAlpha"} />
                        </Center>
                        <Box p="5" mt={isNotSmallerScreen ? '0' : 16} w='500px'>
                            <Text fontSize='lg' fontWeight="semibold"> 
                                I began learning to code in late 2022 and graduated from the
                                University of Central Florida with a certificate in Full Stack Development!
                                Since then, I have been working on my portfolio and side projects.
                            </Text>
                        </Box>
                    </Flex>
                </HStack>

                <Box p="1" m={isNotSmallerScreen ? '16' : 32} bgColor={isDark ? 'gray.600' : 'gray.100'} 
                alignSelf="center" border="2px" boxShadow="xl" rounded="md">
                    <HStack>
                        <Stack>
                            <Text m='1' fontSize='25px' fontWeight="semibold">Title of Project</Text>
                            <Box m='1.5' w='300px' h='300px' bgColor='red.100' alignSelf='center' />
                        </Stack>
                        <Stack>
                            <Text m='1' fontSize='lg' fontWeight='semibold' w='500px'>
                                This is is a test paragraph to explain what I did to, I will explain what
                                languages, tools, and packages I used to create the project. I will also
                                explain my inspiration and what my future intentions for this project.
                            </Text>
                            <Divider />
                            <Box w='500px'>
                                <Tag m='1'>JS</Tag>
                                <Tag m='1'>React</Tag>
                                <Tag m='1'>Chakra</Tag>
                                <Tag m='1'>Apollo</Tag>
                                <Tag m='1'>NPM</Tag>
                            </Box>
                        </Stack>
                    </HStack>
                </Box>
            
                <HStack>
                    <Stack>
                        <Flex direction={isNotSmallerScreen ? "row" : "column"} 
                        spacing="200px" p={isNotSmallerScreen ? '32' : "16"} 
                        alignSelf="flex-start">
                        <Image alignSelf="center" mt={isNotSmallerScreen ? '0' : 12}
                            mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full"
                            backgroundColor="transparent" boxShadow="lg"
                            boxSize="300px" src='https://avatars.githubusercontent.com/u/113201258?v=4' />
                        </Flex>
                        <Circle position="absolute" bg="blue.100" opacity="0.3"
                        w="300px" h="300px" alignSelf="flex-start" />

                        <Box p='1' m={isNotSmallerScreen ? '16' : 32} align="flex-end" bgColor={isDark ? 'gray.700' : 'gray.100'} border='2px' boxShadow='xl' rounded='md'>
                            <Text m='2' fontSize='50px' fontWeight="bold" align="center">Contact Me</Text>
                            <Text fontSize="22px" fontWeight="semibold">Check Out My Most Recent Project!</Text>
                        </Box>
                    </Stack>
                    <Box p='1' m={isNotSmallerScreen ? '16' : 32} align="flex-end" bgColor='red.100'>
                        <Text m='2' fontSize='50px' fontWeight="bold" align="center">About Me</Text>
                        <Text fontSize="22px" fontWeight="semibold">Check Out My Most Recent Project!</Text>
                    </Box>
                </HStack>
            </Stack>
        </Container>
    )
}

export default Home;