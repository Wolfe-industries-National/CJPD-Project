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

// search Vehicle
const searchVehicle = async (searchQuery) => {
    console.log('SERVICE: ', searchQuery);
    const response = await axios.get(API_URI+'search?query='+searchQuery);
    return response.data;
}

// detaild search Vehicle
const detailSearchVehicle = async (searchData) => {
    const response = await axios.post(API_URI+'detailSearch', searchData);
    return response.data;
}

// delete search Vehicle
const deleteVehicle = async (userData) => {
    const response = await axios.post(API_URI+'delete', userData);
    return response.data;
}


// update vehicle
const updateVehicle = async (vehicleData) => {
    console.log('VEHICLE DATA ON SERVICE:', vehicleData);
    const response = await axios.patch(API_URI+'update', vehicleData);
    return response.data;
}


const vehicleService = {
    createVehicle,
    getAllVehicles,
    getVehicle,
    searchVehicle,
    detailSearchVehicle,
    deleteVehicle,
    updateVehicle
}

export default vehicleService;