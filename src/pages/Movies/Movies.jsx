import React, {useState, useEffect} from "react";
import { useSearchParams, useLocation } from 'react-router-dom';

import { requestMovies } from 'services/api';
import { STATUSES } from 'utils/constants';

import { Section } from 'components/Section';
import { Error } from 'components/Error';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';
import { SearchForm } from 'components/SearchForm';


const Movies = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null); 

  const showMovies = status === STATUSES.success;
  const showError = status === STATUSES.error;
  const showLoader = status === STATUSES.pending;
  const emptyMovies = showMovies && movies?.length === 0;

  const fetchMoviesByQuery = async (query) => {
    try {
      setStatus(STATUSES.pending)
      const newMovies = await requestMovies(query);   
      setMovies(newMovies.results)
      setStatus(STATUSES.success); 
    } catch (error) {
      setError(error.message);
      setStatus(STATUSES.error);
    }
  }

  useEffect(() => {
    if (query === null) {
      return;
    }
    fetchMoviesByQuery(query);
  }, [query]);

    const handleSubmit = (event) => {
      event.preventDefault();
      const searchValue = event.currentTarget.elements.search.value;
      setSearchParams({ query: searchValue }); 
      setMovies([]);
  };

  return (
    <Section>
      <>
        <SearchForm handleSubmit={handleSubmit} query={query}></SearchForm>
        {showError && <Error>Oops, some error occurred... {error}</Error>}
        {emptyMovies && <Error>Sorry, no movies found &#129335;</Error>}
        {showLoader && <Loader />}
        {showMovies && movies && (
          <MoviesList list={movies} state={{from: location}}></MoviesList>
        )}
      </>
    </Section>
  );
};

export default Movies;