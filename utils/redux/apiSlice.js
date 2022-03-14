import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCall } from '../api';

const fetchPodcasts = createAsyncThunk(
    'data/fetchByQuery',
    async (query, thunkAPI) => {
        const response = await apiCall(query)
        return response.results;
    }
)

const apiSlice = createSlice({
    name: 'data',
    initialState: { entities: [], loading: 'idle' },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPodcasts.fulfilled, (state, action) => {
            state.entities.push(action.payload);
        })
    }
})