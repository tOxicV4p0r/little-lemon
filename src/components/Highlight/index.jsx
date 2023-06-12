import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Text } from "@chakra-ui/react";
import data from "./data.json"

const Highlight = () => {
    return (
        <Box as="section" py={{ base: '16' }} px="16px">
            <Box maxW="4xl" margin="0 auto">
                <Box my="30px">
                    <Flex justifyContent="space-between">
                        <Heading variant="primary" color="primary.green">This week special!</Heading>
                        <Button variant="primary">Online Menu</Button>
                    </Flex>
                </Box>
                <Box my="40px">
                    <Flex justifyContent="space-between">
                        {
                            data.map((e) => {
                                return (
                                    <Card maxW="270px" key={e.key}>
                                        <Image src={e.picture} height="270px" fit="cover" borderRadius="5px 5px 0 0" boxShadow='xl' />
                                        <CardBody bg="primary.bg">
                                            <Box>
                                                <Flex justifyContent="space-between" alignItems="center" my="16px">
                                                    <Heading size="lg" variant="primary">{e.name}</Heading>
                                                    <Heading size="sm" color="primary.yellow">${e.price}</Heading>
                                                </Flex>
                                                <Text fontSize="md" color="primary.green">{e.description}</Text>
                                            </Box>
                                        </CardBody>
                                        <CardFooter bg="primary.bg">
                                            <Button variant="primaryOutline" width="100%" color="primary.green">Order a delivery</Button>
                                        </CardFooter>
                                    </Card>
                                )
                            })
                        }
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
export default Highlight;