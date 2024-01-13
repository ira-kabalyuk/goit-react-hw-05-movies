import React from 'react';
import styles from './SearchForm.module.scss';

const SearchForm = ({handleSubmit, query}) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit} action="">
      <button className={styles.button} type="submit">&#128269;</button>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="search"
        className={styles.input}
        defaultValue={query}
      />
    </form>
  );
};

export { SearchForm };