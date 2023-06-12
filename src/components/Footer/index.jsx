import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import logo from "assets/logo_white.png"
import data from "./data.json"

const Footer = () => {
    return (
        <Box as="footer" py={{ base: '16' }} px="16px" bg="primary.green" >
            <Box maxW="4xl" margin="0 auto">
                <Flex justifyContent="space-between">
                    <Image src={logo} height="160px" />
                    {
                        data.map((e) => {
                            return (
                                <Box color="highlight.white" key={e.section}>
                                    <VStack alignItems="start" gap="3px">
                                        <Text fontSize="md" fontWeight="700">{e.section}</Text>
                                        {
                                            e.links.map((link, i) => <Text key={link.name + i} fontSize="md" >{link.name}</Text>)
                                        }
                                    </VStack>
                                </Box>
                            )
                        })
                    }
                </Flex>
                <Flex justifyContent="flex-end">
                    <Text color="primary.yellow" fontSize="sm" fontWeight="300">Copyright © 2023 Little Lemon | Powered by Chakra-UI</Text>
                </Flex>
            </Box>
        </Box>
    )
}
export default Footer;