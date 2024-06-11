import {Box, Button, Container, FormControl, FormLabel, Heading, Input, Link, Stack, Text} from "@chakra-ui/react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const SignUpRoute: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:5287/api/signup', {
                username,
                password
            });

            navigate('/login');
        } catch (error) {
            console.error('Sign up failed:', error);
            alert('Sign up failed. Please check your credentials and try again.');
        }
    };

    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading>Create a new account</Heading>
                    </Stack>
                </Stack>
                <Box
                    py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={{ base: 'transparent', sm: 'bg.surface' }}
                    boxShadow={{ base: 'none', sm: 'md' }}
                    borderRadius={{ base: 'none', sm: 'xl' }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <Input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>
                        </Stack>
                        <Stack spacing="6">
                            <Button onClick={handleClick}>Sign in</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}

export default SignUpRoute