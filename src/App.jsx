// App.jsx or App.js
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieList from './components/MovieList'; // adjust path as needed

function App() {
  return (
    <div>
      <MovieList />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;