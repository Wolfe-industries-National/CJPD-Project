import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import vehicleService from "./vehicleService";
import addressService from "../address/addressService";
import {searchAddress} from "../address/addressSlice";


const initialState = {
    vehicles: [],
    vehicle: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createVehicle = createAsyncThunk('vehicle/create', async (vehicle, thunkAPI) => {
    try {
        return await vehicleService.createVehicle(vehicle);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getAllVehicles = createAsyncThunk('vehicle/getAll', async (_, thunkAPI) => {
    try {
        return await vehicleService.getAllVehicles();
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getVehicle = createAsyncThunk('vehicle/get', async (vehicleID, thunkAPI) => {
    try {
        return await vehicleService.getVehicle(vehicleID);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const searchVehicle = createAsyncThunk('vehicle/search', async (searchQuery, thunkAPI) => {
    try {
        return await vehicleService.searchVehicle(searchQuery.query);

    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        resetVehicles: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createVehicle.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createVehicle.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
            })
            .addCase(createVehicle.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.vehicle = null
            })
            .addCase(getAllVehicles.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllVehicles.fulfilled, (state, action) => {
                state.vehicles = action.payload
            })
            .addCase(getAllVehicles.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.vehicles = null
            })
            .addCase(getVehicle.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getVehicle.fulfilled, (state, action) => {
                state.vehicle = action.payload
            })
            .addCase(getVehicle.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.vehicle = null
            })
            .addCase(searchVehicle.pending, (state) => {
                state.isLoading = true
            })
            .addCase(searchVehicle.fulfilled, (state, action) => {
                state.vehicles = action.payload
            })
            .addCase(searchVehicle.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.vehicles = null
            })
    }
})

export const {resetVehicles} = vehicleSlice.actions;
export default vehicleSlice.reducer;