import {
    Box,
    Button, Center, HStack,
    Input,
    Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup, useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {SportEvent} from "../types";
import axios from "axios";

const BetDialog: React.FC<{ sportEvent: SportEvent }> = ({ sportEvent }) => {
    const [selectedOption, setSelectedOption] = useState<string>('A');
    const [inputValue, setInputValue] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [userId, setUserId] = useState<number | null>(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            setUserId(parseInt(storedUserId));
        }
    }, []);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(parseFloat(event.target.value));
    };

    const handleRadioChange = (value: string) => {
        setSelectedOption(value);
    };

    const handleSubmit = async () => {
        try {
            const betData = {
                userId: userId, // Replace with actual user ID as needed
                sportEventId: sportEvent.id,
                side: selectedOption,
                payIn: inputValue,
            };

            const response = await axios.post('http://localhost:5287/api/Bet', betData);
            console.log('Response:', response.data);
            window.location.reload();
            onClose();
        } catch (error) {
            console.error('Error submitting bet:', error);
        }
    };

    const onClose = () => {
        setIsOpen(false);
    };

    const onOpen = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Center>
                <Button onClick={onOpen} colorScheme="primary">
                    Bet
                </Button>
            </Center>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={useColorModeValue("white", "brand.900")} color={useColorModeValue("brand.900", "brand.50")}>
                    <ModalHeader>Select a side for {sportEvent.teamA} vs {sportEvent.teamB}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <RadioGroup onChange={handleRadioChange} value={selectedOption} mb={4}>
                            <HStack spacing={4}>
                                <Radio value="A" colorScheme="brand">{sportEvent.teamA}</Radio>
                                <Radio value="B" colorScheme="brand">{sportEvent.teamB}</Radio>
                            </HStack>
                        </RadioGroup>
                        <Input
                            type="number"
                            placeholder="Enter your pay in"
                            value={inputValue}
                            onChange={handleInputChange}
                            mb={4}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="primary" mr={3} onClick={handleSubmit}>
                            Submit
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    );
};

export default BetDialog;
