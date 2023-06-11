import { StarIcon } from "@chakra-ui/icons";
import { Avatar, Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Grid, GridItem, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Testimonial = () => {
    return (
        <Box as="section" py={{ base: '16' }} px="16px" bg="secondary.bg" >
            <Box maxW="4xl" margin="0 auto">
                <Box>
                    <Heading variant="primary" color="primary.green" alignItems="center">What our customers say</Heading>
                    <Flex justifyContent="space-between" my="40px">
                        <Card maxW='200px'>
                            <CardBody>
                                <Flex spacing='4' mb='4'>
                                    <Flex flex='1' gap='4' alignItems='center'>
                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                        <Box>
                                            <Heading size='sm'>Segun Adebayo</Heading>
                                            <StarIcon color="primary.yellow" mr='1' />
                                            <StarIcon color="primary.yellow" mr='1' />
                                            <StarIcon color="primary.yellow" mr='1' />
                                            <StarIcon color="primary.yellow" mr='1' />
                                        </Box>
                                    </Flex>
                                </Flex>
                                <Text fontSize="md" color="primary.green">
                                    It's not just dining, but an anazing overall experience.
                                </Text>
                            </CardBody>
                        </Card>

                        <Card maxW='200px'>
                            <CardBody>
                                <Flex spacing='4' mb='4'>
                                    <Flex flex='1' gap='4' alignItems='center'>
                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                        <Box>
                                            <Heading size='sm'>Ryan Florence</Heading>
                                            <StarIcon color="primary.yellow" mr='1' />
                                            <StarIcon color="primary.yellow" mr='1' />
                                            <StarIcon color="primary.yellow" mr='1' />
                                        </Box>
                                    </Flex>
                                </Flex>
                                <Text fontSize="md" color="primary.green">
                                    Fabulous fantastic and everything I had imagined.
                                </Text>
                            </CardBody>
                        </Card>

                        <Card maxW='200px'>
                            <CardBody>
                                <Flex spacing='4' mb='4'>
                                    <Flex flex='1' gap='4' alignItems='center'>
                                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                        <Box>
                                            <Heading size='sm'>Kent Doddsy</Heading>
                                            <StarIcon color="primary.yellow" mr='1' />
                                            <StarIcon color="primary.yellow" mr='1' />
                                            <StarIcon color="primary.yellow" mr='1' />
                                            <StarIcon color="primary.yellow" mr='1' />
                                        </Box>
                                    </Flex>
                                </Flex>
                                <Text fontSize="md" color="primary.green">
                                    Excellent and fast service, fresh and delicious food.
                                </Text>
                            </CardBody>
                        </Card>

                        <Card maxW='200px'>
                            <CardBody>
                                <Flex spacing='4' mb='4'>
                                    <Flex flex='1' gap='4' alignItems='center'>
                                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                        <Box>
                                            <Heading size='sm'>Prosper Otemuyiwa</Heading>
                                            <StarIcon color="primary.yellow" mr='1' />
                                            <StarIcon color="primary.yellow" mr='1' />
                                            <StarIcon color="primary.yellow" mr='1' />
                                        </Box>
                                    </Flex>
                                </Flex>
                                <Text fontSize="md" color="primary.green">
                                    Nice restaurant, I loved the food, value for money.
                                </Text>
                            </CardBody>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
export default Testimonial;