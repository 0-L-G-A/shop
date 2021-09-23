import React from "react";
import MenuItem from "./menuItem";

function HeaderMenu(props) {
  return (
    <ul>
      <MenuItem text="Home" />
      <MenuItem text="Catalog" />
      <MenuItem text="Cart" />
    </ul>
  );
}

export default HeaderMenu;
