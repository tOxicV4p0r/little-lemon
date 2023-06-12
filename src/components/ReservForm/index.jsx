import { useEffect, useState } from "react";
import { useReserveContext } from "context/reserveContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import { DatePicker, Rate } from "antd";
import dayjs from 'dayjs';
import { SmileOutlined } from '@ant-design/icons';
import './styles.css'
import useSubmit from "hooks/useSubmit";

const defaultTimes = [
    { "17:00": true },
    { "18:00": true },
    { "19:00": true },
    { "20:00": true },
    { "21:00": true },
    { "22:00": true }
]

const ReservForm = () => {
    const [numGuest, setNumGuest] = useState(2);
    const [antDate, setAntDate] = useState(null);
    const [availableTimes, setAvailableTimes] = useState(defaultTimes)
    const { bookingTimes } = useReserveContext();
    const { postReserve } = useSubmit()

    const formik = useFormik({
        initialValues: {
            resGuestNum: 2,
            resDate: "",
            resTime: "",
            resOccasion: "",
            resGuestName: "",
            resPhone: "",
            resComment: ""
        },
        onSubmit: async (values, event) => {
            console.log(values);
            try {
                const { resDate, resTime } = values
                const selectedDate = `${resDate.month()}/${resDate.date()}`;

                // Perform API call using the submit helper from useSubmit hook
                await postReserve('https://fakeapi.xyz', { date: selectedDate, time: resTime });
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

    const handleTime = () => {
        if (antDate) {
            const selectedDate = `${antDate.month()}/${antDate.date()}`;
            const tmpBookingTimes = availableTimes.map(e => {
                let found = false;
                for (const el of bookingTimes) {
                    if (el.date === selectedDate) {
                        if (Object.keys(e)[0] === el.time) {
                            found = true;
                            break;
                        }
                    }
                }
                return found ? { [Object.keys(e)[0]]: false } : { [Object.keys(e)[0]]: true }
            })
            setAvailableTimes(tmpBookingTimes);
        }
    }

    useEffect(() => {
        handleTime();
    }, [antDate, bookingTimes]);

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
                                    defaultValue={numGuest}
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
                                disabled={formik.isSubmitting}
                                onChange={(value) => { console.log(value); setAntDate(value); formik.setFieldValue("resDate", value); }}
                            />
                        </FormControl>
                        <FormControl isInvalid={formik.errors.resTime}>
                            <FormLabel htmlFor="resTime" color="primary.green">Time</FormLabel>
                            <Select
                                id="resTime"
                                name="resTime"
                                placeholder='Select time'
                                disabled={!antDate || formik.isSubmitting}
                                {...formik.getFieldProps("resTime")}
                            >
                                {
                                    availableTimes.map((e) => Object.values(e)[0] ? <option key={Object.keys(e)[0]}>{Object.keys(e)[0]}</option> : <option key={Object.keys(e)[0]} disabled>{Object.keys(e)[0]} booked</option>)
                                }
                            </Select>
                            <FormErrorMessage>{formik.errors.resTime}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="resOccasion" color="primary.green">Occasion</FormLabel>
                            <Select
                                id="resOccasion"
                                name="resOccasion"
                                placeholder="Optional"
                                disabled={formik.isSubmitting}
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
                                disabled={formik.isSubmitting}
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
                                    disabled={formik.isSubmitting}
                                    {...formik.getFieldProps("resPhone")}
                                />
                            </InputGroup>
                            <FormErrorMessage>{formik.errors.resPhone}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="resComment" color="primary.green">Comment</FormLabel>
                            <Textarea
                                id="resComment"
                                name="resComment"
                                placeholder="Optional"
                                disabled={formik.isSubmitting}
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