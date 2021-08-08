import React from 'react';
import PropTypes from 'prop-types';
import styled from './LargeCard.module.css';

LargeCard.propTypes = {
  DiscoverData: PropTypes.array,
};

function LargeCard({ DiscoverData }) {
  return (
    <section className={styled.lg__card}>
      <h2>Discover things to do</h2>
      <div className={styled.card__list}>
        {DiscoverData.map(({ title, description, img }) => (
          <div className={styled.card}>
            <div className={styled.wrapper__img}>
              <div>
                <img src={img} alt={title} className={styled.img} />
              </div>
            </div>
            <span className={styled.wrapper__text}>
              <h3>{title}</h3>
              <p>{description}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LargeCard;
