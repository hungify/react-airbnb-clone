import React from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.css';
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';

Header.propTypes = {};

function Header(props) {
  return (
    <header className={headerStyle.inner}>
      <div className={headerStyle.wrapper__logo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="airbnb icon"
          className={headerStyle.logo}
        />
      </div>

      <div className={headerStyle.wrapper__search}>
        <input className={headerStyle.input__search} type="text" placeholder="Start your search" />
        <SearchIcon className={headerStyle.icon__search} />
      </div>

      <div className={headerStyle.wrapper__menu}>
        <p className={headerStyle.title}>Become a host</p>
        <GlobeAltIcon className={headerStyle.globe__icon} />
        <div className={headerStyle.menu}>
          <MenuIcon className={headerStyle.menu__icon} />
          <UserCircleIcon className={headerStyle.user__icon} />
        </div>
      </div>
    </header>
  );
}

export default Header;
