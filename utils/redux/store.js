import { configureStore } from '@reduxjs/toolkit'
import listReducer from './listSlice';
import podcastsReducer from './apiSlice';

export default configureStore({
    reducer: {
        list: listReducer,
        podcasts: podcastsReducer,
    },
})