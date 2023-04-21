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

// detaild search Address
const detailSearchAddress = async (searchData) => {
    console.log('searchData from the SERVICE OF DETAIL FIND:', searchData);
    const response = await axios.post(API_URI+'detailSearch', searchData);
    return response.data;
}

// delete search Address
const deleteAddress = async (userData) => {
    console.log('DELETE ADDRESS');
    const response = await axios.post(API_URI+'delete', userData);
    console.log(response.data);
    return response.data;
}

const addressService = {
    createNewAddress,
    getAllAddresses,
    getAddress,
    searchAddress,
    detailSearchAddress,
    deleteAddress
}

export default addressService;