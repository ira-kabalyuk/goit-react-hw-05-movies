import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import { requestCasts } from '../../../services/api';

import { STATUSES } from '../../../utils/constants';
import {CONSTANTS} from '../../../utils/constants';

import { Error } from 'components/Error';
import { Loader } from 'components/Loader';
import { Message } from 'components/Message';

import styles from './Cast.module.scss';


const Cast = () => {
  const param = useParams();
  const paramValue = param.id;
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);

  const showCast = status === STATUSES.success;
  const showError = status === STATUSES.error;
  const showLoader = status === STATUSES.pending;

    const fetchCastsByQuery = async (paramValue) => {
    try {
      setStatus(STATUSES.pending)
      const newCast = await requestCasts(paramValue);      
      setCast(newCast)
      setStatus(STATUSES.success); 
    } catch (error) {
      setError(error.message);
      setStatus(STATUSES.error);
    }
  }

   useEffect(() => {
    fetchCastsByQuery(paramValue);
   }, [paramValue]);

  const staticPart = "https://image.tmdb.org/t/p/w500/";

  return (
    <>
      {(!cast || showLoader) && <Loader />}
      {showCast && cast && (
        cast.cast && cast.cast.length > 0 ? (
          <ul className={styles.cast}>
            {cast.cast.map((item, index) => (
              <li key={index} className={styles.item}>
                <p className={styles.name}>{item.name}</p>
                <div className={styles.image}>
                  <img src={item.profile_path ? `${staticPart}${item.profile_path}` : CONSTANTS.defaultImg} alt={cast.cast.title} />
                </div>
              </li>
            ))}
          </ul>
          ) : (
            <Message>There is no information here yet 🤷‍♀️</Message>
          )
        )}
        {showError && <Error>Oops, some error occurred... {error}</Error>}
    </>
  );
};

export default Cast;