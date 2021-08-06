import React, { useState } from 'react';
import PropTypes from 'prop-types';
import headerStyle from './Header.module.css';
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

Header.propTypes = {};

function Header(props) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

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
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={headerStyle.input__search}
          type="text"
          placeholder="Start your search"
        />
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

      {searchInput && (
        <div className={headerStyle.wrapper__date}>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#fd5b61']}
            onChange={handleSelect}
            // dateDisplayFormat="dd/MM/yyyy"s
          />
        </div>
      )}
    </header>
  );
}

export default Header;
