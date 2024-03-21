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

const addresses = [
    { id: 1, label: 'Address 1', value: '123 Main St' },
    { id: 2, label: 'Address 2', value: '456 Elm St' },
    { id: 3, label: 'Address 3', value: '789 Oak St' },
];

const initialValues = {
    postalCode: '',
    selectedAddress: '',
};

const WasteCollection = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Container maxWidth="md">

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
                                    <Field
                                        as={TextField}
                                        name="postalCode"
                                        label="Postal Code"
                                        variant="outlined"
                                        fullWidth
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
