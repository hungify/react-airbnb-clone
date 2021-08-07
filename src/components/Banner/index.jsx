import React from 'react';
// import PropTypes from 'prop-types';
import bannerStyle from './Banner.module.css';

// Banner.propTypes = {};

function Banner(props) {
  return (
    <section className={bannerStyle.img__overlay}>
      <div className={bannerStyle.wrapper__hero}>
        <img
          src="https://airbb-challenge.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhero-image.e2100f40890c4ace1b268868eb858d6e.png&w=2048&q=75"
          alt="hero"
        />
      </div>
      <div className={bannerStyle.wrapper__text}>
        <h2 className={bannerStyle.title}>Olympian & Paralympian Online Experiences</h2>
        <button href="#" className={bannerStyle.button}>
          Explore Now
        </button>
      </div>
    </section>
  );
}

export default Banner;
