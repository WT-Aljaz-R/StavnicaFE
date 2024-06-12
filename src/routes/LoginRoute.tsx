import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text, useColorModeValue
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";


const LoginRoute: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:5287/api/login', {
                username,
                password
            });

            const userId = response.data.id; // Assuming the response contains the user ID
            localStorage.setItem("userId", userId.toString());
            localStorage.setItem("userName", username);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <Stack spacing="6" textAlign="center">
                    <Heading size="xl">Log in to your account</Heading>
                    <Text color="gray.500">Don't have an account? <Link color="brand.500" href="/signup">Sign up</Link></Text>
                </Stack>
                <Box
                    p={{ base: '0', sm: '8' }}
                    bg={useColorModeValue("white", "brand.800")}
                    boxShadow={{ base: 'none', sm: 'md' }}
                    borderRadius="xl"
                >
                    <Stack spacing="6" py="6">
                        <Stack spacing="4">
                            <FormControl>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <Input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    bg={useColorModeValue("white", "brand.900")}
                                    borderColor={useColorModeValue("gray.300", "brand.700")}
                                    _focus={{ borderColor: useColorModeValue("blue.500", "brand.500") }}
                                />
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    bg={useColorModeValue("white", "brand.900")}
                                    borderColor={useColorModeValue("gray.300", "brand.700")}
                                    _focus={{ borderColor: useColorModeValue("blue.500", "brand.500") }}
                                />
                            </FormControl>
                        </Stack>
                        <Button
                            colorScheme="brand"
                            onClick={handleClick}
                            _hover={{ bg: useColorModeValue("brand.600", "brand.400") }}
                        >
                            Sign in
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
}

export default LoginRoute;