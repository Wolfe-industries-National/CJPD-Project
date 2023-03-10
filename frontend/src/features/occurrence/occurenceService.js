import axios from 'axios';

const API_URI = '/api/v1/occurrence/';

// Create new Occurrence
const createOccurrence = async (occurrenceData) => {
    const response = await axios.post(API_URI, occurrenceData);
    return response.data;
}

// get all Occurrences
const getAllOccurrence = async () => {
    const response = await axios.get(API_URI);
    return response.data;
}

// get one Occurrence
const getOccurrence = async (occurrenceID) => {
    const response = await axios.get(API_URI+occurrenceID);
    return response.data;
}

const occurrenceService = {
    createOccurrence,
    getAllOccurrence,
    getOccurrence
}

export default occurrenceService;