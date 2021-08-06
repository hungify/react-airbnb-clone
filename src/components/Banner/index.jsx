import React from 'react';
import PropTypes from 'prop-types';
import bannerStyle from './Banner.module.css';

Banner.propTypes = {};

function Banner(props) {
  return (
    <section className={bannerStyle.img__overlay}>
      {/* <img
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        alt="tree"
        className={bannerStyle.img}
      /> */}
      <div className={bannerStyle.wrapper__text}>
        <span className={bannerStyle.text__inner}>
          <h1 className={bannerStyle.title}>Olympian & Paralympian Online Experiences</h1>
          <a href="#" className={bannerStyle.button}>
            Explore Now
          </a>
        </span>
      </div>
    </section>
  );
}

export default Banner;
