import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import homeStyle from './Home.module.css';
import SmallCard from '../../components/SmallCard';

import { ExploreData, LiveAnywhereData } from '../../db/db';
import MediumCard from '../../components/MediumCard';
import LargeCard from '../../components/LargeCard';
import Footer from '../../components/Footer';

Home.propTypes = {};

function Home() {
  return (
    <div>
      <Header />

      <main className={homeStyle.wrapper}>
        <Banner />
        <section className={homeStyle.location}>
          <h2 className={`${homeStyle.title} ${homeStyle.p_b_5}`}>Explore Nearby</h2>
          <div className={`${homeStyle.wrapper__sm_card} ${homeStyle.grid}`}>
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

        <section>
          <h2 className={`${homeStyle.title} ${homeStyle.p_y_8}`}>Live Anywhere</h2>

          <div className={`${homeStyle.flex} ${homeStyle.wrapper__md_card} `}>
            {LiveAnywhereData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
