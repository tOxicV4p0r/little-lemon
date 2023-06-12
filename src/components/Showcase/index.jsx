import { Box, Button, ButtonGroup, Flex, Grid, GridItem, HStack, Heading, Image, Text } from "@chakra-ui/react";
import imageShow from "assets/restauranfood.jpg"
import { Link } from "react-router-dom";

const Showcase = () => {
    return (
        <Box as="section" py={{ base: '10', lg: '10' }} px="16px" bg="primary.green" >
            <Box maxW="4xl" margin="0 auto">
                <Grid templateColumns="repeat(2,1fr)">
                    <GridItem>
                        <Box>
                            <Heading variant="primary" color="primary.yellow" size="2xl">Little Lemon</Heading>
                            <Heading variant="primary" color="highlight.white" size="lg" pb="10px">Chicago</Heading>
                            <Text color="highlight.white" width="35ch" pb="10px">
                                We are a family owned Mediterranean restaurant,
                                focused on traditional recipes served with a modern twist.
                            </Text>
                            <Link to="/reservation"><Button variant="primary">Reserve a Table</Button></Link>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Flex justifyContent="flex-end">
                            <Image
                                fit="cover"
                                boxSize="290px"
                                src={imageShow}
                                alt='restauranfood'
                                position="absolute"
                                height="330px"
                                rounded="16px"
                                boxShadow="dark-lg"
                            />
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
}

export default Showcase;