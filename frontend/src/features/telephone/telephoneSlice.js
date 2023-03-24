import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import telephoneService from "./telephoneService";
import addressService from "../address/addressService";
import {searchAddress} from "../address/addressSlice";


const initialState = {
    telephones: [],
    telephone: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createTelephone = createAsyncThunk('telephone/create', async (telephone, thunkAPI) => {
    try {
        return await telephoneService.createTelephone(telephone);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getAllTelephones = createAsyncThunk('telephone/getAll', async (_, thunkAPI) => {
    try {
        return await telephoneService.getAllTelephones();
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getTelephone = createAsyncThunk('telephone/get', async (telephoneID, thunkAPI) => {
    try {
        return await telephoneService.getTelephone(telephoneID);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const searchTelephone = createAsyncThunk('telephone/search', async (searchQuery, thunkAPI) => {
    try {
        return await telephoneService.searchTelephone(searchQuery.query);

    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const telephoneSlice = createSlice({
    name: 'telephone',
    initialState,
    reducers: {
        resetTelephone: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTelephone.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTelephone.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
            })
            .addCase(createTelephone.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.telephone = null
            })
            .addCase(getAllTelephones.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllTelephones.fulfilled, (state, action) => {
                state.telephones = action.payload
            })
            .addCase(getAllTelephones.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.telephones = null
            })
            .addCase(getTelephone.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTelephone.fulfilled, (state, action) => {
                state.telephone = action.payload
            })
            .addCase(getTelephone.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.telephone = null
            })
            .addCase(searchTelephone.pending, (state) => {
                state.isLoading = true
            })
            .addCase(searchTelephone.fulfilled, (state, action) => {
                state.telephones = action.payload
            })
            .addCase(searchTelephone.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.telephones = null
            })
    }
})

export const {resetTelephone} = telephoneSlice.actions;
export default telephoneSlice.reducer;