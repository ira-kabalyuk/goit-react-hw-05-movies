import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { MovieDetails } from './pages/MovieDetails';

import { Error } from './Error';
import { Header } from './Header';


export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id/*" element={<MovieDetails />} />
        <Route path="*" element={<Error>404. Page not found</Error>} />
      </Routes>
    </>
  );
};
