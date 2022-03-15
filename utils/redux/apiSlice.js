import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCall } from '../api';

export const fetchPodcasts = createAsyncThunk(
    'podcasts/fetchPodcasts',
    async (obj) => {
        return apiCall(obj.query)
            .then(res => res.results)
            // .then(data => console.log(data.results))
            .catch(console.log(e.message));
    }
)

const apiSlice = createSlice({
    name: 'podcasts',
    initialState: {
        podcasts: [],
        status: null,
    },
    extraReducers: {
        [fetchPodcasts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchPodcasts.fulfilled]: (state, { payload }) => {
            state.podcasts = payload;
            console.log(payload);
            state.status = 'success';
        },
        [fetchPodcasts.rejected]: (state, action) => {
            state.status = 'error';
        },
    },
})

export default apiSlice.reducer;