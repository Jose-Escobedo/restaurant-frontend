import React from "react";
import { useState } from "react";
function ChangeReviewForm({ changeReview, reviewId }) {
  const blankReview = {
    name: "",
    content: "",
    id: `${reviewId}`,
  };
  const [newReview, setFormData] = useState(blankReview);
  const { name, content } = newReview;

  function handleTitleChange(e) {
    setFormData({
      ...newReview,
      name: e.target.value,
    });
    console.log(newReview);
  }

  function handleContentChange(e) {
    setFormData({
      ...newReview,
      content: e.target.value,
    });
    console.log(newReview);
  }

  const handleForm = (e) => {
    e.preventDefault();

    changeReview(newReview);
    setFormData(blankReview);
  };
  return (
    <div id="edit-review" className="form-container">
      <form onSubmit={handleForm} className="review-form">
        <input
          type="text"
          name="title"
          value={newReview.name}
          placeholder="Insert your name here..."
          onChange={handleTitleChange}
        />
        <textarea
          type="text"
          name="content"
          placeholder="Write your review here..."
          rows={5}
          value={newReview.content}
          onChange={handleContentChange}
        />
      </form>
      <button onClick={handleForm} className="form-button" type="submit">
        Edit Review
      </button>
    </div>
  );
}
export default ChangeReviewForm;
