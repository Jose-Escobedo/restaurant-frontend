import React, { useState } from "react";
import ReviewItem from "./ReviewItem";
import Header from "./Header";
import NewReviewForm from "./NewReviewForm";

function Reviews({ reviews, handleButtonShowForm, addNewReview }) {
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
            return <ReviewItem key={review.id} review={review} />;
          })}
        </div>
        {/* {buttonShow ? (
        <button onClick={handleButtonShowForm}>Add a review</button>
      ) : null} */}
      </div>
      <NewReviewForm addNewReview={addNewReview} />
    </>
  );
}

export default Reviews;
