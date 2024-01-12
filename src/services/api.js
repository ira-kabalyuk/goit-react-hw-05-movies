import axios from 'axios';

export const requestData = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzczZmVmMDk2MTUwMjUwYWQzYmI0YTJiYTg3YWE3YiIsInN1YiI6IjYyZDcwYWFhZTE5NGIwMDA1NmI1YjdkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0jNox1rTYOYjOVBcKh0Pb5udXbOSEAy9qpzL_pb_Jfc`,
        'accept': 'application/json'
      }
    });

    return data;
  } catch (error) {
    throw error;
  }
};


export const requestTrending = async () => {
  const TRENDING_URL = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;  

  return await requestData(TRENDING_URL);
};

export const requestMovies = async (searchTerm) => {
  const MOVIES_URL = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchTerm}`; 

  return await requestData(MOVIES_URL);
};

export const requestDetails = async (detailsId) => {
  const DETAILS_URL = `https://api.themoviedb.org/3/movie/${detailsId}?language=en-US`; 

  return await requestData(DETAILS_URL);
};

export const requestCasts = async (detailsId) => {
  const CASTS_URL = `https://api.themoviedb.org/3/movie/${detailsId}/credits?language=en-US`; 

  return await requestData(CASTS_URL);
};

export const requestReviews = async (detailsId) => {
  const REVIEWS_URL = `https://api.themoviedb.org/3/movie/${detailsId}/reviews?language=en-US&page=1`; 

  return await requestData(REVIEWS_URL);
};
