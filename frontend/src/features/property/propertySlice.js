import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import propertyService from "./propertyService";
import officerUnitService from "../officerUnit/officerUnitService";
import {searchOfficerUnit} from "../officerUnit/officerUnitSlice";


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

export const searchProperty = createAsyncThunk('property/search', async (searchQuery, thunkAPI) => {
    try {
        return await propertyService.searchProperty(searchQuery.query);

    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const detailSearchProperty = createAsyncThunk('property/detailSearch', async (searchData, thunkAPI) => {
    try {
        return await propertyService.detailSearchProperty(searchData);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const deleteProperty = createAsyncThunk('property/delete', async (userData, thunkAPI) => {
    try {
        return await propertyService.deleteProperty(userData);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const updateProperty = createAsyncThunk('property/update', async (propertyData, thunkAPI) => {
    try {
        console.log('Property DATA ON SLICE:', propertyData);
        return await propertyService.updateProperty(propertyData);
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
            .addCase(searchProperty.pending, (state) => {
                state.isLoading = true
            })
            .addCase(searchProperty.fulfilled, (state, action) => {
                state.properties = action.payload
            })
            .addCase(searchProperty.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.properties = null
            })
            .addCase(detailSearchProperty.pending, (state) => {
                state.isLoading = true
            })
            .addCase(detailSearchProperty.fulfilled, (state, action) => {
                state.properties = action.payload
            })
            .addCase(detailSearchProperty.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.properties = null
            })
            .addCase(deleteProperty.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteProperty.fulfilled, (state, action) => {
                state.isSuccess = true
            })
            .addCase(deleteProperty.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.properties = null
            })
            .addCase(updateProperty.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateProperty.fulfilled, (state, action) => {
                state.property = action.payload
            })
            .addCase(updateProperty.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = propertySlice.actions;
export default propertySlice.reducer;