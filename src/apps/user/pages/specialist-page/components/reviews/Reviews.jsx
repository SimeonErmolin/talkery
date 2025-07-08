import React from 'react';
import AllReviewsModal from './AllReviewsModal.jsx';
import ReviewTemplate from './ReviewTemplate.jsx';
import { useModal } from '../../../../../../shared/hooks/useModal.js';
import ModalLayout from '../../../../../../shared/components/ModalLayout/ModalLayout.jsx';

const Reviews = ({ ...props }) => {
  const { modalIsOpened, openModal, closeModal } = useModal();

  return (
    <div>
      <h3 className="specialist-page__subtitle specialist-page__subtitle--title">
        Відгуки
      </h3>

      <div className="specialist-card-container specialist-reviews">
        <ReviewTemplate {...props} />

        <button className="button gray" onClick={openModal}>
          Всі відгуки
        </button>

        <ModalLayout
          onClose={closeModal}
          isOpen={modalIsOpened}
          contentClassName={''}
        >
          <AllReviewsModal />
        </ModalLayout>
      </div>
    </div>
  );
};

export default Reviews;
