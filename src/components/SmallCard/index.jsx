import React from 'react';
import PropTypes from 'prop-types';
import styled from './SmallCard.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/GlobalContext';

SmallCard.propTypes = {
  ExploreData: PropTypes.array,
};

function SmallCard({ ExploreData }) {
  const { mode } = useContext(ThemeContext);
  return (
    <section
      className={
        mode === 'dark' ? `${styled.sm__card} ${styled.mode__dark}` : ` ${styled.sm__card}`
      }
    >
      <h2 className={`${styled.title}`}>Explore Nearby</h2>
      <div className={`${styled.wrapper__card} `}>
        {ExploreData?.map(({ img, distance, location }) => (
          <div className={`${styled.card__inner}`} key={location}>
            <div className={styled.wrapper__img}>
              <img src={img} alt="" className={styled.img} />
            </div>
            <div className={styled.wrapper__text}>
              <h2 className={styled.title}>{location}</h2>
              <h2 className={styled.text}>{distance}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SmallCard;
