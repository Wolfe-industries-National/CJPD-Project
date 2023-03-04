import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addressService from "./addressService";


const initialState = {
    addresses: [],
    address: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createAddress = createAsyncThunk('address/create', async (address, thunkAPI) => {
    try {
        return await addressService.createAddress(address);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getAllAddresses = createAsyncThunk('address/getAll', async (_, thunkAPI) => {
    try {
        return await addressService.getAllAddresses();
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getAddress = createAsyncThunk('address/get', async (addressID, thunkAPI) => {
    try {
        return await addressService.getAddress(addressID);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createAddress.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createAddress.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
                state.address = action.payload
            })
            .addCase(createAddress.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.address = null
            })
            .addCase(getAllAddresses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllAddresses.fulfilled, (state, action) => {
                state.addresses = action.payload
            })
            .addCase(getAllAddresses.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.addresses = null
            })
            .addCase(getAddress.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAddress.fulfilled, (state, action) => {
                state.address = action.payload
            })
            .addCase(getAddress.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.address = null
            })
    }
})

export const {reset} = addressSlice.actions;
export default addressSlice.reducer;