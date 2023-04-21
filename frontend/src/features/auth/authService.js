import axios from 'axios';

const API_URI = '/api/v1/users/';

// Register 
const register = async (userData) => {
    const response = await axios.post(API_URI, userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// Login
const login = async (userData) => {
    const response = await axios.post(API_URI + 'login', userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}
// Logout
const logout = () => localStorage.removeItem('user');

// Change Password
const changePasswordUser = async (userData) => {
    const response = await axios.post(API_URI + 'changePassword', userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// Reset Password
const resetPassword = async (userData) => {
    const response = await axios.post(API_URI + 'reset', userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

const getAll = async () => {
    const response = await axios.get(API_URI + 'getAll');
    return response.data;
}


const authService = {
    register,
    logout,
    login,
    changePasswordUser,
    resetPassword,
    getAll
}

export default authService;