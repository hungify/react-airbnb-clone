import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from './NavBar.module.css';
import { SearchIcon, HeartIcon, UserIcon } from '@heroicons/react/solid';

import { getStyles, ThemeContext } from '../../context/GlobalContext';
NavBar.propTypes = {
  closeNavbar: PropTypes.bool,
};

function NavBar({ closeNavbar }) {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);

  return (
    <nav
      className={closeNavbar ? `${styled.hidden}` : `${styled.navbar}`}
      style={{ ...styles.background, ...styles.text, ...styles.fillColor }}
    >
      <div className={styled.wrapper__link}>
        <a href="#" className={`${styled.link}  ${styled.active}`}>
          <div className={`${styled.group__icon}`}>
            <SearchIcon className={styled.icon} />
            <p>Explore</p>
          </div>
        </a>

        <a href="#" className={styled.link}>
          <div className={styled.group__icon}>
            <HeartIcon className={styled.icon} />
            <p>Wishlists</p>
          </div>
        </a>
        <a href="#" className={styled.link}>
          <div className={styled.group__icon}>
            <UserIcon className={styled.icon} />
            <p>Login</p>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
