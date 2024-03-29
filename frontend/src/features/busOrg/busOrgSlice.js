import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import busOrgService from "./busOrgService";


const initialState = {
    busOrgs: [],
    busOrg: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createBusOrg = createAsyncThunk('busOrg/create', async (busOrg, thunkAPI) => {
    try {
        return await busOrgService.createBusOrg(busOrg);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getAllBusOrg = createAsyncThunk('busOrg/getAll', async (_, thunkAPI) => {
    try {
        return await busOrgService.getAllBusOrg();
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getBusOrg = createAsyncThunk('busOrg/get', async (busOrgID, thunkAPI) => {
    try {
        return await busOrgService.getBusOrg(busOrgID);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


export const searchBusOrg = createAsyncThunk('busOrg/search', async (searchQuery, thunkAPI) => {
    try {
        return await busOrgService.searchBusOrg(searchQuery.query);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const detailSearchBusOrg = createAsyncThunk('busOrg/detailSearch', async (searchData, thunkAPI) => {
    try {
        return await busOrgService.detailSearchBusOrg(searchData);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const deleteBusOrg = createAsyncThunk('busOrg/delete', async (userData, thunkAPI) => {
    try {
        return await busOrgService.deleteBusOrg(userData);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const updateBusOrg = createAsyncThunk('busOrg/update', async (busOrgData, thunkAPI) => {
    try {
        console.log('busOrg DATA ON SLICE:', busOrgData);
        return await busOrgService.updateBusOrg(busOrgData);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


export const busOrgSlice = createSlice({
    name: 'busOrg',
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
            .addCase(createBusOrg.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createBusOrg.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
            })
            .addCase(createBusOrg.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.busOrg = null
            })
            .addCase(getAllBusOrg.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllBusOrg.fulfilled, (state, action) => {
                state.busOrgs = action.payload
            })
            .addCase(getAllBusOrg.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.busOrgs = null
            })
            .addCase(getBusOrg.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBusOrg.fulfilled, (state, action) => {
                state.busOrg = action.payload
            })
            .addCase(getBusOrg.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.busOrg = null
            })
            .addCase(searchBusOrg.pending, (state) => {
                state.isLoading = true
            })
            .addCase(searchBusOrg.fulfilled, (state, action) => {
                state.busOrgs = action.payload
            })
            .addCase(searchBusOrg.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.busOrgs = null
            })
            .addCase(detailSearchBusOrg.pending, (state) => {
                state.isLoading = true
            })
            .addCase(detailSearchBusOrg.fulfilled, (state, action) => {
                state.busOrgs = action.payload
            })
            .addCase(detailSearchBusOrg.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.busOrgs = null
            })
            .addCase(deleteBusOrg.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteBusOrg.fulfilled, (state, action) => {
                state.isSuccess = true
            })
            .addCase(deleteBusOrg.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.busOrgs = null
            })
            .addCase(updateBusOrg.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateBusOrg.fulfilled, (state, action) => {
                state.busOrg = action.payload
            })
            .addCase(updateBusOrg.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = busOrgSlice.actions;
export default busOrgSlice.reducer;