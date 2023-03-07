import axios from 'axios';

const API_URI = '/api/v1/form/';

// Create new Form
const createForm = async (formData) => {
    const response = await axios.post(API_URI, formData);
    return response.data;
}

// get all Forms
const getAllForms = async () => {
    const response = await axios.get(API_URI);
    return response.data;
}

// get one Form
const getForm = async (formID) => {
    const response = await axios.get(API_URI+formID);
    return response.data;
}

const formService = {
    createForm,
    getAllForms,
    getForm
}

export default formService;