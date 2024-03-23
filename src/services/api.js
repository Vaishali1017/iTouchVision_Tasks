// api.js
import axios from 'axios';

const API_URL = 'https://iweb.itouchvision.com/portal/itouchvision/kmbd_demo/address';

export const fetchAddresses = async (postalCode) => {
    try {
        const response = await axios.post(API_URL, null, {
            headers: {
                'P_GUID': 'FF93E12280E5471FE053A000A8C08BEB',
                'P_POSTCODE': postalCode
            }
        });
        return response.data.ADDRESS;
    } catch (error) {
        console.error('Error fetching addresses:', error);
        throw error;
    }
};

export const fetchCollectionDay = async (selectedAddress) => {
    try {
        const response = await axios.post('https://iweb.itouchvision.com/portal/itouchvision/kmbd_demo/collectionDay', null, {
            headers: {
                'P_GUID': 'FF93E12280E5471FE053A000A8C08BEB',
                'P_UPRN': selectedAddress,
                'P_CLIENT_ID': 130,
                'P_COUNCIL_ID': 260
            }
        });
        // Handle the response as needed
        return response.data; // Optionally return data
    } catch (error) {
        console.error('Error fetching collection day:', error);
        throw error;
    }
};

