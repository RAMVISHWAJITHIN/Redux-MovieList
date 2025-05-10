import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../../store/movieSlice';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';

function MovieList() {
  const movies = useSelector((state) => state.movies.movies);
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie.trim()) {
      dispatch(addMovie(newMovie.trim()));
      toast.success('Added Movie to wishlist');
      setNewMovie("");
    }
  };

  const handleDeleteMovie = (id) => {
    dispatch(removeMovie(id));
    toast.success('🎉 completed watching movie!');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-xl bg-white shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">🎬 Movie List</h1>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Add a movie..."
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
        />
        <button
          onClick={handleAddMovie}
          className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <AddIcon fontSize="small" /> Add
        </button>
      </div>

      <div className="space-y-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex justify-between items-center p-4 border rounded-lg bg-gray-50"
          >
            <span className="text-lg text-gray-700">{movie.name}</span>
            <button
              onClick={() => handleDeleteMovie(movie.id)}
              className="text-green-600 hover:text-green-800"
            >
              <DoneIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;




