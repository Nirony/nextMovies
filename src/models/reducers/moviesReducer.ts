import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Movie } from "../http/getMovies";
import { getMoviesApi } from "../../services/api/MoviesApi";

export interface MoviesReducerState {
    movies: Movie[]
}

const INITIAL_STATE: MoviesReducerState = {
    movies: [],
};

export const getMovies = createAsyncThunk('moviesList/getMovies', async () => {
    const response = await getMoviesApi();
    return response;
});

export const moviesSlice = createSlice({
    name: 'moviesList',
    initialState: INITIAL_STATE,
    reducers: {
        setMovies(state, action: PayloadAction<Movie[]>) {
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
