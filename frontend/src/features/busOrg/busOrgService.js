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

const busOrgService = {
    createBusOrg,
    getAllBusOrg,
    getBusOrg
}

export default busOrgService;