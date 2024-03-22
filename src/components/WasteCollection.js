import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
    TextField,
    Button,
    Card,
    CardContent,
    Grid,
    Container,
    CardHeader,
    Typography,
    Select,
    MenuItem
} from '@mui/material';
import {fetchAddressesAsync} from "../redux/addressSlice";
import {useDispatch, useSelector} from "react-redux";



const initialValues = {
    postalCode: '',
    selectedAddress: '',
};

const WasteCollection = () => {

    const dispatch = useDispatch();
    const { addresses, status } = useSelector((state) => state.addresses);
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Container >

        <Card>
            <CardHeader
                title="Find Out Your Waste Collection Day"
                titleTypographyProps={{ variant: 'h4', textAlign: 'left' }}
            />
            <CardContent>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values }) => (
                        <Form>
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Enter Postal Code
                                    </Typography>
                                    <TextField
                                        name="postalCode"
                                        variant="outlined"
                                        fullWidth
                                        onChange={(e) => dispatch(fetchAddressesAsync(e.target.value))}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Select Address
                                    </Typography>
                                    <Select

                                        name="selectedAddress"
                                        variant="outlined"
                                        fullWidth
                                    >
                                        {addresses.map((address) => (
                                            <MenuItem key={address.id} value={address.value}>
                                                {address.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary">
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
        </Container>
    );
};

export default WasteCollection;
