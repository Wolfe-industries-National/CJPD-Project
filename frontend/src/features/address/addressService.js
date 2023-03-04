import axios from 'axios';

const API_URI = '/api/v1/address/';

// Create new Address
const createAddress = async (addressData) => {
    const response = await axios.post(API_URI, addressData);
    return response.data;
}

// get all Addresses
const getAllAddresses = async () => {
    const response = await axios.get(API_URI);
    return response.data;
}

// get one Address
const getAddress = async (addressId) => {
    const response = await axios.get(API_URI+addressId);
    return response.data;
}

const addressService = {
    createAddress,
    getAllAddresses,
    getAddress
}

export default addressService;