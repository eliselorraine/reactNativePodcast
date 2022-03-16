import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            const updatedList = state.filter(podcast => podcast.id !== action.payload.id);
            return updatedList;
        }
    }
})

export const { add, remove } = listSlice.actions;

export default listSlice.reducer;