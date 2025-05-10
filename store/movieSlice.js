import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [
    { id: 1, name: "The GodFather" },
    { id: 2, name: "The Dark Knight rises" },
    { id: 3, name: "Fight Club" },
    { id: 4, name: "The Matrix" },
    { id: 5, name: "Avengers:Endgame" }
  ],
};

const movieslice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const lastId = state.movies.length > 0 ? state.movies[state.movies.length - 1].id : 0;
      const newMovie = {
        id: lastId + 1,
        name: action.payload,
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    }
  }
});

export const { addMovie, removeMovie } = movieslice.actions;
export default movieslice.reducer;
