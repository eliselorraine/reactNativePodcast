import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiCall } from '../utils/api'

// const initialState = [];

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await apiCall('star wars');
    return response.results;
})

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        // getResults(state, action) {
        //     state = [...state, action.payload]
        // }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                const newEntities = {}
                action.payload.forEach(podcast => {
                    newEntities[podcast.id] = podcast
                })
                state.entities = newEntities
                state.status = 'idle'
            })
    }
})

export const { getResults } = resultsSlice.actions
export default resultsSlice.reducer