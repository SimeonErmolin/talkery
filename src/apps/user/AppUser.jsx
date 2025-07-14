import React from 'react';
import { Route, Routes } from 'react-router';

import AffiliatePage from '../../apps/user/pages/affiliate/AffiliatePage.jsx';
import GiftCardPage from '../../apps/user/pages/gift-card/GiftCardPage.jsx';
import SearchPage from '../../apps/user/pages/search/SearchPage.jsx';
import ChatsPage from '../../shared/components/chats/ChatsPage.jsx';
import Chat from '../../shared/components/chats/components/Chat.jsx';
import SpecialistPage from '../../apps/user/pages/specialist-page/SpecialistPage.jsx';
import ProfilePage from '../../apps/user/pages/user-profile/ProfilePage.jsx';
import GreetingTemplate from '../../shared/components/Greeting/GreetingTemplate.jsx';
import QuizPage from '../../apps/user/pages/quiz/QuizPage.jsx';
import NotFoundPage from '../../shared/components/NotFoundPage/NotFoundPage.jsx';
import MainLayout from '../../routes/MainLayout.jsx';
import OnlyHeader from '../../routes/OnlyHeader.jsx';
import OnlyNavigation from '../../routes/OnlyNavigation.jsx';
import EditProfileTemplate from '../../shared/components/EditProfile/EditProfileTemplate.jsx';
import BonusesPage from './pages/bonuses/BonusesPage.jsx';
import ScheduleTemplate from '../../shared/components/schedule/ScheduleTemplate.jsx';

const AppUser = () => {
  return (
    <Routes>
      <Route index element={<GreetingTemplate userType={'client'} />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="affiliate" element={<AffiliatePage />} />
        <Route path="gift-card" element={<GiftCardPage />} />
        <Route path="search" element={<SearchPage userType={'client'} />} />
        <Route
          path="schedule"
          element={<ScheduleTemplate userType={'client'} userId={'0'} />}
        />
        <Route path="bonuses" element={<BonusesPage />} />
        <Route path="chats" element={<ChatsPage userId="0" />} />
      </Route>

      <Route path="chats/:id" element={<Chat userType={'client'} />} />

      <Route path="search" element={<OnlyHeader />}>
        <Route path=":id" element={<SpecialistPage userType={'client'} />} />
      </Route>

      <Route path="/" element={<OnlyNavigation />}>
        <Route path="user-profile" element={<ProfilePage />} />
      </Route>

      <Route
        path="edit-profile"
        element={
          <EditProfileTemplate
            userType={'client'}
            avatarUrl={'/assets/mockPhotos/Alex.png'}
          />
        }
      />
      <Route path="quiz" element={<QuizPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppUser;
