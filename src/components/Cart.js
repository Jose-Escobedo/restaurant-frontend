import React from "react";
import Header from "./Header";
import MenuItemCart from "./MenuItemCart";

function Cart({ menu, handleClick, handleTotal, total }) {
  return (
    <>
      <Header />
      <div className="cart-menu-container">
        <h1 id="cart-title">Items in Cart</h1>
        <div className="menu">
          {menu.map((item) => {
            return (
              <MenuItemCart
                menu={item}
                key={item.id}
                handleClick={handleClick}
                handleTotal={handleTotal}
              />
            );
          })}
        </div>
        {/* <h1>{`Cart Total: ${total}`}</h1> */}
      </div>
    </>
  );
}

export default Cart;
