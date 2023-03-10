import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import propertyService from "./propertyService";


const initialState = {
    properties: [],
    property: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createProperty = createAsyncThunk('property/create', async (property, thunkAPI) => {
    try {
        return await propertyService.createProperty(property);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getAllProperties = createAsyncThunk('property/getAll', async (_, thunkAPI) => {
    try {
        return await propertyService.getAllProperties();
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getProperty = createAsyncThunk('property/get', async (propertyID, thunkAPI) => {
    try {
        return await propertyService.getProperty(propertyID);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const propertySlice = createSlice({
    name: 'property',
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
            .addCase(createProperty.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProperty.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
                state.property = action.payload
            })
            .addCase(createProperty.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.property = null
            })
            .addCase(getAllProperties.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllProperties.fulfilled, (state, action) => {
                state.properties = action.payload
            })
            .addCase(getAllProperties.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.properties = null
            })
            .addCase(getProperty.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProperty.fulfilled, (state, action) => {
                state.property = action.payload
            })
            .addCase(getProperty.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.property = null
            })
    }
})

export const {reset} = propertySlice.actions;
export default propertySlice.reducer;