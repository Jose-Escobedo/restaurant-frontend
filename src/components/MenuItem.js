import React from "react";

function MenuItem({ menu, handleClick }) {
  return (
    <div className="menu-item">
      <img src={menu.image} alt={menu.name}></img>
      <h1>{menu.name}</h1>
      <h2>{`Price: $${menu.price}`}</h2>
      <button onClick={() => handleClick(menu.id, menu.price)}>
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;
