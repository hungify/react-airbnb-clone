import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import homeStyle from './Home.module.css';
import SmallCard from '../../components/SmallCard';

import { ExploreData } from '../../db/db';

Home.propTypes = {};

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main className={homeStyle.wrapper}>
        <section className={homeStyle.location}>
          <h2 className={homeStyle.title}>Explore Nearby</h2>
          <div className={`${homeStyle.wrapper__card} ${homeStyle.grid}`}>
            {ExploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
