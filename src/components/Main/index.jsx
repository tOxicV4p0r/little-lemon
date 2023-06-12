import { Box } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <Box as="main">
            <Header />
            <Outlet />
            <Footer />
        </Box>
    )
}

export default Main;