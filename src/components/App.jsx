import React, {Suspense, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';

import { Error } from './Error';
import { Header } from './Header';
import { Loader } from './Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));


export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback = {<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:id/*" element={<MovieDetails />} />
          <Route path="*" element={<Error>404. Page not found</Error>} />
        </Routes>
      </Suspense>
    </>
  );
};
