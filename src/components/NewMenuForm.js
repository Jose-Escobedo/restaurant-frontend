import React from "react";
import { useState } from "react";
function NewMenuForm({ addNewMenuItem }) {
  const blankMenuItem = {
    name: "",
    price: "",
    image: "",
  };
  const [newMenuItem, setFormData] = useState(blankMenuItem);
  const { name, price, image } = newMenuItem;

  function handleTitleChange(e) {
    setFormData({
      ...newMenuItem,
      name: e.target.value,
    });
    console.log(newMenuItem);
  }

  function handleImageChange(e) {
    setFormData({
      ...newMenuItem,
      image: e.target.value,
    });
    console.log(newMenuItem);
  }
  function handlePriceChange(e) {
    setFormData({
      ...newMenuItem,
      price: e.target.value,
    });
    console.log(newMenuItem);
  }

  const handleForm = (e) => {
    e.preventDefault();
    addNewMenuItem(newMenuItem);
    setFormData(blankMenuItem);
  };
  return (
    <div className="form-container">
      <h1 id="newMenuItemHeader">
        Got a suggestion? Add a new menu item here!{" "}
      </h1>
      <form id="newMenuForm" onSubmit={handleForm} className="review-form">
        <input
          type="text"
          name="title"
          value={newMenuItem.name}
          placeholder="Insert your name here..."
          onChange={handleTitleChange}
        />
        <input
          type="text"
          name="price"
          value={newMenuItem.price}
          placeholder="Insert your price here..."
          onChange={handlePriceChange}
        />
        <textarea
          type="text"
          name="image"
          placeholder="Write your image here..."
          rows={5}
          value={newMenuItem.image}
          onChange={handleImageChange}
        />
      </form>
      <button onClick={handleForm} className="form-button" type="submit">
        Add Menu Item
      </button>
    </div>
  );
}
export default NewMenuForm;
