import { Box, Button, ButtonGroup, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "assets/Logo.svg"

const menus = [
    {
        name: 'Home',
        url: "/",
    },
    {
        name: 'About',
        url: "/",
    },
    {
        name: 'Menu',
        url: "/",
    },
    {
        name: 'Resevations',
        url: "/",
    },
    {
        name: 'Order Online',
        url: "/",
    },
    {
        name: 'Login',
        url: "/",
    },
];

const Header = () => {
    return (
        <Box as="header" pb={{ base: '12', md: '24' }} py={{ base: '4', lg: '5' }} boxShadow="sm">
            <Box maxW="5xl" margin="0 auto">
                <HStack px="16px" spacing="10" justify="space-between" maxW="6xl">
                    <img src={logo} width="190px" />
                    <ButtonGroup variant="text" spacing="0">
                        {
                            menus.map((e) => {
                                return <Button key={e.name}><Link to={e.url}>{e.name}</Link></Button>
                            })
                        }
                    </ButtonGroup>
                </HStack>
            </Box>
        </Box>
    );
}

export default Header;