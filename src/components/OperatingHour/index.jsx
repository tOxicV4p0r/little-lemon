import { Box, Button, ButtonGroup, Divider, Flex, Grid, GridItem, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import data from "./data.json"
import { Fragment } from "react";

const Operation = () => {
    return (
        <Box maxW="xl" pt="10px">
            <Divider />
            <Grid templateColumns="0.8fr 1.1fr 1.1fr" gap="4" pt="15px">
                <GridItem><Text fontSize="md" fontWeight="700" color="primary.green">Day</Text></GridItem>
                <GridItem><Text fontSize="md" fontWeight="700" color="primary.green" textAlign="end">Lunch</Text></GridItem>
                <GridItem><Text fontSize="md" fontWeight="700" color="primary.green" textAlign="end">Dinner</Text></GridItem>
                {
                    data.map((e) => {
                        return (
                            <Fragment key={e.day}>
                                <GridItem colSpan={3}><Divider /></GridItem>
                                <GridItem><Text fontSize="md" color="primary.green">{e.day}</Text></GridItem>
                                <GridItem textAlign="end"><Text fontSize="md" color="primary.green">{e.lunch}</Text></GridItem>
                                <GridItem textAlign="end"><Text fontSize="md" color="primary.green">{e.dinner}</Text></GridItem>
                            </Fragment>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}

export default Operation;