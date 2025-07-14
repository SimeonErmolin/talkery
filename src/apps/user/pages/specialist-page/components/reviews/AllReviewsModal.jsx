import React from 'react';
import ReviewTemplate from './ReviewTemplate.jsx';
import { useGetReviews } from '../../../../../../shared/api/api.js';
import NoDataMessage from '../../../../../../shared/components/NoDataMessage.jsx';

const AllReviewsModal = () => {
  const { data: reviews, isLoading } = useGetReviews();

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div className="review-modal">
      <h3 className="title">Відгуки</h3>
      {reviews.length > 0 ? (
        <div className="specialist-reviews">
          {reviews.map((review) => (
            <ReviewTemplate {...review} key={review.id} />
          ))}
        </div>
      ) : (
        <NoDataMessage place={'reviews'} margin />
      )}
    </div>
  );
};

export default AllReviewsModal;
