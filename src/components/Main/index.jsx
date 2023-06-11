import { Box } from "@chakra-ui/react";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <Box as="main">
            <Header />
            <Outlet />
        </Box>
    )
}

export default Main;