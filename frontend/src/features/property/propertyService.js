import axios from 'axios';

const API_URI = '/api/v1/property/';

// Create new Property
const createProperty = async (propertyData) => {
    const response = await axios.post(API_URI, propertyData);
    return response.data;
}

// get all Property
const getAllProperties = async () => {
    const response = await axios.get(API_URI);
    return response.data;
}

// get one Property
const getProperty = async (propertyID) => {
    const response = await axios.get(API_URI+propertyID);
    return response.data;
}

// search Officer Unit
const searchProperty = async (searchQuery) => {
    console.log('SERVICE: ', searchQuery);
    const response = await axios.get(API_URI+'search?query='+searchQuery);
    return response.data;
}

// detaild search Property
const detailSearchProperty = async (searchData) => {
    const response = await axios.post(API_URI+'detailSearch', searchData);
    return response.data;
}

// delete search Property
const deleteProperty = async (userData) => {
    const response = await axios.post(API_URI+'delete', userData);
    return response.data;
}

// update Property
const updateProperty = async (propertyData) => {
    console.log('Property DATA ON SERVICE:', propertyData);
    const response = await axios.patch(API_URI+'update', propertyData);
    return response.data;
}

const propertyService = {
    createProperty,
    getAllProperties,
    getProperty,
    searchProperty,
    detailSearchProperty,
    deleteProperty,
    updateProperty
}

export default propertyService;