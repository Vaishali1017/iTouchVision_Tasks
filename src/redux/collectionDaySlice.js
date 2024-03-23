// addressSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchCollectionDay} from '../services/api';

export const fetchCollectionDayAsync = createAsyncThunk(
    'collectionDay/fetchCollectionDay',
    async (postalCode) => {
        const collectionDay = await fetchCollectionDay(postalCode);
        return collectionDay;
    }
);

const collectionDaySlice = createSlice({
    name: 'collectionDay',
    initialState: {
        collectionDay: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollectionDayAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCollectionDayAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.collectionDay = action.payload;
            })
            .addCase(fetchCollectionDayAsync.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            });
    },
});

export default collectionDaySlice.reducer;