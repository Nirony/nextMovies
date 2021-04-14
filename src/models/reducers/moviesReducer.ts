import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface MoviesReducerState {
    movies: any // todo: insert model
}

const INITIAL_STATE: MoviesReducerState = {
    movies: [],
};

export const getMovies = createAsyncThunk('moviesList/getMovies', async () => {
    // todo: add api call
});

export const moviesSlice = createSlice({
    name: 'moviesList',
    initialState: INITIAL_STATE,
    reducers: {
        setMovies(state, action: any) { // todo add type
            state.movies = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.movies = action.payload
        })
    }
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer
