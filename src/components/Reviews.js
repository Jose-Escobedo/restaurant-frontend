import React, { useState } from "react";
import ReviewItem from "./ReviewItem";
import Header from "./Header";
import NewReviewForm from "./NewReviewForm";
import ChangeReviewForm from "./ChangeReviewForm";

function Reviews({ reviews, handleRemoveReview, addNewReview, changeReview }) {
  // const [buttonShow, setButtonShow] = useState(true);
  // function handleButtonShowForm(e) {
  //   setButtonShow(!buttonShow);
  // }
  return (
    <>
      <Header />
      <div className="reviews-container">
        <h1 id="review-title">Reviews</h1>
        <div className="reviews">
          {reviews.map((review) => {
            return (
              <>
                <ReviewItem
                  key={review.id}
                  review={review}
                  handleRemoveReview={handleRemoveReview}
                />
                <ChangeReviewForm
                  key={review.id}
                  changeReview={changeReview}
                  reviewId={review.id}
                />
              </>
            );
          })}
        </div>
      </div>

      <NewReviewForm addNewReview={addNewReview} />
    </>
  );
}

export default Reviews;
