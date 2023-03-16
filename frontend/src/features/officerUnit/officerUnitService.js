import axios from 'axios';

const API_URI = '/api/v1/officerUnit/';

// Create new Officer Unit
const createOfficerUnit = async (officerData) => {
    const response = await axios.post(API_URI, officerData);
    return response.data;
}

// get all Officer Units
const getAllOfficerUnits = async () => {
    const response = await axios.get(API_URI);
    return response.data;
}

// get one Officer Unit
const getOfficerUnit = async (officerUnitID) => {
    const response = await axios.get(API_URI+officerUnitID);
    return response.data;
}

// search Officer Unit
const searchOfficerUnit = async (searchQuery) => {
    console.log('SERVICE: ', searchQuery);
    const response = await axios.get(API_URI+'search?query='+searchQuery);
    return response.data;
}

const officerUnitService = {
    createOfficerUnit,
    getAllOfficerUnits,
    getOfficerUnit,
    searchOfficerUnit
}

export default officerUnitService;