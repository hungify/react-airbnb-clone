import React from 'react';
import PropTypes from 'prop-types';
import styled from './MediumCard.module.css';

MediumCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

function MediumCard({ img, title }) {
  return (
    <div className={styled.inner}>
      <div className={styled.wrapper__img}>
        <div>
          <img className={styled.img} src={img} alt={title} />
        </div>
      </div>
      <h3 className={styled.title}>{title}</h3>
    </div>
  );
}

export default MediumCard;
