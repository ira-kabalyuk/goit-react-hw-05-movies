import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

import { requestReviews } from '../../../services/api';

import { STATUSES } from '../../../utils/constants';

import { Message } from 'components/Message';
import { Error } from 'components/Error';
import { Loader } from 'components/Loader';

import styles from './Reviews.module.scss';


const Reviews = () => {
  const param = useParams();
  const paramValue = param.id;
  const [review, setReview] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);

  const showReview = status === STATUSES.success;
  const showError = status === STATUSES.error;
  const showLoader = status === STATUSES.pending;

    const fetchReviewsByQuery = async (paramValue) => {
    try {
      setStatus(STATUSES.pending)
      const newReview = await requestReviews(paramValue);     
      setReview(newReview)
      setStatus(STATUSES.success); 
    } catch (error) {
      setError(error.message);
      setStatus(STATUSES.error);
    }
  }

   useEffect(() => {
    fetchReviewsByQuery(paramValue);
   }, [paramValue]);
  

  return (
    <>
      {(!review || showLoader) && <Loader />}   
      {showReview && review && (
        review.results && review.results.length > 0 ? (
        review.results.map((item, index) => (
          <div className={styles.content} key={paramValue + index}>
            <h2 className={styles.author}>{item.author}</h2>
            <p className={styles.text}>{item.content}</p>
         </div>
        ))
        ) : (
          <Message>There is no information here yet 🤷‍♀️</Message>
        )
      )}
       {showError && <Error>Oops, some error occurred... {error}</Error>}
    </>   
  );
};

export default Reviews;