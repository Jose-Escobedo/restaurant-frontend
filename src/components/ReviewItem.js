import React from "react";

function ReviewItem({
  review: { name, content, id },
  handleRemoveReview,
  handleUpdateReview,
  review,
}) {
  // const [reviews, setReviews] = useState([]);

  // const addNewReview = (newReviewObj) => {
  //  let newReview = [...reviews, newReviewObj]
  //  setReviews(newReview)
  // }

  return (
    <div className="review-item">
      <div className="name-content">
        <h1>{name}</h1>
        <h2>{content}</h2>
      </div>
      <div className="remove-btn">
        <button onClick={() => handleRemoveReview(review)}>
          Remove Review
        </button>
      </div>
    </div>
  );
}

export default ReviewItem;
