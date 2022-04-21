import React, { useState } from "react";
import ReviewItem from "./ReviewItem";
import Header from "./Header";
import NewReviewForm from "./NewReviewForm";
import ChangeReviewForm from "./ChangeReviewForm";

function Reviews({ reviews, onDeleteReview, addNewReview, changeReview }) {
  // const [buttonShow, setButtonShow] = useState(true);
  // function handleButtonShowForm(e) {
  //   setButtonShow(!buttonShow);
  // }
  let reviewArr = Array.from(reviews);
  return (
    <>
      <Header />
      <div className="reviews-container">
        <h1 id="review-title">Reviews</h1>
        <div className="reviews">
          {reviewArr.map((review) => {
            return (
              <>
                <ReviewItem
                  key={review.id}
                  review={review}
                  onDeleteReview={onDeleteReview}
                  changeReview={changeReview}
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
