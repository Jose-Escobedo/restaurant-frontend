import React from "react";
import { useState } from "react";

function MenuItemCart({ menu, handleClick }) {
  return (
    <div className="menu-item">
      <img src={menu.image} alt={menu.name}></img>
      <h1>{menu.name}</h1>
      <h2>{`Price: $${menu.price}`}</h2>
      <button onClick={() => handleClick(menu.id)}>Remove from Cart</button>
    </div>
  );
}

export default MenuItemCart;
