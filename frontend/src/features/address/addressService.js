import axios from 'axios';

const API_URI = '/api/v1/address/';

// Create new Address
const createNewAddress = async (addressData) => {
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

// search Addresses
const searchAddress = async (searchQuery) => {
    console.log('SERVICE: ', searchQuery);
    const response = await axios.get(API_URI+'search?query='+searchQuery);
    return response.data;
}

const addressService = {
    createNewAddress,
    getAllAddresses,
    getAddress,
    searchAddress
}

export default addressService;