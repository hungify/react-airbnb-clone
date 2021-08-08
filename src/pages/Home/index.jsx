import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import homeStyle from './Home.module.css';
import SmallCard from '../../components/SmallCard';
import { ExploreData, LiveAnywhereData } from '../../db/db';
import MediumCard from '../../components/MediumCard';
import LargeCard from '../../components/LargeCard';
import Footer from '../../components/Footer';

// Home.propTypes = {};

function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [closeNavbar, setCloseNavBar] = useState(false);
  const [positionScroll, setPositionScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [positionScroll]);

  const handleScroll = () => {
    const positionY = window.scrollY;
    setPositionScroll(positionY);

    if (positionY >= 80) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
    if (positionY >= 600) {
      setCloseNavBar(true);
    } else {
      setCloseNavBar(false);
    }
  };
  return (
    <>
      <Header showSearch={showSearch} />
      <main>
        <Hero />
        <SmallCard ExploreData={ExploreData} />
        <LargeCard
          img="https://a0.muscache.com/im/pictures/258b129d-d1cd-48b5-86d4-86206c13ebf7.jpg?im_w=1440"
          title="Not sure where to go? Perfect."
          buttonText="I'm flexible"
          isBanner={true}
        />
        <MediumCard LiveAnywhereData={LiveAnywhereData} />
        <LargeCard
          img="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
          title="Try hosting"
          description="Earn extra income and unlock new opportunities by sharing your space"
          buttonText="Learn more"
        />
      </main>
      <Footer closeNavbar={closeNavbar} />
    </>
  );
}

export default Home;
