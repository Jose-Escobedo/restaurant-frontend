import React from "react";
import { useState } from "react";
function ChangeReviewForm({ changeReview, id, name, content }) {
   const [reviewContent, setReviewContent] = useState("")
   const [reviewName, setReviewName] = useState("")

  const handleReviewName = (e) => {
    setReviewName(e.target.value)
  }
  const handleReviewContent = (e) => {
    setReviewContent(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    setReviewContent(e.target.value)
    setReviewName(e.target.value)

  
  fetch(`http://localhost:3000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: reviewContent,
        name: reviewName
      }),
    })
      .then((res) => res.json())
      .then((newReview) => changeReview(newReview));
  }

  // function handleTitleChange(e) {
  //   setFormData({
  //     ...newReview,
  //     name: e.target.value,
  //   });
  //   console.log(newReview);
  // }

  // function handleContentChange(e) {
  //   setFormData({
  //     ...newReview,
  //     content: e.target.value,
  //   });
  //   console.log(newReview);
  // }

  // const handleForm = (e) => {
  //   e.preventDefault();
  //   changeReview(newReview);
  //   setFormData(blankReview);
  // };
  return (
    // <div id="edit-review" className="form-container">
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
        <input type="submit" value="Edit Review"/>
      </form>
      
    // </div>
  );
}
export default ChangeReviewForm;
