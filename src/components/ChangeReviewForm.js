import React from "react";
import { useState } from "react";
function ChangeReviewForm({ changeReview, id, name, content }) {
  const [reviewContent, setReviewContent] = useState("");
  const [reviewName, setReviewName] = useState("");

  const handleReviewName = (e) => {
    setReviewName(e.target.value);
  };
  const handleReviewContent = (e) => {
    setReviewContent(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    setReviewContent(e.target.value);
    setReviewName(e.target.value);

    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: reviewContent,
        name: reviewName,
      }),
    })
      .then((res) => res.json())
      .then((newReview) => changeReview(newReview));
  }
  return (
    <div id="edit-review" className="form-container">
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          name="title"
          value={reviewName}
          placeholder="Insert your name here..."
          onChange={handleReviewName}
        />
        <textarea
          type="text"
          name="content"
          placeholder="Write your review here..."
          rows={5}
          value={reviewContent}
          onChange={handleReviewContent}
        />
      </form>
      <button onClick={handleSubmit} className="form-button" type="submit">
        Edit Review
      </button>
    </div>
  );
}
export default ChangeReviewForm;
