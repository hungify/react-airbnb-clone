import React from 'react';
import PropTypes from 'prop-types';
import styled from './ExtraLargeCard.module.css';

ExtraLargeCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  isBanner: PropTypes.bool,
};

function ExtraLargeCard({ img, title, description, buttonText, isBanner }) {
  return (
    <section className={isBanner ? `${styled.banner} ${styled.lg__card}` : `${styled.lg__card}`}>
      <div className={styled.wrapper__img}>
        <div>
          <img src={img} alt={title} className={styled.img} />
        </div>
        <div className={styled.wrapper__text}>
          <h3 className={styled.title}>{title}</h3>
          <p className={styled.desc}>{description}</p>

          <button className={styled.button}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}

export default ExtraLargeCard;
