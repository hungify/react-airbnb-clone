import React from 'react';
import PropTypes from 'prop-types';
import bannerStyle from './Banner.module.css';

Banner.propTypes = {};

function Banner(props) {
  return (
    <div className={bannerStyle.wrapper__img}>
      <img
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        alt="tree"
        className={bannerStyle.img}
      />
      <div className={bannerStyle.wrapper__text}>
        <p className={bannerStyle.text}>Not sure where to go? Perfect.</p>
        <button className={bannerStyle.button}>I'm flexible</button>
      </div>
    </div>
  );
}

export default Banner;
