import React from 'react';
import styles from './Message.module.scss';

const Message = ({children}) => {
  return (
    <p className={styles.message}>{children}</p>
  );
};

export { Message };