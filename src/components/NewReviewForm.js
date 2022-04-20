import React from "react";
import { useState } from "react";
function NewReviewForm({ addNewReview }) {
  const blankReview = {
    name: "",
    content: "",
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
    addNewReview(newReview);
    setFormData(blankReview);
  };
  return (
    <div className="form-container">
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
        Add Review
      </button>
    </div>
  );
}
export default NewReviewForm;
