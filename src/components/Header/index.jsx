import { Box, Button, ButtonGroup, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import data from "./data.json"
import logo from "assets/Logo.svg"

const Header = () => {
    return (
        <Box as="header" pb={{ base: '12', md: '6' }} py={{ base: '4', lg: '5' }} px="16px">
            <Box maxW="4xl" margin="0 auto">
                <HStack spacing="10" justify="space-between" maxW="6xl">
                    <img src={logo} width="190px" />
                    <ButtonGroup variant="primaryGhost" spacing="0">
                        {
                            data.map((e) => {
                                return <Link to={e.url} key={e.name}><Button>{e.name}</Button></Link>
                            })
                        }
                    </ButtonGroup>
                </HStack>
            </Box>
        </Box>
    );
}

export default Header;