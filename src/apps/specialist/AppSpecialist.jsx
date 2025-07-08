import React from 'react';
import { Route, Routes } from 'react-router';

import GreetingPage from '../../apps/specialist/pages/greeting/GreetingPage.jsx';
import SchedulePage from '../../apps/specialist/pages/schedule/SchedulePage.jsx';
import ProfilePage from '../../apps/specialist/pages/user-profile/ProfilePage.jsx';
import EditProfilePage from '../../apps/specialist/pages/edit-profile/EditProfilePage.jsx';
import NotFoundPage from '../../shared/components/NotFoundPage/NotFoundPage.jsx';
import MainLayout from '../../routes/MainLayout.jsx';
import OnlyNavigation from '../../routes/OnlyNavigation.jsx';
import LandingForTherapists from './pages/landing-for-therapists/LandingForTherapists.jsx';

const AppSpecialist = () => {
  return (
    <Routes>
      <Route index element={<LandingForTherapists />} />

      <Route element={<GreetingPage />} />

      <Route path={'/'} element={<MainLayout isSpecialist={true} />}>
        <Route path={'/schedule'} element={<SchedulePage />} />
      </Route>

      <Route path={'/'} element={<OnlyNavigation isSpecialist={true} />}>
        <Route path={'/user-profile'} element={<ProfilePage />} />
      </Route>

      <Route path={'/edit-profile'} element={<EditProfilePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppSpecialist;
