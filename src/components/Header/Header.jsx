import React from "react";
import { NavLink } from 'react-router-dom';
import { Section } from "components/Section";

import styles from './Header.module.scss';


const Header = () => {
  return (   
    <div className={styles.header}>
      <Section>
         <nav className={styles.nav}>
          <NavLink to="/" className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Home</NavLink>
          <NavLink to="/movies" className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Movies</NavLink>
        </nav>
      </Section>
    </div>
  );
};

export { Header };
