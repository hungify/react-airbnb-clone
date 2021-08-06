import React from 'react';
import PropTypes from 'prop-types';
import smallCardStyle from './SmallCard.module.css';

SmallCard.propTypes = {};

function SmallCard({ img, distance, location }) {
  return (
    <div className={`${smallCardStyle.flex} ${smallCardStyle.inner}`}>
      <div className={smallCardStyle.wrapper__img}>
        <img src={img} alt="" className={smallCardStyle.img} />
      </div>
      <div className={smallCardStyle.wrapper__text}>
        <h2 className={smallCardStyle.title}>{location}</h2>
        <h2 className={smallCardStyle.text}>{distance}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
