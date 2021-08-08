import React from 'react';
import PropTypes from 'prop-types';
import styled from './MediumCard.module.css';

MediumCard.propTypes = {
  LiveAnywhereData: PropTypes.array,
};

function MediumCard({ LiveAnywhereData }) {
  return (
    <section className={styled.md_card}>
      <h2 className={`${styled.heading}`}>Live Anywhere</h2>
      <div className={` ${styled.wrapper__card} `}>
        {LiveAnywhereData.map(({ img, title }) => (
          <div className={styled.card__inner} key={img}>
            <div className={styled.wrapper__img}>
              <div>
                <img className={styled.img} src={img} alt={title} />
              </div>
            </div>
            <h3 className={styled.sub}>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MediumCard;
