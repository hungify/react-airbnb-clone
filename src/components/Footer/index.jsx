import PropTypes from 'prop-types';
import React from 'react';
import MyLife from '../MyLife';
import NavBar from '../Navbar';
import styled from './Footer.module.css';

Footer.propTypes = {
  closeNavbar: PropTypes.bool,
  theme: PropTypes.object,
};

function Footer({ closeNavbar }) {
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
      <NavBar closeNavbar={closeNavbar} />
      <MyLife />
    </>
  );
}

export default Footer;
