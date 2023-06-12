import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ReservForm from "components/ReservForm";
import imageBg from "assets/restauranfood.jpg"
import OperatingHour from "components/OperatingHour";

const Reservation = () => {
    return (
        <Box>
            <Box as="section" py={{ base: '10', lg: '10' }} px="16px" bg="primary.green" >
                <Flex maxW="4xl" margin="0 auto" justifyContent="space-between">
                    <Box>
                        <Heading variant="primary" color="primary.yellow" size="2xl">Reservation</Heading>
                        <Heading variant="primary" color="highlight.white" size="lg" pb="10px"></Heading>
                        <Text color="highlight.white" width="30ch" pb="10px">
                            Please be on time for your reservation to guarantee your seating.
                        </Text>
                    </Box>
                    <Image
                        fit="cover"
                        boxSize="500px"
                        src="./assets/restaurant.jpg"
                        alt='restauranfood'
                        height="200px"
                        rounded="16px"
                        boxShadow="lg"
                    />
                </Flex>
            </Box>
            <Box as="section" py={{ base: '10', lg: '10' }} px="16px" >
                <Flex maxW="4xl" margin="0 auto" justifyContent="space-between">
                    <Box w="35%">
                        <Flex justifyContent="center" pb="10px">
                            <Heading size="md" variant="secondary" color="primary.green">Operating hours</Heading>
                        </Flex>
                        <OperatingHour />
                    </Box>
                    <Box>
                        <Flex justifyContent="center" pb="10px">
                            <Heading size="md" variant="secondary" color="primary.green">Reservation details</Heading>
                        </Flex>
                        <ReservForm />
                    </Box>
                </Flex>
            </Box>
        </Box>

    );
};

export default Reservation;