import React from 'react';
import './ForTherapistsPage.scss';
import TherapistsCTA from './components/TherapistsCTA.jsx';
import TherapistsStats from './components/TherapistsStats.jsx';
import Advantages from './components/Advantages.jsx';
import AverageProfit from './components/AverageProfit.jsx';
import TherapistsReviews from './components/TherapistsReviews.jsx';
import Requirements from './components/Requirements.jsx';
import HowToStart from './components/HowToStart.jsx';
import Header from '../../../../shared/components/Header/Header.jsx';
import Footer from '../../../../shared/components/Footer.jsx';

const LandingForTherapists = () => {
  return (
    <>
      <Header />
      <main className={'for-therapists-page'}>
        <div className={'container'}>
          <TherapistsCTA />
          <TherapistsStats />
          <Advantages />
          <AverageProfit />
          <TherapistsReviews />
          <Requirements />
          <HowToStart />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingForTherapists;
