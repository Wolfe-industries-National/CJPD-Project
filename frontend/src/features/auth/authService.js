import axios from 'axios';

const API_URI = '/api/v1/users';

// Register 
const register = async (userData) => {
    const response = await axios.post(API_URI, userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

const authService = {
    register
}

export default authService;