import React from 'react';
import {Card, CardContent, Container, Grid, Typography} from "@mui/material";

const CollectionSchedule = ({collectionDayData}) => {
    return (
        <Container style={{marginTop: "40px"}}>
            <Typography variant="subtitle1" color="black" fontWeight="bold" gutterBottom>Your Next
                Collections</Typography> {/* Title */}
            <Grid container spacing={2}>
                {collectionDayData.length > 0 ? (
                    collectionDayData.map((day, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card style={{height: '100%', backgroundColor: day.binColor}}>
                                <CardContent style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <Typography variant="body2" color="white" gutterBottom>
                                            {day.binType}
                                        </Typography>
                                        <Typography variant="h5" color="white" fontWeight="bold"
                                                    style={{marginBottom: '4rem'}}>
                                            {day.collectionDay}
                                        </Typography>
                                        <Typography variant="body2" color="white" style={{marginBottom: '4rem'}}>
                                            Followed by {day.followingDay}
                                        </Typography>
                                        <Typography variant="body2" color="white" gutterBottom>
                                            {day.description}
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Typography variant="body2" color="black" gutterBottom>
                            No data found
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default CollectionSchedule;
