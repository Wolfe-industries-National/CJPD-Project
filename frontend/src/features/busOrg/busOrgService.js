import axios from 'axios';

const API_URI = '/api/v1/bus-org/';

// Create new Business Organization
const createBusOrg = async (busOrgData) => {
    const response = await axios.post(API_URI, busOrgData);
    return response.data;
}

// get all Business Organization
const getAllBusOrg = async () => {
    const response = await axios.get(API_URI);
    return response.data;
}

// get one Business Organization
const getBusOrg = async (busOrgID) => {
    const response = await axios.get(API_URI+busOrgID);
    return response.data;
}

// search Business or Organization
const searchBusOrg = async (searchQuery) => {
    console.log('SERVICE: ', searchQuery);
    const response = await axios.get(API_URI+'search?query='+searchQuery);
    return response.data;
}

// detaild search Business or Organization
const detailSearchBusOrg = async (searchData) => {
    const response = await axios.post(API_URI+'detailSearch', searchData);
    return response.data;
}

// delete search Bus Org
const deleteBusOrg = async (userData) => {
    const response = await axios.post(API_URI+'delete', userData);
    return response.data;
}

const busOrgService = {
    createBusOrg,
    getAllBusOrg,
    getBusOrg,
    searchBusOrg,
    detailSearchBusOrg,
    deleteBusOrg
}

export default busOrgService;