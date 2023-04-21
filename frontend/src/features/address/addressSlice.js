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

export const createNewAddress = createAsyncThunk('officerUnit/create', async (AddressData, thunkAPI) => {
    try {
        return await addressService.createNewAddress(AddressData);
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

export const searchAddress = createAsyncThunk('address/search', async (searchQuery, thunkAPI) => {
    try {
        return await addressService.searchAddress(searchQuery.query);

    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const detailSearchAddress = createAsyncThunk('address/detailSearch', async (searchData, thunkAPI) => {
    try {
        console.log('searchData from the SLICE OF DETAIL FIND:', searchData);
        return await addressService.detailSearchAddress(searchData);
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const deleteAddress = createAsyncThunk('address/delete', async (userData, thunkAPI) => {
    try {
        console.log('DELETE ADDRESS SLICE');
        return await addressService.deleteAddress(userData);
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
            .addCase(createNewAddress.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createNewAddress.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
                state.address = action.payload
            })
            .addCase(createNewAddress.rejected, (state, action) => {
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
            .addCase(searchAddress.pending, (state) => {
                state.isLoading = true
            })
            .addCase(searchAddress.fulfilled, (state, action) => {
                state.addresses = action.payload
            })
            .addCase(searchAddress.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.addresses = null
            })
            .addCase(detailSearchAddress.pending, (state) => {
                state.isLoading = true
            })
            .addCase(detailSearchAddress.fulfilled, (state, action) => {
                state.addresses = action.payload
            })
            .addCase(detailSearchAddress.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.addresses = null
            })
            .addCase(deleteAddress.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteAddress.fulfilled, (state, action) => {
                state.isSuccess = true
            })
            .addCase(deleteAddress.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.addresses = null
            })
    }
})

export const {reset} = addressSlice.actions;
export default addressSlice.reducer;