import axios from 'axios';

const API_URI = '/api/v1/vehicle/';

// Create new Vehicle
const createVehicle = async (vehicleData) => {
    const response = await axios.post(API_URI, vehicleData);
    return response.data;
}

// get all Vehicles
const getAllVehicles = async () => {
    const response = await axios.get(API_URI);
    return response.data;
}

// get one Vehicle
const getVehicle = async (vehicleID) => {
    const response = await axios.get(API_URI+vehicleID);
    return response.data;
}

const vehicleService = {
    createVehicle,
    getAllVehicles,
    getVehicle
}

export default vehicleService;