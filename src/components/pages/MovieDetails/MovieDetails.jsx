import React, {useState, useEffect} from "react";
import { Routes, Route, useParams, Link } from 'react-router-dom';

import { requestDetails } from '../../../services/api';
import { STATUSES } from '../../../utils/constants';
import {CONSTANTS} from '../../../utils/constants';

import { Cast } from '../Cast';
import { Reviews } from '../Reviews'

import { Section } from 'components/Section';
import { Error } from 'components/Error';
import { Loader } from 'components/Loader';

import styles from './MovieDetails.module.scss';


const MovieDetails = () => {
  const param = useParams();
  const paramValue = param.id;
  const [details, setDetails] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);

  const showDetails = status === STATUSES.success;
  const showError = status === STATUSES.error;
  const showLoader = status === STATUSES.pending;

    const fetchDetailsByQuery = async (paramValue) => {
    try {
      setStatus(STATUSES.pending)
      const newDetails = await requestDetails(paramValue);
      setDetails(newDetails)
      setStatus(STATUSES.success); 
    } catch (error) {
      setError(error.message);
      setStatus(STATUSES.error);
    }
  }

   useEffect(() => {
    fetchDetailsByQuery(paramValue);
   }, [paramValue]);
  
  const staticPart = "https://image.tmdb.org/t/p/w500/";
  const posterUrl = `${staticPart}${details?.poster_path}`;  

  const releaseDate = details?.release_date;
  const year = new Date(releaseDate).getFullYear();

  const rateMumber = details?.popularity / 10;
  const roundedNumber = Math.round(rateMumber);


  return (
    <div className={styles.background}>
     <Section>
      {(!details || showLoader) && <Loader />}
      {showDetails && details && (
        <>
          <div className={styles.block}>
            <div className={styles.poster}>
              <img className={styles.image} src={details.poster_path ? posterUrl : CONSTANTS.defaultImg} alt={details.title} />
            </div>
            <div>
              <h1 className={styles.title}>{details.title} <span className={styles.fontNormal}>({year})</span></h1>
              <p className={styles.text}>User score: <span className={styles.fontNormal}>{roundedNumber}% </span></p>
              <p className={styles.text}>Overview: <span className={styles.fontNormal}>{details?.overview}</span></p>
              <span className={styles.text}>Genres:</span>
              {details.genres.map((genre, index) => (
                <span key={index} className={styles.genre}>{genre.name}</span>
              ))}
            </div>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}><Link to='cast' className={styles.link}>Cast</Link></li>
            <li className={styles.item}><Link to='reviews' className={styles.link}>Reviews</Link></li>
          </ul>
          <div>
            <Routes>
                <Route path='cast' element={<Cast />}></Route>
                <Route path='reviews' element={<Reviews />}></Route>
            </Routes>
          </div>
        </>
      )}
      {showError && <Error>Oops, some error occurred... {error}</Error>}
      </Section>
      </div> 
  );
};

export default MovieDetails;