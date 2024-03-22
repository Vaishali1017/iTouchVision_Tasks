// store.js
import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './addressSlice';

const store = configureStore({
    reducer: {
        addresses: addressReducer,
        // Add other reducers if you have them
    },
});

export default store;
