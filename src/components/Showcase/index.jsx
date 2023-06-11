import { Box, Button, ButtonGroup, Flex, Grid, HStack, Heading, Image, Text } from "@chakra-ui/react";
import imageShow from "assets/restauranfood.jpg"

const Showcase = () => {
    return (
        <Box as="section" pb={{ base: '12', md: '24' }} py={{ base: '4', lg: '5' }} boxShadow="sm" bg="primary.green">
            <Box maxW="5xl" margin="0 auto">
                <Grid gri>
                    <HStack px="16px" spacing="10" justify="space-between" maxW="6xl">
                        <Flex justifyContent="space-between">
                            <Box>
                                <Heading variant="primary" color="primary.yellow" size="2xl">Little Lemon</Heading>
                                <Heading variant="primary" color="highlight.white" size="lg">Chicago</Heading>
                                <Text color="highlight.white" width="35ch">
                                    We are a family owned Mediterranean restaurant,
                                    focused on traditional recipes served with a modern twist.
                                </Text>
                            </Box>
                            <Box>
                                <Image
                                    boxSize='250px'
                                    src={imageShow}
                                    alt='restauranfood'
                                />
                            </Box>
                        </Flex>
                    </HStack>
                </Grid>
            </Box>
        </Box>
    );
}

export default Showcase;