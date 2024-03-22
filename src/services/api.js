// api.js
import axios from 'axios';

const API_URL = 'https://iweb.itouchvision.com/portal/itouchvision/kmbd_demo/address';

export const fetchAddresses = async (postalCode) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                P_GUID: 'FF93E12280E5471FE053A000A8C08BEB',
                P_POSTCODE: postalCode
            }
        });
        return response.data.addresses;
    } catch (error) {
        console.error('Error fetching addresses:', error);
        throw error;
    }
};
