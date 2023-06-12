import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import { DatePicker, Rate, TimePicker } from "antd";
import dayjs from 'dayjs';
import { SmileOutlined } from '@ant-design/icons';
import './styles.css'

const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
};

const openTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

const ReservForm = () => {
    const [numGuest, setNumGuest] = useState(2);
    const [antDate, setAntDate] = useState("");
    const [availableTimes, setAvailableTimes] = useState([
        { time: "17:00", status: true },
        { time: "18:00", status: false },
        { time: "19:00", status: true },
        { time: "20:00", status: false },
        { time: "21:00", status: true },
        { time: "22:00", status: true }
    ])

    const formik = useFormik({
        initialValues: {
            resGuestNum: 2,
            resDate: "",
            resTime: "17:00",
            resOccasion: "",
            resGuestName: "",
            resPhone: "",
            resComment: ""
        },
        onSubmit: async (values, event) => {
            console.log(values);
            try {
                // Perform API call using the submit helper from useSubmit hook
                // await submit(values.firstName);
                // onOpen(success);
                event.resetForm();
            } catch (error) {
                // Handle error
            } finally {
                event.setSubmitting(false);
            }
        },
        validationSchema: Yup.object({
            resTime: Yup.string().required("Time is required"),
            resGuestName: Yup.string().required("Name is required"),
            resPhone: Yup.string().required("Phone is required"),
        }),
    });


    const disabledDate = (current) => {
        // Can not select days before today and today
        // Can book between 1-7 day
        return current && (current < dayjs().add(-1, 'day').endOf('day') || current > dayjs().add(7, 'day').endOf('day'));
    };

    return (
        <Box
            py={{ base: '5', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            boxShadow="md"
            borderRadius="xl"
        >
            <Stack spacing="6" w="md">
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing="5">
                        <FormControl>
                            <FormLabel htmlFor="resGuestNum" color="primary.green">Number of persons</FormLabel>
                            <Flex alignItems="flex-end">
                                <Rate
                                    id="resGuestNum"
                                    name="resGuestNum"
                                    count={10}
                                    defaultValue={4}
                                    {...formik.getFieldProps("resGuestNum")}
                                    character={<SmileOutlined />}
                                    className="inputRate"
                                    onChange={(value) => { setNumGuest(value); formik.setFieldValue("resGuestNum", value); }}
                                    style={{ paddingBottom: '3px', paddingRight: '15px' }}
                                />
                                <Box><Text fontSize="3xl" fontWeight="bold">{numGuest}</Text></Box>
                            </Flex>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="resDate" color="primary.green">Date</FormLabel>
                            <DatePicker
                                id="resDate"
                                name="resDate"
                                format="YYYY-MM-DD"
                                disabledDate={disabledDate}
                                placement="bottomLeft"
                                placeholder="Select date ,time"
                                className="inputDate"
                                onChange={(value) => { console.log(value); setAntDate(value); formik.setFieldValue("resDate", value); }}
                            />
                        </FormControl>
                        <FormControl isInvalid={formik.errors.resTime}>
                            <FormLabel htmlFor="resTime">Time</FormLabel>
                            <Select
                                id="resTime"
                                name="resTime"
                                {...formik.getFieldProps("resTime")}
                            >
                                {
                                    availableTimes.map((e) => e.status ? <option key={e.time}>{e.time}</option> : <option key={e.time} disabled>{e.time} booked</option>)
                                }
                            </Select>
                            <FormErrorMessage>{formik.errors.resTime}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="resOccasion">Occasion</FormLabel>
                            <Select
                                id="resOccasion"
                                name="resOccasion"
                                placeholder="Optional"
                                {...formik.getFieldProps("resOccasion")}
                            >
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </Select>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.resGuestName}>
                            <FormLabel htmlFor="resGuestName" color="primary.green">Name</FormLabel>
                            <Input
                                id="resGuestName"
                                name="resGuestName"
                                type="text"
                                {...formik.getFieldProps("resGuestName")}
                            />
                            <FormErrorMessage>{formik.errors.resGuestName}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.resPhone}>
                            <FormLabel htmlFor="resPhone" color="primary.green">Phone</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children='+1' />
                                <Input
                                    id="resPhone"
                                    name="resPhone"
                                    type="tel"
                                    placeholder='Phone number'
                                    {...formik.getFieldProps("resPhone")}
                                />
                            </InputGroup>
                            <FormErrorMessage>{formik.errors.resPhone}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="resComment">Comment</FormLabel>
                            <Textarea
                                id="resComment"
                                name="resComment"
                                placeholder="Optional"
                                {...formik.getFieldProps("resComment")}
                            />
                        </FormControl>
                    </Stack>
                    <Stack py="20px">
                        <Button
                            variant="primaryReverse"
                            type="submit"
                            isLoading={formik.isSubmitting}
                            disabled={formik.isSubmitting}
                        >
                            Reserve Now
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Box >
    )
}

export default ReservForm;