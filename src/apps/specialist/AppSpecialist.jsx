import React from 'react';
import { Route, Routes } from 'react-router';

import ProfilePage from '../../apps/specialist/pages/user-profile/ProfilePage.jsx';
import NotFoundPage from '../../shared/components/NotFoundPage/NotFoundPage.jsx';
import MainLayout from '../../routes/MainLayout.jsx';
import OnlyNavigation from '../../routes/OnlyNavigation.jsx';
import EditProfileTemplate from '../../shared/components/EditProfile/EditProfileTemplate.jsx';
import GreetingTemplate from '../../shared/components/Greeting/GreetingTemplate.jsx';
import BonusesPage from './pages/bonuses/BonusesPage.jsx';
import ChatsPage from '../../shared/components/chats/ChatsPage.jsx';
import Chat from '../../shared/components/chats/components/Chat.jsx';
import SpecialistPage from '../user/pages/specialist-page/SpecialistPage.jsx';
import ClientsPage from './pages/clients/ClientsPage.jsx';
import ScheduleTemplate from '../../shared/components/schedule/ScheduleTemplate.jsx';

const AppSpecialist = () => {
  return (
    <Routes>
      <Route index element={<GreetingTemplate userType={'specialist'} />} />

      <Route path="/" element={<MainLayout isSpecialist={true} />}>
        <Route
          path="schedule"
          element={<ScheduleTemplate userType="specialist" userId={'1'} />}
        />
        <Route path="bonuses" element={<BonusesPage />} />
        <Route path="chats" element={<ChatsPage userId="1" />} />
        <Route
          path="my-profile/:id"
          element={<SpecialistPage userType={'specialist'} />}
        />
        <Route path="clients" element={<ClientsPage userId="1" />} />
      </Route>

      <Route path="chats/:id" element={<Chat userType="specialist" />} />

      <Route path="/" element={<OnlyNavigation isSpecialist={true} />}>
        <Route path="user-profile" element={<ProfilePage />} />
      </Route>

      <Route
        path="edit-profile"
        element={
          <EditProfileTemplate
            userType="specialist"
            avatarUrl="/assets/mockPhotos/Katerina.jpeg"
          />
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppSpecialist;
