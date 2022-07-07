import { Box, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Box
            minH="100vh"
            w="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="#010101"
        >
            <Button
                h="10"
                w="48"
                rounded="full"
                colorScheme="blue"
                _focus={{}}
                _active={{}}
                as="a"
                href="https://github.com/kr-anurag/next-chakra-template"
                target="_blank"
                rel="noopener norefferer"
            >
                View Repository
            </Button>
        </Box>
    );
};

export default Home;
