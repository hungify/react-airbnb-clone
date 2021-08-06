import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from './Search.module.css';

Search.propTypes = {};

function Search(props) {
  return (
    <div className={styled}>
      <Header />
      <main className={styled.main}>
        <section className={styled.wrapper__text}>
          <p className={styled.text}>300+ Stays for 5 number of guests</p>
          <h1 className={styled.title}>Stays in New york</h1>

          {/* className={styled.hidden} */}
          <div>
            <p className={styled.paragraph}>Instant Book</p>
            <p className={styled.paragraph}>Price</p>
            <p className={styled.paragraph}>Type of place</p>
            <p className={styled.paragraph}> Free cancellation</p>
            <p className={styled.paragraph}>More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
