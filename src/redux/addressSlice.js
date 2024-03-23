// addressSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchAddresses} from '../services/api';

export const fetchAddressesAsync = createAsyncThunk(
    'addresses/fetchAddresses',
    async (postalCode) => {
        const addresses = await fetchAddresses(postalCode);
        return addresses;
    }
);

const addressSlice = createSlice({
    name: 'addresses',
    initialState: {
        addresses: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddressesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAddressesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.addresses = action.payload;
            })
            .addCase(fetchAddressesAsync.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            });
    },
});

export default addressSlice.reducer;
