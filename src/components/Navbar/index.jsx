import { Button, ButtonGroup, IconButton, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import data from "./data.json"
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    console.log(isNonMobile);

    return (
        <>
            {
                isNonMobile[0] ?
                    <ButtonGroup variant="primaryGhost" spacing="0">
                        {
                            data.map((e) => {
                                return <Link to={e.url} key={e.name}><Button>{e.name}</Button></Link>
                            })
                        }
                    </ButtonGroup >
                    :
                    <Menu>
                        <MenuButton
                            aria-label='Options'
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant='outline'
                            directio
                        />
                        <MenuList>
                            {
                                data.map((e) => {
                                    return <Link to={e.url} key={e.name}><MenuItem>{e.name}</MenuItem></Link>
                                })
                            }
                        </MenuList>
                    </Menu>
            }
        </>
    );
}

export default Navbar;