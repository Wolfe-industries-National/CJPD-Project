import axios from 'axios';

const API_URI = '/api/v1/person/';

// Create new Person
const createPerson = async (personData) => {
    const response = await axios.post(API_URI, personData);
    return response.data;
}

// get all Person
const getAllPerson = async () => {
    const response = await axios.get(API_URI);
    return response.data;
}

// get one Person
const getPerson = async (personID) => {
    const response = await axios.get(API_URI+personID);
    return response.data;
}

// search Person
const searchPerson = async (searchQuery) => {
    console.log('SERVICE: ', searchQuery);
    const response = await axios.get(API_URI+'search?query='+searchQuery);
    return response.data;
}

// detaild search Person
const detailSearchPerson = async (searchData) => {
    const response = await axios.post(API_URI+'detailSearch', searchData);
    return response.data;
}

const personService = {
    createPerson,
    getAllPerson,
    getPerson,
    searchPerson,
    detailSearchPerson
}

export default personService;