import React from 'react';
import './LandingPage.scss';
import TalkeryStats from './components/TalkeryStats.jsx';
import PsychologistCTA from './components/PsychologistCTA.jsx';
import PsychoTopics from './components/PsychoTopics.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import ClientProblems from './components/ClientProblems.jsx';
import GuaranteeBlock from './components/GuaranteeBlock.jsx';
import ProfessionalsBlock from './components/ProfessionalsBlock.jsx';
import UserReviews from './components/UserReviews.jsx';
import GiftCard from './components/GiftCard.jsx';
import Header from '../../../../shared/components/Header/Header.jsx';
import Footer from '../../../../shared/components/Footer.jsx';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main className={'landing-page'}>
        <div className={'container'}>
          <PsychologistCTA />
          <TalkeryStats />
          <PsychoTopics />
          <HowItWorks />
          <ClientProblems />
        </div>
        <GuaranteeBlock />
        <div className="container">
          <ProfessionalsBlock />
          <UserReviews />
          <GiftCard />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
