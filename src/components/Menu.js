import React from "react";
import Header from "./Header";
import MenuItem from "./MenuItem";
import NewMenuForm from "./NewMenuForm";

function Menu({ menu, handleCartClick, addNewMenuItem }) {
  return (
    <>
      <Header />
      <div className="menu">
        {menu.map((item) => {
          return (
            <MenuItem menu={item} key={item.id} handleClick={handleCartClick} />
          );
        })}
        <NewMenuForm key={menu.id} addNewMenuItem={addNewMenuItem} />
      </div>
    </>
  );
}

export default Menu;
