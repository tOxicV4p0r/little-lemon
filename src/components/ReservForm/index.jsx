import { Box, Button, Checkbox, Container, Divider, Flex, FormControl, FormLabel, HStack, Heading, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text, Textarea } from "@chakra-ui/react";
import { DatePicker, Radio, Rate, TimePicker } from "antd";
import dayjs from 'dayjs';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import './styles.css'

const ReservForm = () => {

    return (
        <Box
            py={{ base: '5', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            boxShadow="md"
            borderRadius="xl"
        >
            <Stack spacing="6" w="md">
                <Stack spacing="5">
                    <FormControl>
                        <FormLabel htmlFor="person" color="primary.green">Number of persons</FormLabel>
                        <Rate id="person" count={10} defaultValue={4} character={<SmileOutlined />} className="inputRate" />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="date" color="primary.green">Date</FormLabel>
                        <DatePicker id="date" placement="bottomLeft" className="inputDate" />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="time" color="primary.green">Time</FormLabel>
                        <TimePicker id="time" minuteStep={15} defaultValue={dayjs('00:00', 'HH:mm')} format={'HH:mm'} className="inputDate" />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="guestName" color="primary.green">Name</FormLabel>
                        <Input id="guestName" type="guestName" />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="phone" color="primary.green">Phone</FormLabel>
                        <Input id="phone" type="phone" />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="comment" color="primary.green">Comment</FormLabel>
                        <Textarea id="comment" type="comment" />
                    </FormControl>
                </Stack>
                <Stack pt="20px">
                    <Button variant="primaryReverse">Reserve Now</Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ReservForm;