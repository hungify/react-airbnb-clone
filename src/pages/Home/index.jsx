import React, { useEffect } from 'react';
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
    <>
      <Header />
      <Banner />
      <main className={homeStyle.main}>
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
          img="https://airbnb-clone-taupe.vercel.app/_next/image?url=%2Fbigcards%2Ftryhosting.webp&w=1920&q=75"
          title="Try hosting"
          description="Earn extra income and unlock new opportunities by sharing your space"
          buttonText="Learn more"
        />
      </main>
      <Footer />
    </>
  );
}

export default Home;
