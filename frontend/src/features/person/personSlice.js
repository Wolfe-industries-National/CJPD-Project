import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import personService from "./personService";
import busOrgService from "../busOrg/busOrgService";
import {searchBusOrg} from "../busOrg/busOrgSlice";


const initialState = {
    people: [],
    person: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createPerson = createAsyncThunk('person/create', async (person, thunkAPI) => {
    try {
        return await personService.createPerson(person);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getAllPerson = createAsyncThunk('person/getAll', async (_, thunkAPI) => {
    try {
        return await personService.getAllPerson();
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getPerson = createAsyncThunk('person/get', async (personID, thunkAPI) => {
    try {
        return await personService.getPerson(personID);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const searchPerson = createAsyncThunk('person/search', async (searchQuery, thunkAPI) => {
    try {
        return await personService.searchPerson(searchQuery.query);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const personSlice = createSlice({
    name: 'person',
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
            .addCase(createPerson.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createPerson.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
                state.person = action.payload
            })
            .addCase(createPerson.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.person = null
            })
            .addCase(getAllPerson.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllPerson.fulfilled, (state, action) => {
                state.people = action.payload
            })
            .addCase(getAllPerson.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.people = null
            })
            .addCase(getPerson.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPerson.fulfilled, (state, action) => {
                state.person = action.payload
            })
            .addCase(getPerson.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.person = null
            })
            .addCase(searchPerson.pending, (state) => {
                state.isLoading = true
            })
            .addCase(searchPerson.fulfilled, (state, action) => {
                state.people = action.payload
            })
            .addCase(searchPerson.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.people = null
            })
    }
})

export const {reset} = personSlice.actions;
export default personSlice.reducer;