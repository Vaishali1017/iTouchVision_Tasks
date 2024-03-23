// store.js
import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './addressSlice';
import collectionDayReducer from './collectionDaySlice';

const store = configureStore({
    reducer: {
        addresses: addressReducer,
        collectionDay: collectionDayReducer,

        // Add other reducers if you have them
    },

});

export default store;
