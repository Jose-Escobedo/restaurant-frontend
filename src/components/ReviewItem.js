import React from "react";
import ChangeReviewForm from "./ChangeReviewForm";
function ReviewItem({
  review: { name, content, id },
  onDeleteReview,
  changeReview,
  review,
}) {
  function handleRemoveReview(e) {
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE",
    });
    onDeleteReview(id);
  }
  return (
    <div className="review-item">
      <div className="name-content">
        <h1>{name}</h1>
        <h2>{content}</h2>
      </div>
      <div className="remove-btn">
        <button onClick={handleRemoveReview}>Remove Review</button>
      </div>
      <ChangeReviewForm
        key={review.id}
        changeReview={changeReview}
        reviewId={review.id}
      />
    </div>
  );
}

export default ReviewItem;
