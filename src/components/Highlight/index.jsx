import { Box, Button, Card, CardBody, CardFooter, Flex, Grid, GridItem, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import imgSalad from "assets/greek salad.jpg"
import imgBruschetta from "assets/bruchetta.svg"
import imgDessert from "assets/lemon dessert.jpg"

const Highlight = () => {
    return (
        <Box as="section" py={{ base: '16' }} px="16px">
            <Box maxW="4xl" margin="0 auto">
                <Box my="30px">
                    <Flex justifyContent="space-between">
                        <Heading variant="primary" size="2xl">This week special!</Heading>
                        <Button variant="primary">Online Menu</Button>
                    </Flex>
                </Box>
                <Box my="40px">
                    <Flex justifyContent="space-between">
                        <Card maxW="270px">
                            <Image src={imgSalad} height="270px" fit="cover" borderRadius="5px 5px 0 0" />
                            <CardBody bg="primary.bg">
                                <Box>
                                    <Flex justifyContent="space-between" alignItems="center" my="16px">
                                        <Heading size="md">Greek Salad</Heading>
                                        <Heading size="sm" color="secondary.red">$12.99</Heading>
                                    </Flex>
                                    <Text fontSize="md" color="primary.green">
                                        The famous greek salad of crispy lettuce, peppers, olives
                                        and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                                    </Text>
                                </Box>
                            </CardBody>
                            <CardFooter bg="primary.bg">
                                <Button variant="outline" width="100%" color="primary.green">Order a delivery</Button>
                            </CardFooter>
                        </Card>

                        <Card maxW="270px">
                            <Image src={imgBruschetta} height="270px" fit="cover" borderRadius="5px 5px 0 0" />
                            <CardBody bg="primary.bg">
                                <Box>
                                    <Flex justifyContent="space-between" alignItems="center" my="16px">
                                        <Heading size="md">Bruschetta</Heading>
                                        <Heading size="sm" color="secondary.red">$6.99</Heading>
                                    </Flex>
                                    <Text fontSize="md" color="primary.green">
                                        Our Bruschetta is made from grilled bread that has been 
                                        smeared with garlic and seasoned with salt and olive oil.
                                    </Text>
                                </Box>
                            </CardBody>
                            <CardFooter bg="primary.bg">
                                <Button variant="outline" width="100%" color="primary.green">Order a delivery</Button>
                            </CardFooter>
                        </Card>

                        <Card maxW="270px">
                            <Image src={imgDessert} height="270px" fit="cover" borderRadius="5px 5px 0 0" />
                            <CardBody bg="primary.bg">
                                <Box>
                                    <Flex justifyContent="space-between" alignItems="center" my="16px">
                                        <Heading size="md">Lemon Dessert</Heading>
                                        <Heading size="sm" color="secondary.red">$5.29</Heading>
                                    </Flex>
                                    <Text fontSize="md" color="primary.green">
                                        This comos straight from grandma's recipe book, every last
                                        ingredient has been sourced and is as authentic as can be imagined.
                                    </Text>
                                </Box>
                            </CardBody>
                            <CardFooter bg="primary.bg">
                                <Button variant="outline" width="100%" color="primary.green">Order a delivery</Button>
                            </CardFooter>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
export default Highlight;