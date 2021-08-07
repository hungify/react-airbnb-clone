import React from 'react';
import PropTypes from 'prop-types';
import styled from './NavBar.module.css';
import { SearchIcon, HeartIcon, UserIcon } from '@heroicons/react/solid';
NavBar.propTypes = {
  closeNavbar: PropTypes.bool,
};

function NavBar({ closeNavbar }) {
  console.log('🚀 ~ file: index.jsx ~ line 10 ~ NavBar ~ closeNavbar', closeNavbar);

  return (
    <nav className={closeNavbar ? `${styled.hidden}` : `${styled.navbar}`}>
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
