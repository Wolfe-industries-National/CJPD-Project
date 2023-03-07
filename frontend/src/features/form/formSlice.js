import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import formService from "./formService";

const initialState = {
    forms: [],
    form: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createForm = createAsyncThunk('form/create', async (formData, thunkAPI) => {
    try {
        return await formService.createForm(formData);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getAllForms = createAsyncThunk('form/getAll', async (_, thunkAPI) => {
    try {
        return await formService.getAllForms();
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getForm = createAsyncThunk('form/get', async (formID, thunkAPI) => {
    try {
        return await formService.getForm(formID);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const formSlice = createSlice({
    name: 'form',
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
            .addCase(createForm.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createForm.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
                state.form = action.payload
            })
            .addCase(createForm.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.form = null
            })
            .addCase(getAllForms.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllForms.fulfilled, (state, action) => {
                state.forms = action.payload
            })
            .addCase(getAllForms.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.forms = null
            })
            .addCase(getForm.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getForm.fulfilled, (state, action) => {
                state.form = action.payload
            })
            .addCase(getForm.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.form = null
            })
    }
})

export const {reset} = formSlice.actions;
export default formSlice.reducer;