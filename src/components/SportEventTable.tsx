import {Box, Button, Heading, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {SportEvent} from "../types";
import BetDialog from "./BetDialog";

const SportEventTable: React.FC<{ sportEvents: SportEvent[] }> = ({ sportEvents }) => {
    return (
        <Box p={5}>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Team A</Th>
                        <Th>Team B</Th>
                        <Th>Side A</Th>
                        <Th>Side B</Th>
                        <Th>Winner</Th>
                        <Th>Bet</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {sportEvents.map(event => (
                        <Tr key={event.id}>
                            <Td>{event.id}</Td>
                            <Td>{event.teamA}</Td>
                            <Td>{event.teamB}</Td>
                            <Td>{event.sideA}</Td>
                            <Td>{event.sideB}</Td>
                            <Td>{event.winner}</Td>
                            <Td><BetDialog sportEvent={event}/></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default SportEventTable;