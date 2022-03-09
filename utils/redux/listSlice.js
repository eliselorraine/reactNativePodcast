import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { add } = listSlice.actions;

export default listSlice.reducer;