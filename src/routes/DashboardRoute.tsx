import {
    Box,
    Divider,
    Heading,
    HStack,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import BetTable from "../components/BetTable";
import {Bet, SportEvent} from "../types";
import SportEventTable from "../components/SportEventTable";
import {useEffect, useState} from "react";
import axios from "axios";

const DashboardRoute: React.FC = () => {
    const [bets, setBets] = useState<Bet[]>([]);
    const [sportEvents, setSportEvents] = useState<SportEvent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBets = async () => {
            try {
                const betResponse = await axios.get<Bet[]>('http://localhost:5287/user/'+localStorage.getItem("userId")); // Replace with your actual API endpoint
                setBets(betResponse.data);
            } catch (error) {
                console.error('Error fetching bets:', error);
            }
        };

        const fetchSportEvents = async () => {
            try {
                const sportEventResponse = await axios.get<SportEvent[]>('http://localhost:5287/api/SportEvent'); // Replace with your actual API endpoint
                setSportEvents(sportEventResponse.data);
            } catch (error) {
                console.error('Error fetching sport events:', error);
            }
        };

        fetchBets();
        fetchSportEvents();
        setLoading(false);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Box p={8} minH="100vh" bg={"brand.50"}>
            <VStack spacing={8}>
                <Heading as="h1" size="2xl" mb={5} textAlign="center" color="primary.500">
                    Stavnica
                </Heading>
                <HStack spacing={8} w="full" justifyContent="space-around">
                    <Box
                        w={{ base: "100%", md: "45%" }}
                        p={5}
                        bg="white"
                        boxShadow="md"
                        borderRadius="lg"
                    >
                        <Heading as="h2" size="lg" mb={4} textAlign="center" color="primary.600">
                            Bets
                        </Heading>
                        <Divider mb={4} />

                        <BetTable bets={bets} />
                    </Box>

                    <Box
                        w={{ base: "100%", md: "45%" }}
                        p={5}
                        bg="white"
                        boxShadow="md"
                        borderRadius="lg"
                    >
                        <Heading as="h2" size="lg" mb={4} textAlign="center" color="primary.600">
                            Sport Events
                        </Heading>
                        <Divider mb={4} />
                         <SportEventTable sportEvents={sportEvents} />
                    </Box>
                </HStack>
            </VStack>
        </Box>
    );
};

export default DashboardRoute;