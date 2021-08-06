import React from 'react';
import PropTypes from 'prop-types';
import styled from './MediumCard.module.css';

MediumCard.propTypes = {};

function MediumCard({ img, title }) {
  return (
    <div className={styled.inner}>
      <div className={styled.wrapper__img}>
        <img className={styled.img} src={img} alt={title} />
      </div>
      <h3 className={styled.title}>{title}</h3>
    </div>
  );
}

export default MediumCard;
