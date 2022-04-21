import React from "react";
import ChangeReviewForm from "./ChangeReviewForm";

function ReviewItem({ onDeleteReview, changeReview, review }) {
  const { id, name, content } = review;

  function handleRemoveReview() {
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "DELETE",
    });
    onDeleteReview(id);
  }
  function handleChangeReview(newReview) {
    changeReview(newReview);
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
        id={id}
        content={content}
        name={name}
        changeReview={handleChangeReview}
      />
    </div>
  );
}

export default ReviewItem;
