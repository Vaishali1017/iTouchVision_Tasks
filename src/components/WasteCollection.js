import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
    TextField,
    Card,
    CardContent,
    Grid,
    Container,
    CardHeader,
    Typography,
    Select,
    MenuItem, Link, CardActions
} from '@mui/material';
import { fetchAddressesAsync } from "../redux/addressSlice";
import { useDispatch, useSelector } from "react-redux";
import CollectionSchedule from "./CollectionSchedule";
import { fetchCollectionDayAsync } from "../redux/collectionDaySlice"; // Import the fetchCollectionDayAsync action

const WasteCollection = () => {
    const dispatch = useDispatch();
    const { addresses } = useSelector((state) => state.addresses);
    const collectionDayData = useSelector((state) => state.collectionDay.collectionDay); // Access the collection day data from the store

    const [selectedAddress, setSelectedAddress] = useState(''); // State to store the selected address
    console.log("3",collectionDayData)
    const handleAddressChange = (event) => {
        setSelectedAddress(event.target.value);
        // Trigger API call to fetch collection day data when address is selected
        dispatch(fetchCollectionDayAsync(event.target.value));
    };

    const formik = useFormik({
        initialValues: {
            postalCode: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const clearForm = () => {
        setSelectedAddress(''); // Clear the selected address

    };

    return (
        <Container style={{ marginTop: "40px" }} maxWidth="md">
            <Card>
                <CardHeader
                    title="Find Out Your Waste Collection Day"
                    titleTypographyProps={{ variant: 'h4', color:"black" ,fontWeight:"bold",textAlign: 'left' }}
                />

                <CardContent>
                    <Typography variant="subtitle1" color="black" fontWeight="bold" gutterBottom >Check when your waste will be collected</Typography> {/* Title */}

                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body2" color="black" fontWeight="bold" gutterBottom>
                                    Enter Postal Code
                                </Typography>
                                <TextField
                                    name="postalCode"
                                    variant="outlined"
                                    fullWidth
                                    value={formik.values.postalCode}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        dispatch(fetchAddressesAsync(e.target.value));
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" color="black" fontWeight="bold" gutterBottom>
                                    Select Address
                                </Typography>
                                <Select
                                    name="selectedAddress"
                                    variant="outlined"
                                    fullWidth
                                    value={selectedAddress}
                                    onChange={handleAddressChange}
                                >
                                    {addresses ? (
                                        addresses.map((address) => (
                                            <MenuItem key={address.UPRN} value={address.UPRN}>
                                                {address.FULL_ADDRESS}
                                            </MenuItem>
                                        ))
                                    ) : (
                                        <MenuItem disabled>No addresses available</MenuItem>
                                    )}
                                </Select>
                            </Grid>
                        </Grid>
                    </form>

                </CardContent>
                <CardActions>
                    <Link component="button" variant="body2" onClick={clearForm} style={{margin:10}}>Clear Address and Start Again</Link> {/* Clear link */}

                </CardActions>

            </Card>
            {collectionDayData && <CollectionSchedule collectionDayData={collectionDayData.collectionDay} />} {/* Render CollectionSchedule if collection day data is available */}

        </Container>

    );
};

export default WasteCollection;
