import React from 'react';
import ModalLayout from '../../../../../shared/components/ModalLayout/ModalLayout.jsx';
import AllReviewsModal from '../../specialist-page/components/reviews/AllReviewsModal.jsx';

const ReviewsModal = ({ onClose, isOpen }) => {
  return (
    <ModalLayout onClose={onClose} isOpen={isOpen}>
      <AllReviewsModal />
    </ModalLayout>
  );
};

export default ReviewsModal;
