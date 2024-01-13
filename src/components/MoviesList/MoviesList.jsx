import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MoviesList.module.scss';

const MoviesList = ({list, state=null}) => {
  return (
    <ul className={styles.list}>
      {list?.map((item, index) => 
        <li key={index} className={styles.item}>
          <Link state={state} to={`/movies/${item.id}`} className={styles.link}>{item.title}</Link>
        </li>
      )}
    </ul>
  );
};

export { MoviesList };