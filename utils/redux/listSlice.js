import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            const indexToRemove = state.indexOf(action.payload);
            state.splice(indexToRemove, 1);
        }
    }
})

export const { add, remove } = listSlice.actions;

export default listSlice.reducer;