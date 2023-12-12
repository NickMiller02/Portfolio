// Imports - React & Chakra UI
import React from 'react';
import { Box, Circle, Container, Divider, Center, Flex, HStack, Image, Stack, Text, useColorMode, useMediaQuery, Tag } from '@chakra-ui/react';


// Portfolio Function
export const Portfolio = () => {

    // Dark mode using Color mode
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    // Screen Sizing
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Box m={isNotSmallerScreen ? '16' : 32} bgColor={isDark ? 'gray.600' : 'gray.100'}
            border="2px" boxShadow="xl" rounded="md">
                <Stack>
                    <Text m='2' fontSize='50px' fontWeight="bold" align="center">Personal Projects</Text>
                </Stack>
            </Box>
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
        </Stack>
    )
}

export default Portfolio;