import React from 'react';
// import PropTypes from 'prop-types';
import styled from './Footer.module.css';

import { HomeIcon, SearchIcon, HeartIcon, UserIcon } from '@heroicons/react/solid';

// Footer.propTypes = {};

function Footer(props) {
  return (
    <>
      <footer>
        <div className={styled.wrapper__text}>
          <h5 className={styled.title}>ABOUT</h5>
          <p className={styled.desc}>How Airbnb works</p>
          <p className={styled.desc}>Newsroom</p>
          <p className={styled.desc}>Airbnb 2021</p>
          <p className={styled.desc}>Investors</p>
          <p className={styled.desc}>Airbnb Luxe</p>
          <p className={styled.desc}>HotelTonight</p>
          <p className={styled.desc}>Airbnb for Work</p>
          <p className={styled.desc}>Made possible by Hosts</p>
          <p className={styled.desc}>Careers</p>
          <p className={styled.desc}>Founders' Letter</p>
        </div>
        <div className={styled.wrapper__text}>
          <h5 className={styled.title}>COMMUNITY</h5>
          <p className={styled.desc}>Diversity & Belonging</p>
          <p className={styled.desc}>Accessibility</p>
          <p className={styled.desc}>Airbnb Associates</p>
          <p className={styled.desc}>Frontline Stays</p>
          <p className={styled.desc}>Guest Referrals</p>
          <p className={styled.desc}>Airbnb.org</p>
        </div>
        <div className={styled.wrapper__text}>
          <h5 className={styled.title}>HOST</h5>
          <p className={styled.desc}>Host your home</p>
          <p className={styled.desc}>Host an Online Experience</p>
          <p className={styled.desc}>Host an Experience</p>
          <p className={styled.desc}>Responsible hosting</p>
          <p className={styled.desc}>Resource Centre</p>
          <p className={styled.desc}>Community Centre</p>
        </div>
        <div className={styled.wrapper__text}>
          <h5 className={styled.title}>SUPPORT</h5>

          <p className={styled.desc}>Our COVID-19 Response</p>
          <p className={styled.desc}>Help Centre</p>
          <p className={styled.desc}>Cancellation options</p>
          <p className={styled.desc}>Neighbourhood Support</p>
          <p className={styled.desc}>Trust & Safety</p>
        </div>
      </footer>
      <div className={styled.navbar}>
        <div className={styled.wrapper__link}>
          <div className={`${styled.group__icon} ${styled.active}`}>
            <HomeIcon className={styled.icon} />
            <p>Home</p>
          </div>
          <div className={styled.group__icon}>
            <SearchIcon className={styled.icon} />
            <p>Explore</p>
          </div>
          <div className={styled.group__icon}>
            <HeartIcon className={styled.icon} />
            <p>Wishlists</p>
          </div>
          <div className={styled.group__icon}>
            <UserIcon className={styled.icon} />
            <p>Login</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
