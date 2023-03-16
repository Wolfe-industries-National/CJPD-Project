import axios from 'axios';

const API_URI = '/api/v1/telephone/';

// Create new Telephone
const createTelephone = async (telephoneData) => {
    const response = await axios.post(API_URI, telephoneData);
    return response.data;
}

// get all Telephones
const getAllTelephones = async () => {
    const response = await axios.get(API_URI);
    return response.data;
}

// get one Telephone
const getTelephone = async (telephoneID) => {
    const response = await axios.get(API_URI+telephoneID);
    return response.data;
}

// search Telephone
const searchTelephone = async (searchQuery) => {
    console.log('SERVICE: ', searchQuery);
    const response = await axios.get(API_URI+'search?query='+searchQuery);
    return response.data;
}

const telephoneService = {
    createTelephone,
    getAllTelephones,
    getTelephone,
    searchTelephone
}

export default telephoneService;