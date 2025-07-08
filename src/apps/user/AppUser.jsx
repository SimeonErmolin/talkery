import React from 'react';
import { Route, Routes } from 'react-router';

import AffiliatePage from '../../apps/user/pages/affiliate/AffiliatePage.jsx';
import GiftCardPage from '../../apps/user/pages/gift-card/GiftCardPage.jsx';
import SearchPage from '../../apps/user/pages/search/SearchPage.jsx';
import SchedulePage from '../../apps/user/pages/schedule/SchedulePage.jsx';
import BonusesPage from '../../apps/user/pages/bonuses/BonusesPage.jsx';
import ChatsPage from '../../apps/user/pages/chats/ChatsPage.jsx';
import Chat from '../../apps/user/pages/chats/components/Chat.jsx';
import SpecialistPage from '../../apps/user/pages/specialist-page/SpecialistPage.jsx';
import ProfilePage from '../../apps/user/pages/user-profile/ProfilePage.jsx';
import GreetingPage from '../../apps/user/pages/greeting/GreetingPage.jsx';
import EditProfilePage from '../../apps/user/pages/edit-profile/EditProfilePage.jsx';
import QuizPage from '../../apps/user/pages/quiz/QuizPage.jsx';
import NotFoundPage from '../../shared/components/NotFoundPage/NotFoundPage.jsx';
import LandingPage from '../../apps/user/pages/landing/LandingPage.jsx';
import MainLayout from '../../routes/MainLayout.jsx';
import OnlyHeader from '../../routes/OnlyHeader.jsx';
import OnlyNavigation from '../../routes/OnlyNavigation.jsx';

const AppUser = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="affiliate" element={<AffiliatePage />} />
        <Route path="gift-card" element={<GiftCardPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="bonuses" element={<BonusesPage />} />
        <Route path="chats" element={<ChatsPage />} />
      </Route>

      <Route path="chats/:id" element={<Chat />} />

      <Route path="search" element={<OnlyHeader />}>
        <Route path=":id" element={<SpecialistPage />} />
      </Route>

      <Route path="/" element={<OnlyNavigation />}>
        <Route path="user-profile" element={<ProfilePage />} />
      </Route>

      <Route element={<GreetingPage />} />
      <Route path="edit-profile" element={<EditProfilePage />} />
      <Route path="quiz" element={<QuizPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppUser;
