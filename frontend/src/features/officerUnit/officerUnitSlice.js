import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import officerUnitService from "./officerUnitService";


const initialState = {
    officerUnits: [],
    officerUnit: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createOfficerUnit = createAsyncThunk('officerUnit/create', async (officerUnit, thunkAPI) => {
    try {
        return await officerUnitService.createOfficerUnit(officerUnit);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getAllOfficerUnits = createAsyncThunk('officerUnit/getAll', async (_, thunkAPI) => {
    try {
        return await officerUnitService.getAllOfficerUnits();
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getOfficerUnit = createAsyncThunk('officerUnit/get', async (officerUnitID, thunkAPI) => {
    try {
        return await officerUnitService.getOfficerUnit(officerUnitID);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const officerUnitSlice = createSlice({
    name: 'officerUnit',
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
            .addCase(createOfficerUnit.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createOfficerUnit.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
                state.officerUnit = action.payload
            })
            .addCase(createOfficerUnit.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.officerUnit = null
            })
            .addCase(getAllOfficerUnits.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllOfficerUnits.fulfilled, (state, action) => {
                state.officerUnits = action.payload
            })
            .addCase(getAllOfficerUnits.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.officerUnits = null
            })
            .addCase(getOfficerUnit.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getOfficerUnit.fulfilled, (state, action) => {
                state.officerUnit = action.payload
            })
            .addCase(getOfficerUnit.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.officerUnit = null
            })
    }
})

export const {reset} = officerUnitSlice.actions;
export default officerUnitSlice.reducer;