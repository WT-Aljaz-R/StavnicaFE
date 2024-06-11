import {Box, Heading, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {Bet} from "../types";

const BetTable: React.FC<{ bets: Bet[] }> = ({ bets }) => {
    return (
        <Box p={5}>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>User ID</Th>
                        <Th>Pay In</Th>
                        <Th>Pay Out</Th>
                        <Th>Sport Event ID</Th>
                        <Th>Side</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {bets.map(bet => (
                        <Tr key={bet.id}>
                            <Td>{bet.id}</Td>
                            <Td>{bet.userId}</Td>
                            <Td>{bet.payIn}</Td>
                            <Td>{bet.payOut}</Td>
                            <Td>{bet.sportEventId}</Td>
                            <Td>{bet.side}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default BetTable;