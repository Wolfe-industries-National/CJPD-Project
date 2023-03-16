import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import occurrenceService from "./occurenceService";
import addressService from "../address/addressService";
import {searchAddress} from "../address/addressSlice";


const initialState = {
    occurrences: [],
    occurrence: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createOccurrence = createAsyncThunk('occurrence/create', async (occurrence, thunkAPI) => {
    try {
        return await occurrenceService.createOccurrence(occurrence);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getAllOccurrence = createAsyncThunk('occurrence/getAll', async (_, thunkAPI) => {
    try {
        return await occurrenceService.getAllOccurrence();
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getOccurrence = createAsyncThunk('occurrence/get', async (occurrenceID, thunkAPI) => {
    try {
        return await occurrenceService.getOccurrence(occurrenceID);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const searchOccurrence = createAsyncThunk('occurrence/search', async (searchQuery, thunkAPI) => {
    try {
        return await occurrenceService.searchOccurrence(searchQuery.query);

    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const occurrenceSlice = createSlice({
    name: 'occurrence',
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
            .addCase(createOccurrence.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createOccurrence.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
            })
            .addCase(createOccurrence.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.occurrence = null
            })
            .addCase(getAllOccurrence.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllOccurrence.fulfilled, (state, action) => {
                state.occurrences = action.payload
            })
            .addCase(getAllOccurrence.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.occurrences = null
            })
            .addCase(getOccurrence.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getOccurrence.fulfilled, (state, action) => {
                state.occurrence = action.payload
            })
            .addCase(getOccurrence.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.occurrence = null
            })
            .addCase(searchOccurrence.pending, (state) => {
                state.isLoading = true
            })
            .addCase(searchOccurrence.fulfilled, (state, action) => {
                state.occurrences = action.payload
            })
            .addCase(searchOccurrence.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.occurrences = null
            })
    }
})

export const {reset} = occurrenceSlice.actions;
export default occurrenceSlice.reducer;