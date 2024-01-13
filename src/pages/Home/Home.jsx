import React, { useState, useEffect } from "react";
import { requestTrending } from 'services/api';

import { STATUSES } from 'utils/constants';

import {MoviesList} from 'components/MoviesList'
import { Section } from 'components/Section';
import { Error } from 'components/Error';
import { Loader } from 'components/Loader';

import styles from './Home.module.scss';


const Home = () => {
  const [trending, setTrending] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);

  const showTrending = status === STATUSES.success;
  const showError = status === STATUSES.error;
  const showLoader = status === STATUSES.pending;

  const fetchTrendingByQuery = async () => {
    try {
      setStatus(STATUSES.pending)
      const newMovies = await requestTrending();
      setTrending(newMovies.results)
      setStatus(STATUSES.success); 
    } catch (error) {
      setError(error.message);
      setStatus(STATUSES.error);
    }
  }

  useEffect(() => {
    fetchTrendingByQuery();
  }, []);


  return (
    <Section>
      {showError && <Error>Oops, some error occurred... {error}</Error>}
      {(!trending || showLoader) && <Loader />}
      {showTrending && trending && (
        <>
        <h1 className={styles.title}>Trending today</h1>
          <MoviesList list={trending}></MoviesList>
        </>
      )}
    </Section>
  );
};

export default Home;