import React from "react";

function ReviewItem({ review: { name, content } }) {
  // const [reviews, setReviews] = useState([]);

  // const addNewReview = (newReviewObj) => {
  //  let newReview = [...reviews, newReviewObj]
  //  setReviews(newReview)
  // }

  return (
    <div className="review-item">
      <h1>{name}</h1>
      <h2>{content}</h2>
    </div>
  );
}

export default ReviewItem;
