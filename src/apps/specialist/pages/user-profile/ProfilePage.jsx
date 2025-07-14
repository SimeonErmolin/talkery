import React from 'react';
import UserProfile from '../../../../shared/components/UserProfile/UserProfile.jsx';

const ProfilePage = () => {
  return (
    <UserProfile
      userType={'specialist'}
      avatarUrl={'/assets/mockPhotos/Katerina.jpeg'}
      userName={'Катерина Іваненко'}
      userBalance={'1260.00'}
    />
  );
};

export default ProfilePage;
