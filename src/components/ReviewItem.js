import React from "react";

function ReviewItem({
  review: { name, content, id },
  onDeleteReview,
  handleUpdateReview,
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
    </div>
  );
}

export default ReviewItem;
