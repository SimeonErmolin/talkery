import React from 'react';
import '../../../../shared/components/UserProfile/UserProfile.scss';
import UserProfile from '../../../../shared/components/UserProfile/UserProfile.jsx';

const ProfilePage = () => {
  return (
    <UserProfile
      userType={'client'}
      avatarUrl={'/src/assets/mockPhotos/Alex.png'}
      userName={'Олександр Немцов'}
      userBalance={'5.00'}
    />
  );
};

export default ProfilePage;
