import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './reducers/moviesReducer'

const store = configureStore({
    reducer: {
        moviesReducer: moviesReducer
    },
});

export default store;
