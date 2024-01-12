import React, {useState, useEffect} from "react";
import { NavLink, useSearchParams } from 'react-router-dom';

import { requestMovies } from '../../../services/api';
import { STATUSES } from '../../../utils/constants';

import { Section } from 'components/Section';
import { Error } from 'components/Error';
import { Loader } from 'components/Loader';
import styles from './Movies.module.scss';


const Movies = () => {  
  
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const showMovies = status === STATUSES.success;
  const showError = status === STATUSES.error;
  const showLoader = status === STATUSES.pending;
  const emptyMovies = showMovies && movies?.length === 0;

  const fetchMoviesByQuery = async (searchTerm) => {
    try {
      setStatus(STATUSES.pending)
      const newMovies = await requestMovies(searchTerm);
       console.log(newMovies, 'movies');
      setMovies(newMovies.results)
      setStatus(STATUSES.success); 
    } catch (error) {
      setError(error.message);
      setStatus(STATUSES.error);
    }
  }

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    fetchMoviesByQuery(searchTerm);
  }, [searchTerm]);

    const handleSubmit = (event) => {
      event.preventDefault();
      const searchValue = event.currentTarget.elements.search.value;
      setSearchTerm(searchValue);
      setMovies([]);
  };


  return (
    <Section>
      <div className={styles.movies}>
         <form className={styles.form} onSubmit={handleSubmit} action="">
            <button className={styles.button} type="submit">&#128269;</button>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              name="search"
              className={styles.input}
            />
        </form>
        {showError && <Error>Oops, some error occurred... {error}</Error>}
        {emptyMovies && <Error>Sorry, no movies found &#129335;</Error>}
        {showLoader && <Loader />}
        {showMovies && movies && (
          <ul className={styles.list}>
            {movies?.map((movie, index) =>
              <li key={index} className={styles.item}>
                <NavLink to={`/movies/${movie.id}`} className={styles.link}>{movie.title}</NavLink>
              </li>
            )}
          </ul>
        )}
      </div>
    </Section>
  );
};

export default Movies;