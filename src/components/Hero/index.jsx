import React from 'react';
// import PropTypes from 'prop-types';
import styled from './Hero.module.css';

// Hero.propTypes = {};

function Hero(props) {
  return (
    <section className={styled.img__overlay}>
      <div>
        <div className={styled.wrapper__text}>
          <h2 className={styled.title}>Olympian & Paralympian Online Experiences</h2>
          <button href="#" className={styled.button}>
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
